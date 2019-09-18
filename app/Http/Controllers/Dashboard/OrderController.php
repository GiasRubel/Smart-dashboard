<?php

namespace App\Http\Controllers\Dashboard;

use App\Filters\OrderFilter;
use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\ItemAdminOperation;
use App\Models\Order;
use App\Models\OrderPayment;
use App\Models\PaymentMethod;
use App\Models\ProductMeasurement;
use App\Models\CashPayment;
use App\Models\Status;
use App\Models\User;
use App\Notifications\ItemNotification;
use App\Notifications\OrderCustomNotification;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Traits\OAC;
use Illuminate\Support\Facades\Hash;

class OrderController extends Controller
{
    use OAC;

    public $filter;


    public function __construct(OrderFilter $orderFilter)
    {
        $this->filter = $orderFilter;
    }


    public function index()
    {
        $country = $this->getCookie('country');
        $order = Order::with(['user', 'lastStatus', 'moneyReceipt', 'address'])
            ->whereHas('lastStatus', function($query){
                $query->where('alias', '!=', 'pending-for-review');
            })
            ->when($country, function ($query) use ($country){
                return $query->whereHas('address', function ($query) use ($country){
                    return $query->where('country_id', '=', $country);
                });
            })
            ->filter($this->filter)
            ->paginate(10);
        return $order;
    }

    public function pending_for_review()
    {
        $country = $this->getCookie('country');
        return Order::with('lastStatus','user')
            ->where(function ($query){
                $query->whereHas('lastStatus', function ($query) {
                    $query->where('alias', '=', 'pending-for-review');
                })->orWhereHas('items.status', function ($query){
                    $query->where('alias', '=', 'pending-for-review');
                });
            })
            ->when($country, function ($query) use ($country){
                return $query->whereHas('address', function ($query) use ($country){
                    return $query->where('country_id', '=', $country);
                });
            })
            ->filter($this->filter)
            ->latest('id')
            ->paginate(request()->per_page ? request()->per_page : 10);
    }

    public function edit_tax_bd(Request $request, $id)
    {
        $order = Order::find($id);

        $order->tax_bd = $request->tax_bd;

        $order->save();

        return response()->json(['message' => 'Data Updated']);
    }

    public function ready_for_purchase()
    {
        $country = $this->getCookie('country');
        return Order::with('lastStatus','user')
            ->whereHas('lastStatus', function ($query) {
                $query->where('alias', '=', 'confirmed');
            })
            ->when($country, function ($query) use ($country){
                return $query->whereHas('address', function ($query) use ($country){
                    return $query->where('country_id', '=', $country);
                });
            })
            ->orderBy('id', 'DESC')
            ->filter($this->filter)
            ->paginate(request()->per_page);
    }

    public function cash_payment()
    {
        $country = $this->getCookie('country');
        return Order::with('lastStatus','user', 'moneyReceipt')
            ->whereHas('lastStatus', function ($query) {
                $query->where('alias', '=', 'cash-pending');
            })
            ->when($country, function ($query) use ($country){
                return $query->whereHas('address', function ($query) use ($country){
                    return $query->where('country_id', '=', $country);
                });
            })
            ->orderBy('id', 'DESC')
            ->filter($this->filter)


            ->paginate(request()->per_page);
    }

    public function review_complete()
    {
        $country = $this->getCookie('country');
        return Order::with('lastStatus','user')

            ->whereHas('lastStatus', function ($query) {
                $query->where('alias', '=', 'review-complete');
            })
            ->when($country, function ($query) use ($country){
                return $query->whereHas('address', function ($query) use ($country){
                    return $query->where('country_id', '=', $country);
                });
            })
            ->orderBy('id', 'DESC')
            ->filter($this->filter)

            ->paginate(request()->per_page);
    }



    public function show($id)
    {
        try {
            $order = Order::with( 'items.itemPrice',
                'items.itemAdminOperationInfo',
                'items.store',
                'address.country',
                'address.state',
                'address.district',
                'user',
                'paymentmethod',
                'tax_rule',
                'status',
                'payments.method',
                'payments.refunds',
                'payments.refunds.user',
                'payments.cash',
                'payments.online',
                'currencies',
                'moneyReceipt',
                'items.status',
                'reasons',
                'lastStatus'
            )->findOrfail( $id );
        } catch (ModelNotFoundException $exception) {
            return response()->json( ["status" => false, "message" => "Order not found"] );
        }
        $order->status->map( function ($query) {
            if ($query->pivot->updated_by)
                $query->setRelation( 'user', User::find( $query->pivot->updated_by ) );
        } );
        return $order;
    }


