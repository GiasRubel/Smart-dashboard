<?php

namespace App\Http\Controllers\API;

use App\Filters\DataFilter;
use App\Models\{CashMoneyReceipt, Currency, Order, PaymentMethod, PaymentOnline, Status, UserPaymentCart};
use Carbon\Carbon;
use DB;
use Illuminate\{Database\Eloquent\ModelNotFoundException};
use App\Http\Requests\Order\OrderPlaceRequest;
use App\Http\Controllers\Controller;
use App\Traits\OAC;
use App\Notifications\PaymentStatusNotification;
use App\Repo\OrderRepository;

class OrderPlaceController extends Controller
{
    use OAC;

    /**
     * @param OrderPlaceRequest $request
     * order place only when every information found in front end
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function placeOrder(OrderPlaceRequest $request){
        if (!optional(auth()->user()->addToCarts)->count()) /*checking if user have item to order*/
            return response()->json(['status' => false, 'message' => trans('api.itemRequired')]);
        /*payment method validation*/
        try{
            $paymentMethod = PaymentMethod::findOrFail($request->paymentMethod);
            $gateway = PaymentOnline::find($request->gateway);
            if ($paymentMethod->is_online && $gateway->alias == 'stripe' && $request->card == null)
                return response()->json(['status' => false, 'message' => trans('api.cardRequired')]);
        }catch(ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => 'Payment method is not found']);
        }
        $calculationResult = $this->orderCalculator($request->all(), $paymentMethod); //calculate order total price, tax, service charge
        $currencyRate = $calculationResult["currency_rate"];

        DB::transaction(function () use ($request, $paymentMethod, $calculationResult) {
            $address = (new OrderRepository)->address($request->address);
            $order = (new OrderRepository)->order($address->id, $paymentMethod, $calculationResult);
            foreach (auth()->user()->addToCarts as $item) {
                $item->order_id = $order->id;
                $item->save();
            }
        }, 5);

    }
}
