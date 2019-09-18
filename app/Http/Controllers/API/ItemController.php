<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\ItemRequest;
use App\Http\Resources\Order\ItemResource;
use App\Models\Item;
use App\Models\ItemPrice;
use App\Models\ProhibitedItem;
use App\Traits\OAC;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

class ItemController extends APIController
{
    use OAC;

    /**
     * @param ItemRequest $request
     * @return \Illuminate\Http\JsonResponse.
     * save item
     */
    public function saveItem(ItemRequest $request)
    {
        foreach ($request->all() as $request) {
            $item = new Item( [
                'title' => $request['title'],
                'item_from' => $request['item_from'],
                'discount' => $request['discount'],
                'user_id' => auth()->user()->id ?? '',
                'weight' => $request['weight'],
                'dimension' => $request['dimension'],
                'url' => $request['url'],
                'current_price' => $request['current_price'],
                'currency' => $request['currency'],
                'imageUrl' => $request['imageUrl'],
                'sku' => $request['sku'],
                'is_gift' => $request['is_gift'],
                'is_apply_insurance' => $request['is_apply_insurance'],
                'item_price' => $request['item_price'],
                'service_charge' => $request['service_charge'],
                'item_bd_tax' => $request['item_bd_tax'],
                'item_usa_tax' => $request['item_usa_tax'],
                'item_status' => $request['item_status'],
                'item_subtotal_price' => $request['item_subtotal_price'],
                'item_total_price' => $request['item_total_price'],
                'custom_amount' => $request['custom_amount'],
                'custom_amount_reason' => $request['custom_amount_reason']
            ] );
            $item->save();
        }
        return response()->json( ['message' => 'Item Added Successfully'], 201 );
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Illuminate\Http\Response.
     * prohibited items
     */
    public function prohibitedItems(Request $request)
    {
        $status = false;
        if ($request->title) {
            \DB::enableQueryLog();
            $prohibitedItem = ProhibitedItem::whereType( 'title' )->where( function ($query) use ($request) {
                foreach (explode( ' ', $request->title ) as $title) {
                    $query->orWhere( 'title', 'like', '%' . $title . '%' );
                }
            } );
        }

        if ($request->category) {
            $prohibitedItem = ProhibitedItem::whereType( 'category' )->where( function ($query) use ($request) {
                foreach (explode( ' ', $request->category ) as $title) {
                    $query->orWhere( 'title', 'like', '%' . $title . '%' );
                }
            } );
        }

        if ($prohibitedItem->exists()) {
            foreach ($prohibitedItem->get() as $data) {
                if (strpos( $request->title, $data->title ) !== false) {
                    $status = true;
                    break;
                }
            }
        }

        return response( ['status' => $status] );
    }

    public function itemList()
    {

    }

    public function itemListByUser()
    {

    }

    /**
     * @param $item_id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * item quantity update
     */
    public function itemQuantity($item_id, Request $request)
    {
        try {
            $item = Item::findOrFail( $item_id );
            if ($item->available_quantity != 0 && $item->available_quantity < $request->quantity)
                return response()->json( ['status' => false, 'message' => trans( 'api.quantityError' )] );

            $price = ItemPrice::where( 'item_id', '=', $item_id )->first();
            $price->quantity = $request->quantity;
            $price->save();
            $item_prices = optional( $item->itemPrice )->item_current_price;
            if ($item->is_apply_insurance && $item->itemPrice != null && $item_prices > 0) {
                $item_price = $item->itemPrice != null ? $item_prices + optional( $item->itemAdminOperationInfo )->custom_amount : 0.0;
                $insurance_amount = $this->insuranceAmount( $item_price );
                $total_insurance = $insurance_amount * $item->itemPrice->quantity;
                $price->insurance_amount = $total_insurance;
                $price->save();
            }
            if ($item->is_gift) {
                $gift_amount = $request->quantity * config( 'settings.giftPerItem' );
                $price->gift_amount = $gift_amount;
                $price->save();
            }
            return response()->json( [
                'status' => true,
                'message' => trans( 'api.qtyUpdated' ),
                'price' => $price
            ] );
        } catch (ModelNotFoundException $exception) {
            return response()->json( ['status' => false, 'message' => 'Item ' . trans( 'api.notFound' )] );
        }
    }

    /**
     * @param $item_id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * apply gift to item
     */
    public function applyGift($item_id, Request $request)
    {
        try {
            $item = Item::findOrFail( $item_id );
            $item->is_gift = $request->is_gift == true ? 1 : 0;
            $item->save();
            $itemPrice = ItemPrice::where( 'item_id', '=', $item_id )->first();
            $gift_amount = $request->is_gift == true ? $itemPrice->quantity * config( 'settings.giftPerItem' ) : 0;
            $itemPrice->gift_amount = $gift_amount;
            $itemPrice->save();
            return response()->json( ['status' => true, 'message' => trans( 'api.applyGift' ), 'price' => $itemPrice] );
        } catch (ModelNotFoundException $exception) {
            return response()->json( ['status' => false, 'message' => 'Item ' . trans( 'api.notFound' )] );
        }
    }

    /**
     * @param $item_id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * apply insurance
     */
    public function applyInsurance($item_id, Request $request)
    {
        try {
            $item = Item::with( 'itemPrice', 'order' )->findOrFail( $item_id );
            $item->is_apply_insurance = $request->is_apply_insurance == true ? 1 : 0;
            $item->save();
            $item_prices = optional( $item->itemPrice )->item_current_price;
            if ($item->itemPrice == null || $item_prices == 0) {
                return response()->json( ['status' => false, 'message' => trans( 'api.itemPrice' ) . " " . trans( 'api.notDefined' )] );
            }
            $item_price = $item->itemPrice != null ? $item_prices + optional( $item->itemAdminOperationInfo )->custom_amount : 0.0;
            $insurance_amount = $this->insuranceAmount( $item_price );
            $insurance_amount = $request->is_apply_insurance == true ? $insurance_amount * $item->itemPrice->quantity : 0;
            $itemPrice = ItemPrice::where( 'item_id', $item_id )->first();
            $itemPrice->insurance_amount = $insurance_amount;
            $itemPrice->save();
            return response()->json( ['status' => true, 'message' => trans( 'api.applyInsurance' ), 'price' => $itemPrice] );
        } catch (ModelNotFoundException $exception) {
            return response()->json( ['status' => false, 'message' => 'Item ' . trans( 'api.notFound' )] );
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeItem(Request $request)
    {
        $request->validate( [
            '*.url' => 'required|url',
            '*.quantity' => 'required|numeric|min:1',
            '*.session_id' => 'required|min:10'
        ], [
            '*.url' => [
                'required' => trans( 'api.urlRequired' ),
                'regex' => trans( 'api.urlFormat' )
            ],
            '*.quantity' => [
                'required' => trans( 'api.quantityRequired' ),
                'numeric' => trans( 'api.quantityNumeric' )
            ],
            '*.session_id' => [
                'required' => 'Session id is required'
            ]
        ] );
        $item = false;
        foreach ($request->all() as $key => $product) {
            $item = Item::where( "url", $product['url'] )->where( function ($query) use ($product) {
                if (auth()->guard( 'api' )->id()) {
                    $query->where( 'user_id', auth()->guard( 'api' )->id() );
                } else {
                    $query->where( 'session_id', $product['session_id'] )->whereNull( 'user_id' );
                };
            } )->whereNull( 'order_id' )->first();
            if (!empty( $item->id )) {
                $item->itemPrice()->update( [
                    'quantity' => $item->itemPrice->quantity + $product["quantity"]
                ] );
            } else {
                $exist_item = Item::with( 'productMeasurement' )
                    ->whereUrl( $product['url'] )
                    ->whereHas( 'productMeasurement', function ($query) {
                        return $query->whereNotNull( 'approved_by' );
                    } )
                    ->has( 'productMeasurement' )
                    ->first();
                $approved_weight = !empty( $exist_item->productMeasurement->approved_weight ) ? $exist_item->productMeasurement->approved_weight : 0;
                if ($approved_weight == 0) {
                    $exist_item = Item::whereUrl( $product['url'] )->first();
                    $approved_weight = !empty( $exist_item->volumetric_weight ) ? $exist_item->volumetric_weight : 0.0;
                }
                $sku = uniqid( 'measurement' );
                $item = new Item;
                $item->title = isset( $product["title"] ) ? $product["title"] : '';
                $item->session_id = isset( $product['session_id'] ) ? $product['session_id'] : '';
                $item->imageUrl = isset( $product['image'] ) ? $product['image'] : '';
                $item->url = isset( $product['url'] ) ? $product['url'] : '';
                $item->description = isset( $product['instructions'] ) ? $product['instructions'] : '';
                $item->sku = $sku;
                $item->volumetric_weight = $approved_weight;
                $item->user_id = auth()->guard( 'api' )->id();
                $item->save();
                $item->itemPrice()->save(
                    new ItemPrice( [
                        'quantity' => $product["quantity"],
                        'item_price' => !empty( $exist_item->itemPrice->item_price ) ? $exist_item->itemPrice->item_price : 0
                    ] )
                );
                $item->productMeasurement()->create( [
                    'title' => isset( $product["title"] ) ? $product["title"] : '',
                    'sku' => $sku
                ] );
            }
        }
        if ($item)
            return response()->json( ['status' => true, 'message' => trans( 'api.itemAdded' )] );
        return response()->json( ['status' => false, 'message' => trans( 'api.itemAddedFailed' )] );
    }


    public function storeReOrderItem(Request $request, Item $item)
    {
        $this->validate( $request, [
            'item_id' => 'required|numeric'
        ] );

        DB::transaction( function () use ($request, $item) {
            try {
                $exist_item = Item::with( 'itemPrice' )->findOrFail( $request->item_id );
            } catch (ModelNotFoundException $exception) {
                return response()->json( ['status' => false, 'message' => 'Item has been deleted from our database'] );
            }
            $item->fill( collect( $exist_item )->except( 'id', 'created_at', 'updated_at', 'session_id', 'item_price', 'is_gift', 'is_apply_insurance', 'order_id' )->toArray() );
            $item->user_id = auth()->guard('api')->id();
            $item->session_id = $request->session_id;
            $item->save();
            $itemPrice = collect( $exist_item->itemPrice )
                ->only( 'item_price', 'shipping_cost', 'current_price',
                    'discount_end_at', 'discount',
                    'service_charge', 'quantity', 'item_bd_tax', 'item_usa_tax' )->toArray();

            $itemPrice["quantity"] = 1;

            $item->itemPrice()->create( $itemPrice );
        }, 5 );

        return response()->json( [
            'status' => true,
            'message' => 'Item has been added successfully',
            'item' => new ItemResource($item)
        ] );
    }


    public function prohibitedItem(Request $request)
    {
        if ($request->sessionId && Redis::exists( $request->sessionId ))
            return Redis::smembers( $request->sessionId );
    }

    public function removeProhibitedItem(Request $request)
    {
        if ($request->sessionId){
            Redis::del( $request->sessionId );
            return response()->json( ['status' => true, 'message' => 'Prohibited Item Deleted'] );
        }
    }

    public function popularItems($perpage = 10) {
        $popularItems = Item::select('url', \DB::raw('COUNT(`url`) AS url_count'))
            ->whereNotIn('url', Item::whereUserId(auth('api')->id())->whereNull('order_id')->get()->pluck("url"))
            ->whereNotNull('order_id')
            ->whereHas('status', function ($query){
                return $query->whereNotIn('alias', ['cancel', 'pending-for-review', 'review-complete', 'confirmed', 'pending']);
            })
            ->whereHas('itemPrice', function ($query){
                return $query->whereNotIn('item_price', ['null', 0]);
            })
            ->whereIsInPopular(1)
            ->groupBy('url')
            ->orderBy('url_count', 'DESC')
            ->where(function ($query){
                $query->whereNotNull("volumetric_weight");
                $query->where("volumetric_weight", "!=", 0);
            })
            ->groupBy('url')
            ->pluck('url');

        $items = Item::whereIn('url', $popularItems)
            ->whereHas('status', function ($query){
                return $query->whereNotIn('alias', ['cancel', 'pending-for-review', 'review-complete', 'confirmed', 'pending']);
            })
            ->whereIsInPopular(1)
            ->whereHas('itemPrice', function ($query){
                return $query->whereNotIn('item_price', ['null', 0]);
            })
            ->where(function ($query){
                $query->whereNotNull("volumetric_weight");
                $query->where("volumetric_weight", "!=", 0);
            })
            ->groupBy('url')
            ->latest()
            ->paginate($perpage);
        return ItemResource::collection($items);
    }
}
