<?php

namespace App\Http\Controllers\Dashboard;


use App\Models\Currency;
use App\Models\Item;
use App\Models\Order;
use App\Models\OrderShippingCost;
use App\Models\PaymentMethod;
use App\Models\Status;
use App\Notifications\CreateOrderNotification;
use App\Notifications\OrderReviewNotification;
use App\Rules\NonZero;
use App\Traits\OAC;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Shipping\ShpingAPIController;
use Illuminate\Support\Facades\DB;

class SubmitForReviewController extends Controller
{
    use OAC;


    public function showPendingForReview($id){
        try{
            $order = Order::with('user')->findOrFail($id);
        }catch (ModelNotFoundException $exception){
            return response()->json( ["status" => false, "message" => "Order not found"] );
        }
        $excced = false;
        $message = "";
        $volumetric_weight = 0;
        if (is_null($order->shipping_cost) || $order->shipping_cost == 0){
            $volumetric_weight = 0;
            foreach ($order->items as $item)
                $volumetric_weight +=
                    preg_replace("/[^0-9.]/", '', $item->volumetric_weight)
                    * optional($item->itemPrice)->quantity; //volumetric weight excluded the unit
            try {
                $maximum = cache()->rememberForever('maximum_shipping_weight', function (){
                    return \DB::select("SELECT MAX(weight) as weight FROM(SELECT CAST(SUBSTRING_INDEX(`weight_range`, '-', -1) AS SIGNED) AS weight FROM `shipment_rates`) AS t1");
                });
                if (isset($maximum['0']) && $maximum[0]->weight < $volumetric_weight) {
                    $excced = true;
                    $message = trans("api.shipping_weight_exceded").$maximum['0']->weight." lbs. Ordered items shipping weight is ".$volumetric_weight." lbs";
                }
            } catch (\Exception $e) {
                $excced = false;
            }

        }

        return response()->json(['order' => $order, 'excced' => $excced, "message" => $message, "volumetric_weight" => $volumetric_weight]);
    }

