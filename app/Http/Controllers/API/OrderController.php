<?php

namespace App\Http\Controllers\API;

use App\Filters\OrderFilter;
use App\Http\Resources\Order\ItemResource;
use App\Models\Address;
use App\Models\Currency;
use App\Models\Item;
use App\Models\Order;
use App\Models\PaymentOnline;
use App\Models\Reason;
use App\Models\UserPaymentCart;
use App\Notifications\OrderStatusNotification;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Events\Order\SendOrderStatusNotifyEmailEvent;
use App\Events\Order\SendOrderStatusNotifySystemEvent;
use App\Events\Order\SendOrderStatusNotifySmsEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\Order\OrderResource;
use App\Models\Status;
use Illuminate\Http\Request;

class OrderController extends APIController
{
    public function __construct(OrderFilter $orderFilter)
    {
        $this->filter = $orderFilter;
    }

    public function saveOrder()
    {
        $useritem = Item::where( ['user_id', '=', auth()->user()->id,
            'order_id', '=', null] )->get()->toArray();
        if (!empty( $useritem )) {
            $grandprice = 0;
            $totalprice = 0;
            $shipmentcost = 0;
            $taxusa = 0;
            $taxbd = 0;
            foreach ($useritem as $item) {
                $totalprice += $item['item_price'];
                $taxbd += $item['item_bd_tax'];
                $taxusa += $item['item_usa_tax'];
                $grandprice += $totalprice + $taxbd + $taxusa + $item['service_charge'] + $item['custom_amount'];
            }
            $order = new Order( [
                'master_price' => $grandprice,
                'total_price' => $totalprice,
                'tax_usa' => $taxusa,
                'tax_bd' => $taxbd,
                'user_id' => auth()->user()->id,
            ] );
        }
        return $useritem;
    }

    public function orderList()
    {

    }

    public function userOrderList()
    {
        $orders = OrderResource::collection( Order::where( 'user_id', '=', \Auth::id() )->with( ["paymentmethod", "address", "items", "status" => function ($query) {
            $query->orderBy( 'created_at', 'DESC' );
        }] )->filter( $this->filter )->latest( 'id' )->paginate( 10 ) );
        if ($orders->count())
            return $orders;
        return response()->json(['status' => false, 'message' => "No order's found"]);
    }

    public function order($id)
    {
        try {
            $order = Order::whereUserId( auth()->id() )->with( "paymentmethod", "address", "items", "status", "payments.refunds" )->findOrFail( $id );
            if (isset( $order->id ))
                return new OrderResource( $order );
            else
                return response()->json( ['status' => false, 'message' => 'Order not found'] );
        } catch (ModelNotFoundException $exception) {
            return response()->json( ['status' => false, 'message' => 'Order not found'] );
        }
    }

    public function cancel(Request $request, $id)
    {
        $request->validate([
            'reason' => 'required|numeric|min:0'
        ]);
        try {
            $order = Order::with( 'status' )->findOrFail( $id );
            if (!isset( $order->status->last()->alias ))
                return response()->json( ['status' => false, 'message' => trans( 'api.ordernotallowedtocancel' )] );
            $cancelArray = ['pending', 'cash-pending', 'review-complete', 'pending-for-review'];
            if (!in_array( $order->lastStatus->alias, $cancelArray ))
                return response()->json( ['status' => false, 'message' => trans( 'api.ordernotallowedtocancel' )] );
            $status = Status::where( 'alias', 'cancel' )->first();
            $order->changeStatus($status->id);
            $order = Order::with( ['status' => function ($query) {
                return $query->orderBy( 'created_at', 'DESC' );
            }, 'user', 'paymentmethod'] )->where( 'id', '=', $id )->first();
            $order->statusNotify($status->notify_by); //notify user
            $order->reasons()->attach([$request->reason => [ 'other_reason' => $request->other_reason ?? '' ]]);
            return response()->json( ['status' => true, 'message' => trans( 'api.ordercanceled' )] );
        } catch (ModelNotFoundException $exception) {
            return response()->json( ['status' => false, 'message' => trans( 'api.ordernotfound' )] );
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function cart(Request $request)
    {
        $userId = auth()->guard( 'api' )->id();
        if (!$userId && !$request->session_id)
            return response()->json( ['status' => false, 'message' => trans( 'api.cartNotProcessAble' )] );
//\DB::enableQueryLog();
        $items = Item::with( 'store', 'itemPrice', 'itemAdminOperationInfo' )
            ->whereNull( 'order_id' );

        if ($userId) {
            $items->where( 'user_id', $userId );
        } else {
            $items->where( 'session_id', $request->session_id )->whereNull( 'user_id' );
        }

        $items = $items->latest( 'id' )->get();

//dd(\DB::getQueryLog());
        return ItemResource::collection( $items );
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateCart(Request $request)
    {
        $session = $request->session_id;
        $request->validate( [
            'session_id' => 'required|min:5'
        ] );

        /*need to check the session carts items  and user existing cart items sku or the sku if not exists then check the url is same
        the update the existing cart, if update session price then need to update price*/
        $obj = Item::where( 'session_id', $session )->whereNull( 'order_id' )->whereNull( 'user_id' )->update( [
            'user_id' => \Auth::id()
        ] );

        if ($obj)
            return response()->json( ['status' => true, 'message' => trans( 'api.cartUpdated' )] );
        return response()->json( ['status' => false, 'message' => trans( 'api.cartUpdatedFailed' )] );
    }

    /**
     *
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function cartDelete(Request $request, $id)
    {
        $item = Item::when( !auth()->guard( 'api' )->id(), function ($query) use ($request) {
            $query->where( 'session_id', '=', $request->session_id );
        } )->when( auth()->guard( 'api' )->id(), function ($query) {
            $query->where( 'user_id', '=', auth()->guard( 'api' )->id() );
        } )->where( 'id', $id )->delete();
        if ($item)
            return response()->json( ['status' => true, 'message' => trans( 'api.cartDeleted' )] );
        return response()->json( ['status' => false, 'message' => trans( 'api.cartDeletedFailed' )] );
    }

    public function orderReason()
    {
        return Reason::whereStatus('1')->get();
    }

    public function itemList($perpage = 3) {
        $items = Item::whereUserId(auth()->id())
            ->latest('id')
            ->whereNotNull('order_id')
            ->whereNotIn('url', Item::whereUserId(auth()->guard('api')->id())->whereNull('order_id')->get()->pluck("url"))
            ->whereHas('status', function ($query){
                return $query->whereNotIn('alias', ['cancel', 'pending-for-review', 'review-complete']);
            })
            ->whereHas('itemPrice', function ($query){
                return $query->whereNotIn('item_price', ['null', 0]);
            })
            ->where(function ($query){
                $query->whereNotNull("volumetric_weight");
                $query->where("volumetric_weight", "!=", 0);
            })
            ->groupBy('url');
            if ($perpage == 3){
                $items = $items->limit(3)->get();
            }else{
                $items = $items->paginate($perpage);
            }
        if (count($items) == 0){
            return response()->json([
                'status' => false,
                'message' => trans('api.no_item_for_reorder')
            ]);
        }
        return ItemResource::collection($items);
    }
}
