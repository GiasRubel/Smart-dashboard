<?php

namespace App\Http\Controllers\Payment;

use App\Http\Requests\SSLCommerzRequest as Request;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\PaymentOnline;
use App\Models\PaymentRefund;
use App\Models\Status;
use App\Notifications\PaymentStatusNotification;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Models\OrderPayment;
use App\Models\UserPaymentCart;
class SSLCommerzController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * completing ssl commerz payments
     */
    public function charge(Request $request){
        try{
            $payment_info = PaymentOnline::findOrFail($request->gateway_id);
        }catch (ModelNotFoundException $e){
            return response()->json(["status" => false, "message" => "Payment method not found"]);
        }
        $post_data = [
            "store_id" => $payment_info->secret_token,
            "store_passwd" => $payment_info->secret_id,
            "total_amount" => $request->amount,
            "currency" => $request->currency,
            "tran_id" => "payment_".uniqid(),
            "success_url" => url("payment/sslcommerz/success"),
            "fail_url" => url("payment/sslcommerz/fail"),
            "cancel_url" => url("payment/sslcommerz/cancel"),
            "emi_option" => 0,
            "cus_name" => \Auth::user()->name ,
            "cus_email" => \Auth::user()->email,
            "cus_phone" => \Auth::user()->mobile,
            "value_a" => $request->order_id,
            "value_b" => $payment_info->payment_method_id,
            "value_c" => $payment_info->id."-".$request->gateway_charge_amount,
            "value_d" => $request->rate."-".$request->status
        ];  //sll commerz charge data

        $direct_api_url = config('payment.ssl_payment'); //direct url of sslcommerz
        $handle = curl_init(); //curl start
        curl_setopt($handle, CURLOPT_URL, $direct_api_url);
        curl_setopt($handle, CURLOPT_TIMEOUT, 30);
        curl_setopt($handle, CURLOPT_CONNECTTIMEOUT, 30);
        curl_setopt($handle, CURLOPT_POST, 1 );
        curl_setopt($handle, CURLOPT_POSTFIELDS, $post_data);
        curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($handle, CURLOPT_SSL_VERIFYPEER, FALSE);

        $content = curl_exec($handle );
        $code = curl_getinfo($handle, CURLINFO_HTTP_CODE);
        if($code == 200 && !( curl_errno($handle))) {
            curl_close( $handle);
            $sslcommerzResponse = $content;
        } else {
            curl_close( $handle);
            return redirect(config('configuration.front_end_url').'/payment-status?status=fail&message=FAILED TO CONNECT WITH SSLCOMMERZ API');
        }
        //curl end
        $sslcz = json_decode($sslcommerzResponse, true );
        if(isset($sslcz['GatewayPageURL']) && $sslcz['GatewayPageURL']!="" ) {
            return response()->json(["status" => true, "url" => $sslcz['GatewayPageURL'] ]);
        } else {
            return response()->json(["status" => false, "message" => "There was an error while processing your requests"]);
        }

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function success(Request $request){
        $this->storePaymentInfo($request->all());
        $this->storeUserCardInfo($request->all());
        $status = Status::where('alias', 'confirmed' )->first()->id;
        if (!empty(explode('-', $request->value_d)[1])){
            $status = explode('-', $request->value_d)[1];
        }
        $order = Order::find($request->value_a);
        $order->changeStatus($status);
        $order->user->notify((new PaymentStatusNotification($request->all(), $order, 'SSLCommerz', explode('-', $request->value_c)[1]))->delay(5));
        return redirect(config('configuration.front_end_url').'/payment-status?status=success&message='.trans('api.payment-complete').'&order_id='.$order->id.'&order_number='.$order->order_number);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function fail(Request $request){
        $status = Status::where('alias', 'cancel' )->first()->id;
        if (empty(explode('-', $request->value_d)[1])){
            $order = Order::find($request->value_a);
            $order->changeStatus($status);
        }
        return redirect(config('configuration.front_end_url').'/payment-status?status=fail&message='.$request->error.'&order_id='.$order->id."&order_number=".$order->order_number);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function cancel(Request $request){
        $status = Status::where('alias', 'cancel' )->first()->id;
        if (empty(explode('-', $request->value_d)[1])){
            $order = Order::find($request->value_a);
            $order->changeStatus($status);
        }
        return redirect(config('configuration.front_end_url').'/payment-status?status=cancel&message='.trans('api.cancel-payment').'&order_id='.$order->id."&order_number".$order->order_number);
    }
    public function postpondRequest(Request $request){
        $this->storePaymentInfo($request->all());
        $this->storeUserCardInfo($request->all());
        $status = Status::where('alias', 'confirmed' )->first()->id;
        if (!empty(explode('-', $request->value_d)[1])){
            $status = explode('-', $request->value_d)[1];
        }
        $order = Order::find($request->value_a);
        $order->changeStatus($status);
        $order->user->notify((new PaymentStatusNotification($request->all(), $order, 'SSLCommerz', explode('-', $request->value_c)[1]))->delay(5));
    }
    /**
     * @param $charge
     * @return mixed
     */
    public function storePaymentInfo($charge){
        $data = [
            'order_id' => $charge["value_a"],
            'payment_method_id' => $charge["value_b"],
            'gateway_id' => explode('-', $charge["value_c"])[0],
            'charge_id' => $charge["bank_tran_id"],
            'amount' => $charge["amount"],
            'currency' => $charge["currency"],
            'create_at' => date('Y-m-d'),
            'expire_at' => '',
            'visible_4_digit' => substr($charge["card_no"], -4),
            'status' => 'captured',
            'conversion_rate' => explode('-', $charge["value_d"])[0],
            'gateway_charge_amount' => explode('-', $charge["value_c"])[1]
        ];
        return OrderPayment::create($data);
    }
    public function storeUserCardInfo($data){ //store user card infp
        if($data["card_no"] == ""){
            return true;
        }
        $cards = [
            'gateway_id' => $data["value_a"],
            'card_number' => $data["card_no"],
            'card_bank' => $data["card_issuer"],
            'is_verify' => $data["status"] == "VALID" ? 1 : 0,
            'assign_amount' => 0.0,
            'amount' => 0.0,
            'currency' => $data["currency"],
            'create_at' => date("Y-m-d h:i:s"),
            'expire_at' => ''
        ]; // card data
        return UserPaymentCart::updateOrCreate(['user_id' => \Auth::check() ? \Auth::id() : 1], $cards); //update or create
    }
    public function sslRefund(Request $request)  {
        try{
            $order_payment = OrderPayment::findOrFail($request->id);
            $payment_info = $order_payment->with("online", "refunds")->where('id', $request->id)->first();
        }catch (ModelNotFoundException $e){
            return response()->json(["status" => false, "message" => "Payment method not found"]);
        }
        $totalPayment = $payment_info->amount - $payment_info->gateway_charge_amount;
        $totalRefund = $payment_info->refunds != null ? $payment_info->refunds->sum("refund_amount") : 0;
        $amount = $request->has("amounts") ? $request->amounts : $totalPayment; //weather it partial or not
        if($amount + $totalRefund > $totalPayment)
            return response()->json(['status' => false, 'message' => trans('api.refundError')]);
        $bank_tran_id=urlencode($order_payment->charge_id);
        $refund_amount=urlencode($request->amounts);
        $refund_remarks=urlencode('Out of Stock');
        $store_id=urlencode($payment_info->online->secret_token);
        $store_passwd=urlencode($payment_info->online->secret_id);

        $requested_url = (config("payment.ssl_refund")."refund_amount=$refund_amount&refund_remarks=$refund_remarks&bank_tran_id=$bank_tran_id&store_id=$store_id&store_passwd=$store_passwd&v=1&format=json");
        $handle = curl_init();
        curl_setopt($handle, CURLOPT_URL, $requested_url);
        curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($handle, CURLOPT_SSL_VERIFYHOST, false); # IF YOU RUN FROM LOCAL PC
        curl_setopt($handle, CURLOPT_SSL_VERIFYPEER, false); # IF YOU RUN FROM LOCAL PC

        $result = curl_exec($handle);
        $code = curl_getinfo($handle, CURLINFO_HTTP_CODE);
        if($code == 200 && !( curl_errno($handle)))
        {
            # TO CONVERT AS OBJECT
            $result = json_decode($result);
            if ($result->status == "success"){
                $payment_info->status = ($request->amounts == $amount + $totalRefund) ? 'released' : 'refunded';
                $payment_info->save();  //updating payments table
                $this->storeRefundInfo($result, [$request->id, $request->amounts]);
                return response()->json(['status' => true, "message" => trans('api.refund')]);
            }else{
                return response()->json(['status' => false, 'message' => "Failed to connect with SSLCOMMERZ"]);
            }
        } else {
            return response()->json(['status' => false, 'message' => "Failed to connect with SSLCOMMERZ"]);
        }

    }

    public function storeRefundInfo($data, $payment){
        $refund = new PaymentRefund;
        $refund->payment_id = $payment[0];
        $refund->refund_id = $data->bank_tran_id;
        $refund->refund_amount =  $payment[1];
        $refund->refund_by = \Auth::id();
        $refund->save();
        return true;
    }
}