    public function destroy($id)
    {
        $order = Order::find($id);
        if ($order->lastStatus && !in_array($order->lastStatus->alias, ['cash-pending', 'pending', 'cancel', 'review-complete', 'pending-for-review']))
            return response()->json(['status' => false, 'message' => "This order is not allowed to delete"]);
        $order->delete();
        return response()->json(['status' => true, 'message' => "Order ".trans('api.deleted')]);
    }


    public function statusUpdateAll(Request $request)
    {
        $request->validate( [
            'orderId' => 'required',
            'status' => 'required|not_in:0'
        ], [
            'orderId.required' => "You must select an order to update"
        ] );
        $orderIds = $request->orderId;
        foreach ($request->orderId as $key => $id) {
            $order = Order::with( "status", "payments", "lastStatus" )->find( $id );
            $status = Status::find($request->status);
            array_diff($orderIds, [$request->grant]);
            if ($request->grant != $id){
                if ($this->statusChecker($status->alias)){
                    if (!$order->payments->count()){
                        return response()->json([
                            'status' => false,
                            'status_confirm' => true,
                            'orderIds' => $orderIds,
                            'status_message' => trans('api.statusNotAllowed'),
                            'skip' => $id,
                            'order' => $order
                        ]);
                    }
                }
            }
            unset($orderIds[$key]);
            if($order->last_status_id != $request->status){
                $order->changeStatus($request->status);
                $order = Order::find($order->id);
                $status = $order->lastStatus->notify_by;
                $order->statusNotify($status); //notify user
            }
        }

        return response()->json( ["status" => true, "message" => trans( 'api.statusUpdate' )] );
    }


    public function invoice($order_id, $custom = 0)
    {
        try {
            $data["custom"] = $custom;
            $order = Order::findOrfail( $order_id );
            $data["order"] = $order->where( 'id', $order_id )->with( 'items.itemPrice', 'items.itemAdminOperationInfo', 'items.store', 'address', 'user' )->first();
        } catch (ModelNotFoundException $exception) {
            return "<h1>Order not found</h1>";
        }
        \PDF::setOptions( ['dpi' => 150, 'defaultFont' => 'sans-serif'] );
        return $pdf = \PDF::loadView( 'dashboard.invoice.order', $data )->stream( 'order-invoice.pdf' );
    }



    public function withoutInvoice($order_id, $custom = 0){
        try {
            $data["custom"] = $custom;
            $order = Order::findOrfail( $order_id );
            $data["order"] = $order->where( 'id', $order_id )->with( 'items.itemPrice', 'items.itemAdminOperationInfo', 'items.store', 'address', 'user' )->first();
        } catch (ModelNotFoundException $exception) {
            return "<h1>Order not found</h1>";
        }
        \PDF::setOptions( ['dpi' => 150, 'defaultFont' => 'sans-serif'] );
        return $pdf = \PDF::loadView( 'dashboard.invoice.order_price', $data )->stream( 'order-invoice.pdf' );
    }


    public function storePayment(Request $request, OrderPayment $payment)
    {
        $request->validate([
            'amount' => 'required|numeric|min:1',
            'currency' => 'required|not_in:0',
            'charge_id' => 'nullable|min:1',
            'create_at' => 'required',
            'bank_name' => 'required|min:2',
            'account_name' => 'required|min:3',
            'account_number' => 'required|min:7|max:27'
        ]);
        $result = $this->currencyRate($request->currency)->getData();
        $paymentMethod = PaymentMethod::where( 'is_online', 0 )->first();
        $charge_id = $request->charge_id != "" ? $request->charge_id : uniqid( 'payment' );
        if ($request->has('id')){
            $payment = OrderPayment::find($request->id);
            $charge_id = $payment->charge_id;
        }
        $payment->fill( $request->except(['bank_name', 'account_name', 'account_number', 'bank_branch']) );
        $payment->charge_id = $charge_id;
        $payment->payment_method_id = $paymentMethod->id;
        $payment->status = 'captured';
        $payment->conversion_rate = $result->value;
        $payment->create_at = Carbon::parse($request->create_at);
        $payment->save();
        $payment->cash()->save(
            new CashPayment([
                'account_name' => $request->account_name,
                'bank_name' => $request->bank_name,
                'account_number' => $request->account_number,
                'branch_name' => $request->bank_branch
            ])
        );
        $status = Status::where('alias', 'confirmed')->first()->id;
        if ($payment->order->last_status_id != $status){
            $payment->order->changeStatus($status);
        }
        return response()->json( ['status' => true, 'message' => !$request->has('id') ? trans( 'api.payment-added' ) : trans( 'api.payment-updated' )] );
    }


