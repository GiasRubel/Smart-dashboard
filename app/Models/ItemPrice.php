<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class ItemPrice extends Model
{
    public $timestamps = false;
    protected $table = "item_prices";
    protected $appends = ["item_subtotal_price", "price", "item_current_price", "item_shipping_cost"];
    protected $fillable = [
        'item_id',
        'discount',
        'discount_end_at',
        'current_price',
        'item_price',
        'quantity',
        'service_charge',
        'item_bd_tax',
        'item_usa_tax',
        'insurance_amount',
        'gift_amount',
        'shipping_cost'
    ];

    public function getItemCurrentPriceAttribute()
    {
        $item = Item::with("order")->find($this->item_id);
        if (is_null($this->discount_end_at))
            return $this->current_price ? $this->current_price : $this->item_price; //if current price is exists return it or return item price
        $discountDate = new Carbon( $this->discount_end_at );
        $discountDate->subHour( config( 'settings.offer_min_time_duration' ) );
        if (!is_null($item->order)){
            if ($item->order->has('payments')){
                $parentDate = new Carbon($item->order->order_date);
            }else{
                $parentDate = Carbon::now();
            }
        }else{
            $parentDate = Carbon::now();
        }
        return $discountDate >= $parentDate ? $this->current_price : $this->item_price;
    }

    public function getPriceAttribute()
    {
        return $this->item_current_price * $this->quantity; //only the item calculated price * quantity without item shipping cost
    }

    public function getItemSubtotalPriceAttribute()
    {
        return $this->calculateSubtotal();
    }

    public function calculateSubtotal()
    {
        $price = $this->price;
        $subtotal = $price +
            $this->service_charge +
            $this->insurance_amount +
            $this->gift_amount +
            (optional( $this->customPrice )->custom_amount * $this->quantity);
        return $subtotal; //the subtotal price of item with all kind of price except the shipping cost
    }

    public function customPrice()
    {
        return $this->hasOne( ItemAdminOperation::class, 'item_id', 'item_id' );
    }

    public function item()
    {
        return $this->hasOne( Item::class, 'id', 'item_id' );
    }

    public function getItemShippingCostAttribute()
    {
        return $this->shipping_cost * $this->quantity; //Item shipping cost * quantity
    }
}
