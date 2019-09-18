<?php

namespace App\Http\Controllers\Payment;

use App\Notifications\PaymentStatusNotification;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Requests\StripePaymentRequest as Request;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderPayment;
use App\Models\PaymentOnline;
use App\Models\UserPaymentCart;
use App\Models\PaymentRefund;
use Stripe;

class StripePaymentController extends Controller
{
    protected $stripe;

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * order payment with stripe for international card
     * debit, credit almost all card is allowed
     * Its a simple function don't get panic
     */
    public function complete(Request $request) {
        $currency = $request->currency;
        $conversion_rate = $currency == 'USD' ? 1 : $request->rate;
        try{
            $payment_info = PaymentOnline::findOrFail($request->gateway_id); // you know what i am looking for
        }catch (ModelNotFoundException $e){
            return response()->json(["status" => false, "message" => "Payment gateway ".trans('api.notFound')]);
        }
        $this->stripe = Stripe::make($payment_info->secret_id); //stripe objects, Its funny
        try{
            $order = Order::with("currencies")->findOrFail($request->order_id);
        }catch(ModelNotFoundException $exception){
            return response()->json(["status" => false, "message" => "Order ".trans('api.notFound')]);
        }
        $token = $this->createStripeAccessToken($request->all())->getData(); // access token for stripe, its clean and clear like katrina Kaif
        if (isset($token->status) && !$token->status)
            return response()->json(["status" => false, "message" => $token->message]);
        $stripeToken = $token->token->id;
        try {
            $charge = $this->stripe->charges()->create([
                'card' => $stripeToken,
                'currency' => strtolower($currency),
                'amount' => $request->amount,
                'description' => trans('api.paymentLabel'),
                'capture' => true
            ]); // creating charge with capture false

        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]); //return any exception
        } catch(\Cartalyst\Stripe\Exception\CardErrorException $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]); // return card error exception, I don't even know what it does
        } catch(\Cartalyst\Stripe\Exception\MissingParameterException $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]); // return Missing parameter, same
        }
        $order->payment_method_id = $payment_info->payment_method_id;
        $order->save();
        $this->storeUserCardInfo($request->all(), $charge, $payment_info->id); // storing user card info. but it already in database
        $this->storePaymentInfo($charge, $payment_info, $order, [
            'conversion_rate' => $conversion_rate,
            'gateway_charge_amount' => $request->gateway_charge_amount
        ]); // this thing is important, payment information will be added here. be careful about that
        $order->user->notify((new PaymentStatusNotification($charge, $order, 'STRIPE', $request->gateway_charge_amount))->delay(5));
        return response()->json(['status' => true, 'message' => trans('api.payment-added'), 'order_id' => $order->id], 200);
    }

    //stripe card access token from input
    public function createStripeAccessToken($data){
        $stripe = $this->stripe; // getting the funny object from up above
        try{
            $token = $stripe->tokens()->create([
                'card' => [
                    'number' => $data["card_number"],
                    'exp_month' => $data["expire_month"],
                    'exp_year' => $data["expire_year"],
                    'cvc' => $data["cvc"]
                ]
            ]); // creating stripe access token, Checking if i am allowed thief like our gov
        } catch (Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]); //return any exception
        } catch(\Cartalyst\Stripe\Exception\CardErrorException $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]); // return card error exception
        } catch(\Cartalyst\Stripe\Exception\MissingParameterException $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]); // return Missing parameter
        }
        return response()->json(["token" => $token]);
    }

    //releasing payments full and pertial
    public function release(Request $request) {
        try {
            $payment = OrderPayment::findOrFail($request->id); // check if payment exists
            $payment = $payment->where("id", "=", $request->id)->with("online", "refunds")->first(); // get the payment
        } catch (ModelNotFoundException $e) {
            return response()->json(['status' => false, 'message' => 'Payment '.trans('api.notFound')]); //return exception
        }
        $stripe = Stripe::make($payment->online->secret_id); //stripe objects
        $totalRefund = $payment->refunds != null ? $payment->refunds->sum("refund_amount") : 0;
        $amount = $request->has("amounts") ? $request->amounts : $payment->amount; //weather it partial or not
        if($amount + $totalRefund > $payment->amount)
            return response()->json(['status' => false, 'message' => trans('api.refundError')]);
        if($amount < $payment->amount &&  $payment->status == "uncaptured"){
            $captured = $this->capture($request->payment_id)->getData(); //capture the payment
            if(!isset($captured->status)){
                return response()->json(['status' => false, 'message' => trans('api.unRecognisedError')]);
            }
        }
        try {
            $refund = $stripe->refunds()->create($payment->charge_id, ($payment->amount == $amount) ? '' : $amount); //create refund
            $payment->status = ($payment->amount == $amount + $totalRefund) ? 'released' : 'refunded';
            $payment->save();  //updating payments table
            $this->storeRefundInfo($refund, [$payment->id, $amount]);
        } catch (\Cartalyst\Stripe\Exception\MissingParameterException $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]);// missing paremeter exception
        } catch (\Cartalyst\Stripe\Exception\UnauthorizedException $e){
            return response()->json(['status' => false, 'message' => $e->getMessage()]);// missing paremeter exception
        }
        return response()->json(["status" => true, "message" => ($payment->amount == $amount) ? trans('api.totallyRefunded') : trans('api.partiallyRefunded'), "refund_amount" => $refund["amount"]/100, 'total_amount' => $payment->amount]);

    }

    public function capture(Request $request, $payment_id = 0)  {
        if ($request->isMethod('post')){
            $payment_id = $request->id;
        }
        try {
            $payment = OrderPayment::where("id", "=", $payment_id)->with("online")->first(); // get the payment
        } catch (ModelNotFoundException $e) {
            return response()->json(['status' => false, 'message' => 'Payment '.trans('api.notFound')]); //return exception
        }

        $stripe = Stripe::make($payment->online->secret_id); //stripe objects
        $charge_id = $payment->charge_id;
        try {
            $charge = $stripe->charges()->capture($charge_id); //capture the charge
            $payment->status = 'captured';
            $payment->save();
        } catch (\Cartalyst\Stripe\Exception\MissingParameterException $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]); //return if already capture or any exception
        }
        return response()->json(["status" => true, "message" => trans('api.captured'), "amount" => $charge["amount"]]);
    }

    public function storePaymentInfo($charge, $payment_info, $order, $rest){
        $data = [
            'order_id' => $order->id,
            'payment_method_id' => $payment_info->payment_method_id,
            'gateway_id' => $payment_info->id,
            'charge_id' => $charge["id"],
            'amount' => $charge["amount"]/100,
            'currency' => $charge["currency"],
            'create_at' => date('Y-m-d'),
            'expire_at' => $charge["source"]["exp_year"]."-".$charge["source"]["exp_month"],
            'visible_4_digit' => $charge["source"]["last4"],
            'status' => 'captured',
            'conversion_rate' => $rest["conversion_rate"],
            'gateway_charge_amount' => $rest["gateway_charge_amount"]
        ];

        return OrderPayment::create($data);
    }
    public function storeUserCardInfo($data, $charge, $gateway_id){ //store user card info
        $cards = [
            'user_id' =>  \Auth::id(),
            'gateway_id' => $gateway_id,
            'cvc' => $data["cvc"],
            'card_bank' => $charge["source"]["brand"],
            'is_verify' => $charge["status"] == "succeeded" ? 1 : 0,
            'assign_amount' => 0.0,
            'amount' => 0.0,
            'currency' => $charge["currency"],
            'create_at' => date("Y-m-d h:i:s"),
            'expire_at' => $charge["source"]["exp_year"]."-".$charge["source"]["exp_month"]
        ]; // card data
        return UserPaymentCart::updateOrCreate([ 'card_number' => $data["card_number"] ], $cards); //update or create card
    }

    public function storeRefundInfo($data, $payment){
        $refund = new PaymentRefund;
        $refund->payment_id = $payment[0];
        $refund->refund_id = $data["id"];
        $refund->refund_amount =  $payment[1];
        $refund->refund_by = \Auth::id();
        $refund->save();
        return true;
    }
}