    public function adminOperation(Request $request) {
        $request->validate( [
            'custom_amount' => 'nullable|numeric',
            'custom_amount_reason' => 'required_with:custom_amount|min:10'
        ]);
        Item::where( 'id', $request->item_id )->update([
            'weight' => $request->weight
        ]);
        $admin = ItemAdminOperation::updateOrCreate( ['item_id' => $request->item_id], [
            'custom_amount' => $request->custom_amount,
            'custom_amount_reason' => $request->custom_amount_reason,
            'updated_by' => \Auth::id()
        ]);
        if ($request->has('custom_amount')  && $request->custom_amount > 0){
            if (isset(Status::whereAlias('partial-payment-pending')->first()->id))
                $status = Status::whereAlias('partial-payment-pending')->first()->id;
            else
                return response()->json( ["status" => false, "message" => "Status not found"] );
            try{
                $order = Order::with('status')->findOrFail($request->order_id);
                $order->changeStatus($status);
                $order = Order::find($order->id);
                $order->statusNotify($order->lastStatus->notify_by); //notify user
            }catch (ModelNotFoundException $exception){
                return response()->json( ["status" => false, "message" => "Order not found"] );
            }
        }
        return response()->json( ["status" => true, "message" => trans( 'api.customInfo' ), "invoice" => true, "custom" =>  $admin->id] );
    }

    public function statusUpdateSingle(Request $request)
    {
        $rq = $request->create(
            route( "order-status-update" ),
            "POST"
        );
        $result = \Route::dispatch( $rq );
        return $result;
    }


    public function measurementProduct($order_id, $purchased = false)
    {
        return $items = Item::with( 'productMeasurement.reviews', 'itemAdminOperationInfo' )
            ->where( 'order_id', '=', $order_id )
            ->when(!$purchased, function($query){
                $query->has("productMeasurement");
            })
            ->get();
    }


    public function updateMeasurementProduct(Request $request)
    {
        $request->validate([
            'file' => 'nullable|mimes:jpg,png,jpeg,svg'
        ]);

        $rq = $request->create(
            route( "order-status-update" ),
            "POST", [
                "grant" => $request->orderId,
                "orderId" => [$request->orderId],
                "status" => $request->status,
            ]
        );
        $result = app()->handle($rq)->getContent();
        $result = json_decode($result);
        if ($request->file != ''){
            $file = $request->file('file');
            $ext = $file->getClientOriginalExtension();
            $name = uniqid('us_on_hand').".".$ext;
            $file->storeAs('public/order', $name);
            \DB::table("order_statuses")
                ->whereOrderId($request->orderId)
                ->whereStatusId($request->status)
                ->update([
                    'description' => json_encode(['image' => 'order/'.$name])
                ]);
        }
        if (!$result->status)
            return response()->json($result);
        $changedItem = [];
        $items = Order::with('items.productMeasurement')->find($request->orderId)->first();
        foreach ($items->items as $item){
            if (optional($item->productMeasurement)->volumetric_weight < optional($item->productMeasurement)->approved_weight){
                $changedItem[] = [
                    'item_id' => $item->id,
                    'item_name' => $item->title,
                    'ordered_item_volumetric_weight' => optional($item->productMeasurement)->volumetric_weight,
                    'new_volumetric_weight' => optional($item->productMeasurement)->approved_weight,
                    'custom_amount' => optional($item->itemAdminOperationInfo)->custom_amount,
                    'reason' => optional($item->itemAdminOperationInfo)->custom_amount_reason
                ];
            }
        }
        if (count($changedItem) > 0){
            return response()->json([
                'status' => $result->status,
                'confirmMessage' => trans('api.itemReviewVWeightExceeded'),
                'confirm' => true,
                'changedItem' => $changedItem
            ]);
        }
        return response()->json(['status' => $result->status, 'message' => $result->message]);
    }

    public function invoiceUpdate(Request $request)
    {

        if ($request->has( 'orderInvoice' )) {
            Order::whereIn( "id", $request->orderId )->update( [
                'purchase_invoice_number' => $request->orderInvoice
            ] );
        }
        foreach ($request->items as $item) {
            $admin = $item;
            Item::whereId($item["id"])->update([
                'is_in_popular' => $item["is_in_popular"] == false ? 0 : 1
            ]);
            ItemAdminOperation::updateOrCreate([ 'item_id' => $item["id"] ], [
                'purchase_invoice_number' => $admin["purchase_invoice_number"]
            ]);
        }
        $rq = $request->create(
            route( "order-status-update" ),
            "POST"
        );
        $result = \Route::dispatch( $rq );
        return $result;
    }