    /**
     * @param Request $request
     * @param $id
     * @return mixed
     * @throws \Exception
     * change order item information
     */
    public function update(Request $request, $id){
        $request->validate([
            'items.*.dimension' => 'required_if:*.volumetric_weight, null',
            'items.*.volumetric_weight' => 'required|not_in:0',
            'items.*.item_current_price' => 'required|not_in:0',
            'shipping_cost' => 'required_if:exceed, true|not_in:0'
        ]);
        try{
            $order = Order::with('user', 'address')->findOrFail($id);
        }catch (ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => 'Order not found']);
        }
        $itemsPrice = 0;
        //$royalty_charge = 0;
        foreach ($request->items as $item){
            $itm = Item::with('itemPrice', 'itemAdminOperationInfo')->findOrFail($item["id"]);
            $itm->title = $item["title"];
            $itm->weight = $item["weight"];
            $itm->dimension = $item["dimension"];
            $itm->volumetric_weight = $item["volumetric_weight"];
            $itm->imageUrl = $item["imageUrl"];
            $itm->save();
            $price = $item["item_current_price"] * $itm->itemPrice->quantity;
            //$royalty_charge += $this->royaltyCharge($item["item_current_price"]) * $itm->itemPrice->quantity;
            $itemsPrice += $price;
            $insurance_amount = $itm->is_apply_insurance ? $this->insuranceAmount($price) : 0.0;
            $itm->itemPrice()->update([
                'item_price' => $item["item_current_price"],
                'insurance_amount' => $insurance_amount,
                'shipping_cost' => $item["shipping_cost"],
                'current_price' => $item["item_current_price"]
            ]);
        }
        $status = null;
        if (isset(Status::whereAlias('review-complete')->first()->id)) {
            $status = Status::whereAlias('review-complete')->first()->id;
        }
        $range = $order->totalVolumetricWeight();
        $country = optional($order->address)->country_id;
        $state = optional($order->address)->state_id;
        $district = optional($order->address)->district_id;
        $us_tax = $this->taxUSA($itemsPrice);
        $service_charge = $this->royaltyCharge($itemsPrice);
        if (!$request->exceed){
            $shipping = new ShpingAPIController($this->filter);
            $shipping_cost = $shipping->getShippingCost($country, $range, $state, $district)->getData();
            if (!$shipping_cost->status)
                return response()->json([
                    'status' => false,
                    'message' => $shipping_cost->message,
                    'excced' => isset($shipping_cost->excced) ? $shipping_cost->excced : false
                ]);
            $shipping_cost = $shipping_cost->cost;
        }else{
            $shipping_cost = $request->shipping_cost * $request->volumetric_weight;
        }
        $order->shipping_cost = $shipping_cost;
        $order->tax_usa = $us_tax;
        $order->service_charge = $service_charge;
        $order->save();
        $order->changeStatus($status);
        $order->user->notify((new OrderReviewNotification( $order, ['database', 'mail', 'broadcast'] ))->delay( 5 ));
        return response()->json(['status' => true, 'message' => trans('api.orderReviewed')], 200);
    }

    public function getShippingCost(Request $request) {
        $country = $request->country;
        $range = $request->range;
        $state = $request->state;
        $district = $request->district;
        $shipping = new ShpingAPIController($this->filter);
        $shipping_cost = $shipping->getShippingCost($country, $range, $state, $district)->getData();
        if (!$shipping_cost->status)
            return response()->json(['status' => false, 'message' => $shipping_cost->message]);
        return response()->json(['status' => true, 'cost' => $shipping_cost->cost]);
    }

    public function saveOrder(Request $request, Order $order) {
        $request->validate([
            'user' => 'required|min:0',
            'address' => 'required|not_in:0',
            'items.*.weight' => ['required_if:includeShippingCost,true', 'numeric', new NonZero($request->includeShippingCost)],
            'items.*.quantity' => 'required|numeric|not_in:0',
            'shipping_cost' => ['required_if:includeShippingCost,true', 'numeric', new NonZero($request->includeShippingCost)],
            'service_charge' => ['required_if:includeServiceCharge,true', 'numeric', new NonZero($request->includeServiceCharge)],
            'items.*.item_price' => ['required_if:inlude_price,yes', 'numeric', new NonZero($request->inlude_price)]
        ]);
        DB::transaction(function () use($request, $order){
            $alias = $request->cash ? 'confirmed' : 'review-complete';
            $orderStatus = Status::whereAlias($alias)->first();
            $orderCurrency = Currency::where('code', 'usd')->first();
            $now = Carbon::now();
            $order->fill($request->only('shipping_cost', 'tax_bd', 'tax_usa', 'service_charge'));
            $order->user_id = $request->user;
            $order->order_number = $now->year . $now->month . random_int( 100000, 9999999 );
            $order->order_date = Carbon::now();
            $order->shipping_address_id = $request->address;
            $order->currency = $orderCurrency->id;
            //$order->last_status_id = $orderStatus->id;
            if ($request->has('cash')){
                $cash = PaymentMethod::where('is_online', 0)->first()->id;
                $order->payment_method_id = $cash;
            }
            $order->save();
            $order->changeStatus($orderStatus->id);
            foreach ($request->items as $item){
                $savedItem = $order->items()->create([
                    "title" => $item["title"] ?? '',
                    "weight" => $item["weight"],
                    "volumetric_weight" => $item["weight"],
                    "sku" => $item["sku"] ?? ''
                ]);
                $savedItem->itemPrice()->create([
                    'quantity' => $item["quantity"],
                    'current_price' => $item['item_price'],
                    'item_price' => $item['item_price']
                ]);
                $savedItem->changeStatus($orderStatus->id);
            }
            if (!$request->includeShippingCost){
                $orderShipping = new OrderShippingCost([
                    'reference_id' => $order->id
                ]);
                $orderShipping->save();
            }
        }, 5);
        if (!$request->has('cash')) {
            $order->user->notify((new CreateOrderNotification($order, ['database', 'mail', 'broadcast']))->delay(5));
        }
        if ($request->has('cash')){
            $order->user->notify((new CreateOrderNotification($order, ['database', 'mail', 'broadcast'], true))->delay(5));
        }
        return response()->json([
            'status' => true,
            'message' => 'Order has been proceed successfully',
            "order_id" => $order->id
        ]);
    }

}
