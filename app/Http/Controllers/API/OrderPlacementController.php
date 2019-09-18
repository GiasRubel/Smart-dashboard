<?php

namespace App\Http\Controllers\API;

use App\Models\{CashMoneyReceipt, Currency, Order, PaymentMethod, PaymentOnline, Status, UserPaymentCart};
use Carbon\Carbon;
use Illuminate\{Database\Eloquent\ModelNotFoundException, Http\Request};
use App\Http\Controllers\Controller;
use App\Traits\OAC;
use App\Notifications\PaymentStatusNotification;
use App\Repo\OrderRepository;

class OrderPlacementController extends Controller
{
    use OAC;
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     * place order for user
     */
    public function placeOrder(Request $request) {
        $orderRepo = new OrderRepository;
        /*validating user input*/
        $request->validate($this->orderValidation(), $this->orderValidationMessage()); // just don't trust your user
        /*enid of validation*/
        /*checking if user have item to order*/
        if (!optional(auth()->user()->addToCarts)->count())
            return response()->json(['status' => false, 'message' => trans('api.itemRequired')]);
        /*end of checking*/
        /*payment method validation*/
        try{
            $paymentMethod = PaymentMethod::findOrFail($request->paymentMethod);
            if ($paymentMethod->is_online){
                try{
                    $gateWay = PaymentOnline::findOrFail($request->gateway);
                    if ($gateWay->alias == 'stripe' && $request->card == null)
                        return response()->json(['status' => false, 'message' => trans('api.cardRequired')]);
                }catch (ModelNotFoundException $exception){
                    return response()->json(['status' => false, 'message' => 'Gateway is not defined']);
                }
            }
        }catch(ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => 'Payment method is not found']);
        }

        /*end of payment method validation*/
        /*calculate order information*/
        $calculationResult = $this->orderCalculator($request->all(), $paymentMethod);
        $currencyRate = $calculationResult["currency_rate"];
        /*end of calculation*/
        /*checking front end result*/
        if (intval($calculationResult["grand_price"]) != intval($request->order["grandTotal"]))
            return response()->json(['status' => false, 'message' => trans('api.calculationError')]);
        /*end of checking*/
        /*order delivery address*/
        $address = $orderRepo->address($request->address);
        //placing orders
        $alias = $paymentMethod->is_online ? 'pending' : 'cash-pending';
        $status = Status::where('alias', $alias )->first()->id;
        $orderCurrency = Currency::where('code', 'usd')->first();
        $order = new Order;
        $now = Carbon::now();
        $order->order_number = $now->year . $now->month . random_int( 100000, 9999999 );
        $order->shipping_address_id = $address->id;
        $order->payment_method_id = $request->paymentMethod;
        $order->tax_usa = $calculationResult["tax_usa"];
        $order->tax_bd = $calculationResult["tax_bd"];
        $order->user_id = auth()->id();
        $order->order_date = Carbon::now();
        $order->currency = $orderCurrency->id;
        $order->service_charge = $calculationResult["royalty_charge"];
        $order->shipping_cost = $calculationResult["shipping_cost"];
        //$order->last_status_id = $status;
        $order->save();
        //updating items table with user id
        foreach (auth()->user()->addToCarts as $item) {
            $item->order_id = $order->id;
            $item->save();
        }
        $order->changeStatus($status);
