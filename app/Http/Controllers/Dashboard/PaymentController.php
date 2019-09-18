<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Payment\AuthorizePaymentController;
use App\Models\OrderPayment;
use App\Models\PaymentOnline;
use App\Models\PaymentRefund;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentController extends Controller
{
    public function release(Request $request){

        if(!$request->method["is_card_applicable"]){
            $result = $this->refundCashOnDelivery($request->all())->getData();
            return response()->json([$result]);
        }
        try{
            $gate_way = PaymentOnline::findOrFail($request->gateway_id);
        }catch (ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => 'Gate way for payment '.trans('api.notFound')]);
        }
        $fn = [
            'stripe' => 'refundStripePayment',
            'sslcommerz' => 'refundSSLCommerzPayment',
            'authorize' => 'authorizeRefund'
        ];
        $function = $fn[$gate_way->alias];
        $result = $this->$function($request->all())->getData();
        return response()->json(['status' => $result->status, 'message' => $result->message]);
    }
    public function refundCashOnDelivery($data){
        try{
            $payment = OrderPayment::with("online", "refunds")->where('order_id', $data["order_id"])->findOrFail($data["id"]);
            $totalRefund = $payment->refunds != null ? $payment->refunds->sum("refund_amount") : 0;
            $amount = isset($data["amounts"]) ? $data["amounts"] : $payment->amount;
            if($payment->amount < ( $amount + $totalRefund))
                return response()->json(['status' => false, 'message' => trans('api.refundError')]);
            $refund = new PaymentRefund;
            $refund->payment_id = $payment->id;
            $refund->refund_id = uniqid('refund');
            $refund->refund_amount =  $amount;
            $refund->refund_by = \Auth::id();
            $refund->save();

            $payment->status = ($amount + $totalRefund) == $payment->amounts ? trans('api.totallyRefunded') : trans('api.partiallyRefunded');
            $payment->save();
        }catch(ModelNotFoundException $exception){
            return response()->json(['status' => true, 'message' => "Payment ".trans('api.notFound')]);
        }
        return response()->json(['status' => true, 'message' => trans('api.refund')]);
    }

    public function refundStripePayment($data){
        $request = Request::create(route("stripe.release"), 'POST', $data);
        $result = \Route::dispatch($request);
        return response()->json(['status' => $result->original["status"], 'message' => $result->original["message"]]);
    }

    public function capture(Request $request){
        $sender = $request->create(route("stripe.capture"), "POST", ["id" => $request->id]);
        $result = \Route::dispatch($sender);
        return $result;
    }

    public function refundSSLCommerzPayment($data){
        $request = Request::create(route('ssl.refund'), "POST", $data);
        try {
            $result = app()->handle($request)->getContent();
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]);
        }
        $result = json_decode($result);
        if (isset($result->status)){
            if (!$result->status){
                return response()->json(['status' => $result->status, 'message' => $result->message]);
            }
        }else{
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong. Please try again'
            ]);
        }
        return response()->json(['status' => $result->status, 'message' => $result->message]);
    }

    public function authorizeRefund($data)
    {
        if ($data["amounts"] > 0){
            $authorize = new AuthorizePaymentController($this->filter);
            $respone = $authorize->refundTransaction($data['amounts'], $data['id']);
            return response()->json(['status' => $respone["status"], 'message' => $respone["message"]]);
        }else{
            return response()->json(['status' => false, "message" => "Amount field is required"]);
        }
    }

}
