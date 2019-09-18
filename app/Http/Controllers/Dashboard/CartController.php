<?php

namespace App\Http\Controllers\Dashboard;

use App\{Filters\ItemFilter,
    Http\Controllers\Controller,
    Models\Item,
    Models\Order,
    Models\Status,
    Notifications\ItemNotification,
    Notifications\ItemStatusNotification};
use Carbon\Carbon;
use Illuminate\Http\Request;

class CartController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     *
     */
    public function index()
    {
        //
    }

    public function cartItems(Request $request)
    {
        return Item::with('itemPrice', 'user')
            ->where('order_id', null)
            ->filter($this->filter)
            ->orderBy('id', 'desc')
            ->paginate($request->per_page);
    }

    public function cartReviewItem(Request $request)
    {
        return Item::with('itemPrice', 'user')
            ->where('order_id', null)
            ->where('volumetric_weight', null)
            ->filter($this->filter)
            ->orderBy('id', 'desc')
            ->paginate($request->per_page);
    }

    public function cartReviewByPrice(Request $request)
    {

        return Item::with('itemPrice', 'user')
            ->whereHas('itemPrice', function ($query) {
                $query->where('item_price', '=', 0);
            })
            ->where('order_id', null)
            ->filter($this->filter)
            ->orderBy('id', 'desc')
            ->paginate($request->per_page);
    }

    public function authenticated_cart()
    {
        return Item::with('itemPrice', 'user')
            ->where('order_id', null)
            ->where('user_id', '!=', null)
            ->filter($this->filter)
            ->orderBy('id', 'desc')
            ->paginate(request()->per_page);
    }

    public function changeStatus(Request $request){
        if(!count($request->all())){
            return response()->json(['status' => false, 'message' => 'No item found']);
        }
        $item_status_array = [];
        $order = 0;
        foreach ($request->all() as $key => $item){
            $singleItem = Item::find($item["id"]);
            if ($singleItem->item_status != $item["item_status"]){
                $singleItem->changeStatus($item["item_status"], $item["item_status"] == 0 ? false : true);
                array_push($item_status_array, $singleItem->item_status);
            }
            $order = $singleItem->order_id;
        }

        if (count(array_unique($item_status_array)) === 0){
            return response()->json([
                'status' => false,
                'message' => 'Nothing to change'
            ]);
        }

        foreach (array_unique($item_status_array) as $status){
            $changedItemsOrder = Order::whereId($order)->first();
            $items = $changedItemsOrder->items()->where('item_status', $status)->get();
            $status = Status::find($status);
            if (!empty($status->has_notify_user) && $status->has_notify_user){
                if ($status->notify_by == 'all'){
                    $changedItemsOrder->user
                        ->notify((new ItemStatusNotification($items, $changedItemsOrder))
                            ->delay(5));
                }elseif ($status->notify_by == 'email'){
                    $changedItemsOrder->user
                        ->notify((new ItemStatusNotification($items, $changedItemsOrder, ['mail']))
                            ->delay(5));
                }elseif ($status->notify_by == 'system'){
                    $changedItemsOrder->user
                        ->notify((new ItemStatusNotification($items, $changedItemsOrder, ['database']))
                            ->delay(5));
                }
            }
        }

        $status = 0;
        $change = false;
        /*changing order status if all item order has been changed*/
        $order = Order::with('items')->find($order);
        $status_array = array_unique($order->items->pluck('item_status')->toArray());
        $deduct = 0;
        $order_status = 0;
        $notifyBy = '';
        foreach ($order->items as $item){
            if (!is_null($item->status) && $item->status->alias != 'cancel'){
                $status += 1;
                $order_status = $item->status->id;
                $notifyBy = $item->status->notify_by;
            } else{
                $deduct += 1;
            }
        }

        if (($order->items->count() - $deduct) == $status && count($status_array) - ($deduct == 0 ? 0 : 1) == 1){
            $order->changeStatus($order_status);
            $order = Order::find($order->id);
            $order->statusNotify($notifyBy);
            $change = true;
        }
        if (count($status_array) == 1 && $order->last_status_id != $order_status && !empty($status_array) && $status_array[0] != 0){
            $order->changeStatus($status_array[0]);
            $order = Order::find($order->id);
            $order->statusNotify($notifyBy);
            $change = true;
        }

        /*end of changing status*/
        return response()->json([
            'status' => true,
            'message' => 'Change success',
            'order' => $change
        ]);
    }

    public function unauthenticated_cart()
    {
        return Item::with('itemPrice', 'user')
            ->where('order_id', null)
            ->where('user_id', '=', null)
            ->filter($this->filter)
            ->orderBy('id', 'desc')
            ->paginate(request()->per_page);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return void
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Item|Item[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     */
    public function show($id)
    {
        return Item::with('itemPrice', 'user', 'store')->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return Item|Item[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    public function edit($id)
    {
        return Item::with('itemPrice')->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
//        return $request;

        $cartItem = Item::with('itemPrice', 'user')->find($id);

        $cartItem->fill($request->except('price', 'quantity'))->save();

        $cartItem->itemPrice->update([
            'item_price' => $request->price,
            'quantity' => $request->quantity,
        ]);
        if ($cartItem->user)
            $cartItem->user->notify((new ItemNotification($cartItem, ['database', 'mail']))->delay(5));
        return response()->json(['success' => 'Data cart Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return json()
     */
    public function destroy($id)
    {
        $ids = explode(",", $id);

        $item = Item::find($id);

        $item->itemPrice()->whereIn('id', $ids)->delete();

        $item->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data Deleted']);
    }

    /**
     *
     */
    public function discountItems()
    {
        // \DB::enableQueryLog();
        return $items = Item::with("ItemPrice", "store")->whereHas("ItemPrice", function ($query) {
            $query->whereNotNull('discount_end_at');
            $query->where('discount_end_at', '>=', Carbon::now()->subHours(8));
            $query->orderBy('discount_end_at', 'ASC');
        })->paginate(10);
        //dd(\DB::getQueryLog());
    }

    public function showInPoPular($id, Request $request)
    {
        $item = Item::find($id);
        $item->is_in_popular = $request->is_in_popular == false ? 0 : 1;
        $item->save();
        return response()->json([
            'status' => true,
            'message' => 'Update successful'
        ]);
    }
}