    public function search(Request $request){
        $searchText = $request->order;
        return $this->searchOrder($searchText);
    }

    public function searchOrder($searchText, $paginate = true) {
        $orders = $order = Order::with(['user', 'lastStatus'])
            ->where('order_number', 'like', "%{$searchText}%")
            ->orWhere('order_date', "like", "%{$searchText}%")
            ->orWhereHas('user', function ($query) use($searchText){
                $query->where('email', 'like', "%{$searchText}%");
                $query->orWhere('name', 'like', "%{$searchText}%");
                $query->orWhere('mobile', 'like', "%{$searchText}%");
            })
            ->orWhereHas('address.country', function ($query) use ($searchText){
                $query->where('title', 'like', "%{$searchText}%");
                $query->orWhere('country_code', 'like', "%{$searchText}%");
            })
            ->orWhereHas('address.state', function ($query) use ($searchText){
                $query->where('title', 'like', "%{$searchText}%");
            })
            ->orWhereHas('address', function ($query) use($searchText){
                $query->where('city', 'like', "%{$searchText}%");
                $query->orWhere('full_name', 'like', "%{$searchText}%");
                $query->orWhere('phone', 'like', "%{$searchText}%");
            })
            ->orWhereHas('lastStatus', function ($query) use($searchText){
                $query->where('title', 'like', "%{$searchText}%");
                $query->orWhere('alias', 'like', "%{$searchText}%");
            })
            ->orWhereHas('items.status', function ($query) use($searchText){
                $query->where('title', 'like', "%{$searchText}%");
            })
            ->latest('id');
        if ($paginate){
            return $orders->paginate(10);
        }else{
            return $orders->get();
        }
    }


    public function saveItemReview(Request $request){
        $itemId = !empty($request->item["product_measurement"]["id"]) ? $request->item["product_measurement"]["id"] : $request->item["id"];
        $weight = $request->review["w"];
        $dimension = $request->review["d"];
        $volumetric_weight = $request->review["v"];
        $data = [];
        foreach ($request->review["v"] as $key => $value){
            if (!empty($request->review["v"])){
                $data[] = [
                    'measurement_id' => $itemId,
                    'item_from_weight' => isset($weight[$key]) ? $weight[$key] : 0,
                    'item_from_dimension' => $dimension["h"][$key]." x ".$dimension["w"][$key]." x ".$dimension["l"][$key] ." inch",
                    'item_from_volumetric_weight' => $volumetric_weight[$key]
                ];
            }
        }
        try{
            $product = ProductMeasurement::with('reviews')->findOrFail($itemId);
        }catch (ModelNotFoundException $exception){
            $item = Item::find($itemId);
            $product = $item->productMeasurement()->first();
        }
        $product->reviews()->createMany($data);
        return response()->json(["status" => true, 'message' => trans('api.productReviewAdded')]);
    }
    public function approve($id){
        $obj = ProductMeasurement::where('id', $id)->update([
            'approved_by' => auth()->id()
        ]);
        if ($obj)
            return response()->json(['status' => true, 'message' => trans('api.productMeasurementUpdate')]);
        return response()->json(['status' => false, 'message' => 'Nothing to update']);

    }


    public function customPrice(Request $request){
        $data = [];
        $errors = [];
        foreach ($request->all() as $item){
            if ($item["custom_amount"] > -1){
                if (is_numeric($item["custom_amount"]) && strlen($item["reason"]) > 5){
                    $data[] = [
                        'item_id' => $item["item_id"],
                        'custom_amount' => $item["custom_amount"],
                        'custom_amount_reason' => $item["reason"],
                        'new_volumetric_weight' => $item["new_volumetric_weight"],
                        'item_name' => $item["item_name"],
                        'ordered_item_volumetric_weight' => $item["ordered_item_volumetric_weight"]
                    ];
                }else{
                    $errors[] = [
                        'error' => $item["item_name"]. " -> ".trans('api.customAmount')
                    ];
                }
            }
        }
        if (count($errors) > 0)
            throw \Illuminate\Validation\ValidationException::withMessages($errors);

        foreach ($data as $item){
            ItemAdminOperation::updateOrCreate(['item_id' => $item["item_id"]], [
                'custom_amount' => $item["custom_amount"],
                'custom_amount_reason' => $item["custom_amount_reason"],
                'updated_by' => \Auth::id()
            ]);
            Item::where('id', $item["item_id"])->update([
                'volumetric_weight' => $item["new_volumetric_weight"]
            ]);
        }
        if (count($data) > 0){
            $item = Item::where('id', $data[0]["item_id"])->with('order')->first();
            $status = Status::where('alias', 'partial-payment-pending')->first()->id; 
            $item->order->changeStatus($status);
            $item->order->user->notify( (new ItemNotification( $data, ['database','mail'] ))->delay( 5 ) );
            return response()->json([ 'status' => true, 'message' => trans('api.customAmountAdded') ]);
        }
        return response()->json([
            'status' => true,
            'confirmMessage' => trans('api.itemReviewVWeightExceeded'),
            'confirm' => true,
            'changedItem' => $request->all()
        ]);
    }

