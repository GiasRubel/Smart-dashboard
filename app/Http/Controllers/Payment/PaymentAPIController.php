<?php

namespace App\Http\Controllers\Payment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Payment\PaymenMethodCollection;
use App\Http\Resources\Payment\PaymentOnlineCollection;
use App\Http\Resources\Payment\UserCardCollection;
use App\Http\Resources\Payment\UserCardResource;
use App\Models\PaymentMethod;
use App\Models\PaymentOnline;
use App\Models\UserPaymentCart;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Stripe;

class PaymentAPIController extends Controller
{
    public function paymentMethod(){
        $result = cache()->remember('payment-method', 43200, function (){
            return new PaymenMethodCollection(PaymentMethod::with(["online"=>function($query){
                $query->orderBy('order');
            }])->get());
        });
        return $result;
    }

    public function gateway($payment_method_id){
        $result = cache()->remember('gateWay'.$payment_method_id, 43200, function () use($payment_method_id){
            return new PaymentOnlineCollection(PaymentOnline::where('payment_method_id', $payment_method_id)->get());
        });
        return $result;
    }
    public function  userCard($gateway_id = false){
        $user_cards = UserPaymentCart::when($gateway_id, function ($query) use($gateway_id){
            $query->where("gateway_id", "=", $gateway_id);
        })->where("user_id", "=", \Auth::id() )->with(['billingAddress', 'billingAddress.country', 'billingAddress.district'])->get();
        return new UserCardCollection($user_cards);
    }

    public function card($card_id){
        try{
            $card = UserPaymentCart::findOrFail($card_id);
        }catch (ModelNotFoundException $exception){
            return response()->json(["status" => false, 'message' => 'Card not found']);
        }
        return new UserCardResource($card->where('id', $card_id)->where("user_id", "=", \Auth::id())->first());
    }

    public function storeUserCard(Request $request){
        $request->validate([
            'card_number' => 'required|min:12|max:25|unique:user_payment_cards,card_number',
            'cvc' => 'required|min:3',
            'expire_date' => 'required|min:5',
            'gateway_id' => 'required'
        ], [
            'cvc.required' => 'CVV code is required',
            'cvc.min' => 'CVC must be 3 digit'
        ]); //validation
        $expire_date = date('Y-m', strtotime($request->expire_date)); //formating expire date
        $data = [
            'card_number' => str_replace(' ', '', $request->card_number),
            'cvc' => $request->cvc,
            'expire_month' => date('m', strtotime($expire_date)),
            'expire_year' => date('Y', strtotime($expire_date)),
            'gateway_id' => $request->gateway_id,
            'user_id' => auth()->id(),
            'auth' => auth()->user(),
            'is_active' => $request->is_active,
            'billing_address_id' => $request->billing_address_id
        ]; //card info

        $authorize = new AuthorizePaymentController($this->filter);
        $card = $authorize->validateCard($data)->getData();

        if(!$card->status){
            return response()->json(["status" => false, "message" => $card->message]);
        }

        $card = UserPaymentCart::with('billingAddress')->find($card->data->id);

        return response()->json(array('status' => true, 'card' => new UserCardResource($card), 'message' => 'Card added/updated'));

    }

    //stripe card access token from input
    public function createStripeAccessToken($data){
        try{
            $payment_info = PaymentOnline::findOrFail($data["gateway_id"]);
        }catch (ModelNotFoundException $e){
            return response()->json(["status" => false, "message" => "Payment method not found"]);
        }
        $stripe = Stripe::make($payment_info->secret_id); //stripe objects
        try{
            $token = $stripe->tokens()->create([
                'card' => [
                    'number' => $data["card_number"],
                    'exp_month' => $data["expire_month"],
                    'exp_year' => $data["expire_year"],
                    'cvc' => $data["cvc"]
                ]
            ]);
        } catch (Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]); //return any exception
        } catch(\Cartalyst\Stripe\Exception\CardErrorException $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]); // return card error exception
        } catch(\Cartalyst\Stripe\Exception\MissingParameterException $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()]); // return Missing parameter
        }
        return response()->json(["status" => true, "token" => $token]);
    }

    public function storeUserCardInfo($data, $charge, $active = 0)
    { //store user card info
        $cards = [
            'user_id' => \Auth::id(),
            'gateway_id' => $data["gateway_id"],
            'card_number' => $data["card_number"],
            'cvc' => $data["cvc"],
            'card_bank' => $charge->card->brand,
            'is_verify' => $charge->card->cvc_check == "unchecked" ? 0 : 1,
            'assign_amount' => 0.0,
            'amount' => 0.0,
            'currency' => '',
            'create_at' => date("Y-m-d h:i:s"),
            'expire_at' => $charge->card->exp_year . "-" . $charge->card->exp_month,
            'is_active' => $active
        ]; // card data
        if($active == 1)
            UserPaymentCart::where('user_id', auth()->id())->update(['is_active' => 0]);
        $card = UserPaymentCart::create($cards); //update or create
        return response()->json(['status' => true, 'data' => $card]);
    }

    public function activeUserCard($id){
        try{
            $card = UserPaymentCart::findOrFail($id);
            $card = $card->where('id', '=', $id)->where('user_id', '=', \Auth::id())->first();
            if(!isset($card->id))
                return response()->json(['status' => false, 'message' => 'Card not found']);
            UserPaymentCart::where('user_id', '=', \Auth::id())->update([
                'is_active' => 0
            ]);
            $card->is_active = 1;
            $card->save();
            return response()->json(['status' => true, 'message' => 'Card activated', 'id' => $card->id]);
        }catch (ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => 'Card not found']);
        }
    }


    public function updateUserCard(Request $request, $id){
        $request->validate([
            'card_number' => 'required|min:12|max:25',
            'expire_date' => 'required|min:5',
            'billing_address_id' => 'required|integer'
        ]); //validation
        try{
            $card = UserPaymentCart::findOrFail($id);
        }catch(ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => 'Card not found']);
        }
        $expire_date = date('Y-m', strtotime($request->expire_date));
        $data = [
            'card_number' => str_replace(' ', '', $request->card_number),
            'cvc' => $request->cvc,
            'expire_month' => date('m', strtotime($expire_date)),
            'expire_year' => date('Y', strtotime($expire_date)),
            'gateway_id' => $request->gateway_id,
            'billing_address_id' => $request->billing_address_id,
            'user_id' => auth()->id(),
            'auth' => auth()->user()
        ]; //card info

        $authorize = new AuthorizePaymentController($this->filter);
        $cardResponse = $authorize->validateCard($data, false)->getData();

        if(!$cardResponse->status){
            return response()->json(["status" => false, "message" => $cardResponse->message]);
        }

        $card->address_id = $request->billing_address_id;
        $card->expire_at = $request->expire_date;
        $card->save();

        return response()->json(
            [
                'status' => true,
                'card' => new UserCardResource($card),
                'message' => 'Card added/updated'
            ]
        );
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteUserCard($id){
        try{
            $card = UserPaymentCart::where('user_id', '=', auth()->id())->findOrFail($id);
            if ($card->delete())
                return response()->json(['status' => true, 'message' => trans('api.cardDeleted')]);
            return response()->json(['status' => false, 'message' => trans('api.somethingWentWrong')]);
        }catch (ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => 'Card not found']);
        }
    }

    public function setBillingAddress(Request $request) {
        $card = UserPaymentCart::whereUserId(auth()->id())->find($request->card_id);
        $card->address_id = $request->billing_address_id;
        $card->save();
        return response()->json([
            'status' => true,
            'message' => "Billing address has been updated successfully",
            'card' => new UserCardResource($card)
        ]);
    }

}