//        $order->status()->attach($status);
        if (isset($request->gateway) && $paymentMethod->is_online){
            if($gateWay->alias == 'stripe'){
                $cvc = $request->cvc;
                if ($request->card == null)
                    return response()->json(['status' => false, 'message' => trans('api.cardRequired')]);
                try{
                    $userCard = UserPaymentCart::where('user_id', auth()->id())->findOrFail($request->card);
                }catch (ModelNotFoundException $exception){
                    return response()->json(['status' => false, 'message' => trans('api.cardNotFound')]);
                }
                $request = Request::create(route('stripe.charge'), 'POST', [
                    'order_id' => $order->id,
                    'card_number' => $userCard->card_number,
                    'cvc' => $cvc,
                    'expire_month' => substr($userCard->expire_at, 5, 2),
                    'expire_year' => substr($userCard->expire_at, 0, 4),
                    'gateway_id' => $gateWay->id,
                    'currency' => $request->order["currency"],
                    'rate' => $currencyRate,
                    'amount' => $calculationResult["grand_price"],
                    'gateway_charge_amount' => $calculationResult["gateway_charge"]
                ]);
                $result = app()->handle($request)->getData();
                if(!$result->status){
                    return response()->json($result);
                }
                //storing status
                $status = Status::where('alias', 'confirmed' )->first()->id;
                //$order->last_status_id = $status;
                $order->save();
                $order->changeStatus($status);
                //$order->status()->attach($status);
                return response()->json( [ 'message' => 'Thank you. Your order has been placed successfully', 'status' => true, 'order_id' => $order->id, 'cash' => 0, 'order_number' => $order->order_number ] );
            }else if($gateWay->alias == 'authorize'){
                $cvc = $request->cvc;
                if ($request->card == null)
                    return response()->json(['status' => false, 'message' => trans('api.cardRequired')]);
                try{
                    $userCard = UserPaymentCart::where('user_id', auth()->id())
                        ->findOrFail($request->card);
                }catch (ModelNotFoundException $exception){
                    return response()->json(['status' => false, 'message' => trans('api.cardNotFound')]);
                }
                $request = Request::create(route('authorize.charge'), 'POST', [
                    'order_id' => $order->id,
                    'card_number' => $userCard->card_number,
                    'cvc' => $cvc,
                    'expire_month' => substr($userCard->expire_at, 5, 2),
                    'expire_year' => substr($userCard->expire_at, 0, 4),
                    'gateway_id' => $gateWay->id,
                    'currency' => $request->order["currency"],
                    'rate' => $currencyRate,
                    'amount' => $calculationResult["grand_price"],
                    'gateway_charge_amount' => $calculationResult["gateway_charge"],
                    'address' => $userCard->billingAddress
                ]);
                $result = app()->handle($request)->getData();
                if(!$result->status){
                    return response()->json($result);
                }
                //storing status
                $status = Status::where('alias', 'confirmed' )->first()->id;
                //$order->last_status_id = $status;
                $order->save();
                $order->changeStatus($status);
                //$order->status()->attach($status);
                return response()->json( [ 'message' => 'Thank you. Your order has been placed successfully', 'status' => true, 'order_id' => $order->id, 'cash' => 0, 'order_number' => $order->order_number ] );
            }else if($gateWay->alias == 'sslcommerz'){
                $request = Request::create(route('sslcommerz.complete'), 'POST', [
                    'gateway_id' => $gateWay->id,
                    'amount' => $calculationResult["grand_price"],
                    'order_id' => $order->id,
                    'currency' => $request->order["currency"],
                    'rate' => $currencyRate,
                    'gateway_charge_amount' => $calculationResult["gateway_charge"]
                ]);

                $result = app()->handle($request);
                return response()->json($result);
            }else if ($gateWay->alias == 'american-express'){
                $request = Request::create(route('sslcommerz.complete'), 'POST', [
                    'gateway_id' => $gateWay->id,
                    'amount' => $calculationResult["grand_price"],
                    'order_id' => $order->id,
                    'currency' => $request->order["currency"],
                    'rate' => $currencyRate,
                    'gateway_charge_amount' => $calculationResult["gateway_charge"]
                ]);

                $result = app()->handle($request);
                return response()->json($result);
            }
        }
        $cash = $alias == 'cash-pending' ? 1 : 0;
        $order->user->notify((new PaymentStatusNotification("CASH", $order, 'CASH'))->delay(5));
        return response()->json( [ 'message' => 'Thank you. Your order has been placed successfully', 'status' => true, 'order_id' => $order->id, 'cash' => $cash, 'order_number' => $order->order_number ] );
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     * submitting order for review
     */
    public function submitForReview(Request $request){
        if (!optional(auth()->user()->addToCarts)->count())
            return response()->json(['status' => false, 'message' => trans('api.itemRequired')]);
        $request->validate($this->orderValidation(true), $this->orderValidationMessage(true)); // just don't trust your user
        //saving address
        $orderRepo = new OrderRepository;
        $address = $orderRepo->address($request->address);
        //placing orders
        $status = Status::where('alias', 'pending-for-review' )->first()->id;
        $orderCurrency = Currency::where('code', 'usd')->first();
        $order = new Order;
        $now = Carbon::now();
        $order->order_number = $now->year . $now->month . random_int( 100000, 9999999 );
        $order->shipping_address_id = $address->id;
        $order->user_id = auth()->id();
        $order->order_date = Carbon::now();
        $order->currency = $orderCurrency->id;
        $order->payment_method_id = $request->paymentMethod;
        $order->save();
        //updating items table with user id
        foreach (auth()->user()->addToCarts as $item) {
            $item->order_id = $order->id;
            $item->save();
        }
        $order->changeStatus($status);
        return response()->json(['status' => true, 'message' => trans('api.orderSubmitForReview'), 'order_id' => $order->id, 'order_number' => $order->order_number]);
    }

    /**
     * @param Request $request
     * @return mixed
     * confirm reviewed order from customer payment will also confirmed here
     * @throws \Exception
     */
    public function confirm(Request $request){
        $request->validate([
            'order.orderId' => 'required|numeric',
            'paymentMethod' => 'required|numeric'
        ]);
        $grandTotal = $request->order["grandTotal"];
        $orderId = $request->order['orderId'];
        try{
            $order = Order::where('user_id', auth()->id())->findOrFail($orderId);
        }catch (ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => 'Order not found']);
        }
        $master_price = $order->master_price;
        try{
            $payment_method = PaymentMethod::findOrFail($request->paymentMethod);
            if ($payment_method->is_online){
                try{
                    $gateWay = PaymentOnline::findOrFail($request->gateway);
                    if ($gateWay->alias == 'stripe' && $request->card == null)
                        return response()->json(['status' => false, 'message' => trans('api.cardRequired')]);
                }catch (ModelNotFoundException $exception){
                    return response()->json(['status' => false, 'message' => 'Gateway is not defined']);
                }
            }
        }catch(ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => trans('api.paymentMethodNotFound')]);
        }
        $order->payment_method_id = $request->paymentMethod;
        $alias = $payment_method->is_online ? 'pending' : 'cash-pending';
        $order->save();
        if ($payment_method->is_online){
            $currency = ($gateWay->alias == 'stripe' || $gateWay->alias == 'authorize') ? 'USD' : 'BDT';
            $conversion_rate = $this->currencyRate($currency)->getData();
            $amount = $this->currencyConverter($conversion_rate->value, $master_price);
            $gateWayChargeAmount = $this->gatewayCharge($gateWay->alias, $amount);
            $total = $amount + $gateWayChargeAmount;
            if (intval($total) != intval($grandTotal))
                return response()->json(['status' => false, 'message' => trans('api.calculationError')]);
            if($gateWay->alias == 'stripe'){
                $cvc = $request->cvc;
                if ($request->card == null)
                    return response()->json(['status' => false, 'message' => trans('api.cardRequired')]);
                try{
                    $userCard = UserPaymentCart::where('user_id', auth()->id())->findOrFail($request->card);
                }catch (ModelNotFoundException $exception){
                    return response()->json(['status' => false, 'message' => trans('api.cardNotFound')]);
                }
                $request = Request::create(route('stripe.charge'), 'POST', [
                    'order_id' => $order->id,
                    'card_number' => $userCard->card_number,
                    'cvc' => $cvc,
                    'expire_month' => substr($userCard->expire_at, 5, 2),
                    'expire_year' => substr($userCard->expire_at, 0, 4),
                    'gateway_id' => $gateWay->id,
                    'currency' => $currency,
                    'rate' => $conversion_rate->value,
                    'amount' => $amount + $gateWayChargeAmount,
                    'gateway_charge_amount' => $gateWayChargeAmount
                ]);
                $result = app()->handle($request)->getData();
                if(!$result->status){
                    return response()->json($result);
                }
                //storing status
                $status = Status::where('alias', 'confirmed' )->first()->id;
                $order->changeStatus($status);
            }elseif($gateWay->alias == 'authorize'){
                $cvc = $request->cvc;
                if ($request->card == null)
                    return response()->json(['status' => false, 'message' => trans('api.cardRequired')]);
                try{
                    $userCard = UserPaymentCart::where('user_id', auth()->id())->findOrFail($request->card);
                }catch (ModelNotFoundException $exception){
                    return response()->json(['status' => false, 'message' => trans('api.cardNotFound')]);
                }
                $request = Request::create(route('authorize.charge'), 'POST', [
                    'order_id' => $order->id,
                    'card_number' => $userCard->card_number,
                    'cvc' => $cvc,
                    'expire_month' => substr($userCard->expire_at, 5, 2),
                    'expire_year' => substr($userCard->expire_at, 0, 4),
                    'gateway_id' => $gateWay->id,
                    'currency' => $currency,
                    'rate' => $conversion_rate->value,
                    'amount' => $amount + $gateWayChargeAmount,
                    'gateway_charge_amount' => $gateWayChargeAmount,
                    'address' => $userCard->billingAddress
                ]);
                $result = app()->handle($request)->getData();
                if(!$result->status){
                    return response()->json($result);
                }
                //storing status
                $status = Status::where('alias', 'confirmed' )->first()->id;
                $order->changeStatus($status);
            }else if($gateWay->alias == 'sslcommerz'){
                $request = Request::create(route('sslcommerz.complete'), 'POST', [
                    'gateway_id' => $gateWay->id,
                    'amount' => $amount + $gateWayChargeAmount,
                    'order_id' => $order->id,
                    'currency' => $currency,
                    'rate' => $conversion_rate->value,
                    'gateway_charge_amount' => $gateWayChargeAmount
                ]);

                $result = app()->handle($request);
                return response()->json($result);
            }else if ($gateWay->alias == 'american-express'){
                $request = Request::create(route('sslcommerz.complete'), 'POST', [
                    'gateway_id' => $gateWay->id,
                    'amount' => $amount + $gateWayChargeAmount,
                    'order_id' => $order->id,
                    'currency' => $currency,
                    'rate' => $conversion_rate->value,
                    'gateway_charge_amount' => $gateWayChargeAmount
                ]);

                $result = app()->handle($request);
                return response()->json($result);
            }
        }
        $cash = 0;
        if (!$payment_method->is_online){
            $status = Status::where('alias', $alias)->first()->id;
            //$order->last_status_id = $status;
            $order->save();
            $order->changeStatus($status);
            //$order->status()->attach($status);
            $cash = 1;
            $order->user->notify((new PaymentStatusNotification("CASH", $order, 'CASH'))->delay(5));
        }
        return response()->json( ['message' => 'Thank you. Your order has been placed successfully', 'status' => true, 'order_id' => $order->id, 'cash' => $cash, 'order_number' => $order->order_number] );
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadReceipt(Request $request){
        $request->validate([
            'order_id' => 'required|numeric',
            'receipt_image' => 'required|image'
        ]);
        $image = $request->receipt_image;
        $order = Order::where('user_id', auth()->id())->findOrFail($request->order_id);
        $extension = $image->getClientOriginalExtension();
        $id = uniqid('money_receipt');
        $image_name = $id.".".$extension;
        $obj = $image->storeAs('public/money_receipt', $image_name);
        if ($obj){
            $order->moneyReceipt()->save(
                new CashMoneyReceipt([
                    'receipt_image' => $image_name
                ])
            );
        }
        return response()->json([
            'status' => true,
            'message' => trans('api.receiptAdded'),
            'image' => \Storage::url('money_receipt/'.$image_name),
            'id' => $order->moneyReceipt->last()->id
        ], 200);
    }

    public function deleteReceipt($id){
        try{
            $cash = CashMoneyReceipt::findOrFail($id);
            \Storage::delete("money_receipt/".$cash->receipt_image);
            $cash->delete();
            return response()->json(['status' => true, 'message' => 'Receipt deleted']);
        }catch(ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => 'Receipt not found']);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * partial payment
     * @throws \Exception
     */
    public function customAmount(Request $request){
        $request->validate([
            "order.grandTotal" => 'required|numeric|not_in:0',
            "order.orderId" => 'required|not_in:0',
            'paymentMethod' => 'required|not_in:0'
        ]);
        $orderId = $request->order["orderId"];
        try{
            $paymentMethod = PaymentMethod::findOrFail($request->paymentMethod);
            if ($paymentMethod->is_online){
                try{
                    $gateWay = PaymentOnline::findOrFail($request->gateway);
                    if ($gateWay->alias == 'stripe' && $request->card == null)
                        return response()->json(['status' => false, 'message' => trans('api.cardRequired')]);
                }catch (ModelNotFoundException $exception){
                    return response()->json(['status' => false, 'message' => 'Gateway is not defined']);
                }
            }
        }catch(ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => trans('api.paymentMethodNotFound')]);
        }
        $total_custom_amount = 0;
        $status = Status::where('alias', 'partial-payment-complete' )->first()->id;
        try{
            $order = Order::with("items")->where('user_id', auth()->id())->findOrFail($orderId);
            if (!empty($order->items)) {
                $total_custom_amount = $order->items->sum("itemAdminOperationInfo.custom_amount");
            }
            if($paymentMethod->is_online){
                $cvc = $request->cvc;
                $currency = ($gateWay->alias == 'stripe' || $gateWay->alias == 'authorize') ? 'USD' : 'BDT';
                $currencyRate = $this->currencyRate($currency)->getData();
                $amount = $this->currencyConverter($currencyRate->value, $total_custom_amount);
                $gateWayCharege = $this->gatewayCharge($gateWay->alias, $amount);
                if($gateWay->alias == 'stripe'){
                    try{
                        $userCard = UserPaymentCart::where('user_id', auth()->id())->findOrFail($request->card);
                    }catch (ModelNotFoundException $exception){
                        return response()->json(['status' => false, 'message' => trans('api.cardNotFound')]);
                    }
                    $request = Request::create(route('stripe.charge'), 'POST', [
                        'order_id' => $order->id,
                        'card_number' => $userCard->card_number,
                        'cvc' => $cvc,
                        'expire_month' => substr($userCard->expire_at, 5, 2),
                        'expire_year' => substr($userCard->expire_at, 0, 4),
                        'gateway_id' => $gateWay->id,
                        'currency' => $currency,
                        'rate' => $currencyRate->value,
                        'amount' => $amount + $gateWayCharege,
                        'gateway_charge_amount' => $gateWayCharege
                    ]);
                    $result = app()->handle($request)->getData();
                    if(!$result->status){
                        return response()->json($result);
                    }
                    //storing status
                    //$order->last_status_id = $status;
                    $order->save();
                    $order->changeStatus($status);
                    //$order->status()->attach($status);
                    return response()->json(['status' => true, 'message' => trans('api.customAmounSuccessful'), 'order_id' => $order->id, 'order_number' => $order->order_number]);
                }elseif($gateWay->alias == 'authorize'){
                    $cvc = $request->cvc;
                    if ($request->card == null)
                        return response()->json(['status' => false, 'message' => trans('api.cardRequired')]);
                    try{
                        $userCard = UserPaymentCart::where('user_id', auth()->id())->findOrFail($request->card);
                    }catch (ModelNotFoundException $exception){
                        return response()->json(['status' => false, 'message' => trans('api.cardNotFound')]);
                    }
                    $request = Request::create(route('authorize.charge'), 'POST', [
                        'order_id' => $order->id,
                        'card_number' => $userCard->card_number,
                        'cvc' => $cvc,
                        'expire_month' => substr($userCard->expire_at, 5, 2),
                        'expire_year' => substr($userCard->expire_at, 0, 4),
                        'gateway_id' => $gateWay->id,
                        'currency' => $currency,
                        'rate' => $currencyRate->value,
                        'amount' => $amount + $gateWayCharege,
                        'gateway_charge_amount' => $gateWayCharege,
                        'address' => $userCard->billingAddress
                    ]);
                    $result = app()->handle($request)->getData();
                    if(!$result->status){
                        return response()->json($result);
                    }
                    //storing status
                    //$order->last_status_id = $status;
                    $order->save();
                    $order->changeStatus($status);
                    //$order->status()->attach($status);
                    return response()->json([
                        'status' => true,
                        'message' => trans('api.customAmounSuccessful'),
                        'order_id' => $order->id,
                        'order_number' => $order->order_number
                    ]);
                }else if($gateWay->alias == 'sslcommerz'){
                    $request = Request::create(route('sslcommerz.complete'), 'POST', [
                        'gateway_id' => $gateWay->id,
                        'amount' => $amount + $gateWayCharege,
                        'order_id' => $order->id,
                        'currency' => $currency,
                        'rate' => $currencyRate->value,
                        'gateway_charge_amount' => $gateWayCharege,
                        'status' => $status
                    ]);

                    $result = app()->handle($request);
                    return response()->json($result);
                }else if ($gateWay->alias == 'american-express'){
                    $request = Request::create(route('sslcommerz.complete'), 'POST', [
                        'gateway_id' => $gateWay->id,
                        'amount' => $amount + $gateWayCharege,
                        'order_id' => $order->id,
                        'currency' => $currency,
                        'rate' => $currencyRate->value,
                        'gateway_charge_amount' => $gateWayCharege,
                        'status' => $status
                    ]);

                    $result = app()->handle($request);
                    return response()->json($result);
                }
            }
        }catch (ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => 'Order not found']);
        }
        $status = Status::where('alias', 'partial-payment-cash-pending' )->first()->id;
        $order->payment_method_id = $paymentMethod->id;
//        $order->last_status_id = $status;
//        $order->status()->attach($status);
        $order->save();
        $order->changeStatus($status);
        return response()->json( [ 'status' => true, 'message' => trans('api.partialAmount'), 'order_id' => $order->id, 'order_number' => $order->order_number ] );
    }

}