    public function sendNotification(Request $request){
        $request->validate([
            'title' => 'required|min:5|max:250',
            'message' => 'required_if:email,true|min:10|max:10000'
        ],[
            'message.required_if' => 'For sending email message is required'
        ]);
        $notifyBy = ['database', 'broadcast'];
        $request->has('email') ? array_push($notifyBy, "mail") : '';
        Order::find($request->order_id)->user->notify((new OrderCustomNotification( $request->all(), $notifyBy ))->delay( 5 ));
        return response()->json(['status' => true, 'message' => 'User has been notified successfully']);
    }

    public function cancel(Request $request)
    {
       $request->validate([
           'reason' => 'required|not_in:0',
           'other_message' => 'required_if:showOtherReasonText,true',
           'orderId' => 'required|not_in:0'
       ],[
           'reason.required' => trans('api.reason_required'),
           'other_message.required_if' => trans('api.message_required')
       ]);

       $order = Order::with('reasons')->findOrFail($request->orderId);
       if ($order->last_status_id != $request->status){
           $order->changeStatus($request->status);
           $order->reasons()->attach([$request->reason => [ 'other_reason' => $request->other_message ?? '' ]]);
           $order = Order::findOrFail($request->orderId);
           $order->statusNotify($order->lastStatus->notify_by);
       }
       return response()->json(['status' => true, 'message' => trans('api.ordercanceled')]);
    }

    public function deleteOrder(Request $request) {
        $request->validate([
            'password' => 'required'
        ]);
        if (Hash::check($request->password, auth()->user()->getAuthPassword())){
            foreach ($request->orders as $id){
                $result = $this->destroy($id)->getData();
                if (!$result->status){
                    return response()->json(['status' => false, 'message' => $result->message]);
                }
            }
            return response()->json(['status' => true, 'message' => "Order ".trans('api.deleted')]);
        }else{
            return response()->json(['status' => false, 'message' => 'Password is incorrect']);
        }
    }

    public function storeDeliveredInfo(Request $request){
        try{
            $description = [];
            if (!is_null($request->file('files'))){
                $file = $request->file('files');
                $ext = $file->getClientOriginalExtension();
                $name = uniqid('delivery').".".$ext;
                $file->storeAs('public/order', $name);
                $description["image"] = 'order/'.$name;
            }
            if (!is_null($request->delivered_to)){
                $description["delivered_to"] = $request->delivered_to;
            }
            $order = Order::findOrFail($request->orderId);
            $order->delivery_date = Carbon::parse($request->date)->subHour(6);
            $order->save();
            if ($order->last_status_id != $request->status){
                $order->changeStatus($request->status, $description);
                $order = $order->fresh(['lastStatus']);
                $order->statusNotify(optional($order->lastStatus)->notify_by);
            }else{
                if (count($description) > 0){
                    \DB::table("order_statuses")
                        ->whereOrderId($request->orderId)
                        ->whereStatusId($request->status)
                        ->update([
                            'description' => json_encode($description)
                        ]);
                }
            }
            return response()->json(['status' => true, 'message' => trans('api.delivery_info')]);
        }catch (ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => 'Order not found']);
        }
    }

    public function ordersReport(Request $request) {
        if(!is_null($request->text)){
            $data["orders"] = $this->searchOrder($request->text, false);
        }else if (!is_null($request->ids)){
            $data["orders"] = Order::whereIn('id', explode(',', $request->ids))->latest('id')->get();
        }else{
            return "<h1>No order found</h1>";
        }
        \PDF::setOptions( ['dpi' => 150, 'defaultFont' => 'sans-serif'] );
        return $pdf = \PDF::loadView( 'dashboard.invoice.orders_report', $data )->stream( "order's-filter-report.pdf" );
    }

}
