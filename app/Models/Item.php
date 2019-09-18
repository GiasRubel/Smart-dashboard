<?php

namespace App\Models;
use Illuminate\Support\Facades\Redis;

class Item extends Models
{
    protected $appends = ["discount", "item_weight_kg"];
    protected $fillable = [
        'title',
        'store_id',
        'weight',
        'is_gift',
        'dimension',
        'url',
        'imageUrl',
        'sku',
        'available_quantity',
        'user_id',
        'is_gift',
        'is_apply_insurance',
        'item_status',
        'order_id',
        'volumetric_weight',
        'session_id',
        'is_in_popular'
    ];

    public function getDiscountAttribute()
    {
        return !empty($this->itemPrice->discount_end_at) ? $this->itemPrice->discount_end_at : '';
    }

    public function getItemWeightKgAttribute(){
        if (!is_null($this->volumetric_weight)){
            return (float)number_format(explode(' ', $this->volumetric_weight)[0] * 0.45, '2', '.', ' ');
        }
        return 0;
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function itemPrice()
    {
        return $this->hasOne(ItemPrice::class, 'item_id', 'id');
    }

    public function itemAdminOperationInfo()
    {
        return $this->hasOne(ItemAdminOperation::class, 'item_id');
    }

    public function store()
    {
        return $this->belongsTo(Store::class, 'store_id', 'id');
    }

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }

    public function productMeasurement()
    {
        return $this->hasOne(ProductMeasurement::class, 'sku', 'sku');
    }

    public function status() {
        return $this->hasOne(Status::class, 'id', 'item_status');
    }

    public static function boot() {
        parent::boot();
        static::deleting(function ($item){
            $redis_exists = Redis::smembers("status.".optional($item->status)->alias) ?? [];
            if (count($redis_exists) == 1){
                Redis::sadd("status.".optional($item->status)->alias, "");
            }
            Redis::srem("status.".optional($item->status)->alias, $item->order->id);
            $item->itemPrice()->delete();
            $item->itemAdminOperationInfo()->delete();
        });
    }

    //redis section || last section

    public function changeStatus($status, $item = true) {
        $redis_item_exists = Redis::smembers("status.".optional($this->status)->alias) ?? [];
        if (count($redis_item_exists) == 1){
            Redis::sadd("status.".optional($this->status)->alias, "");
        }
        if (in_array($this->order->id, $redis_item_exists)){
            //Redis::lrem("status.{$this->order->lastStatus->alias}", 0, $this->order->id);
            $counter = $this->order->items()->where('item_status', '=', optional($this->status)->id)->get()->count();
            if ($counter == 1)
                Redis::srem("status.".optional($this->status)->alias, $this->order->id);
        }

        if ($item){
            $st = Status::find($status);
            Redis::sadd("status.{$st->alias}", $this->order->id);
        }
        $this->item_status = $status;
        $this->save();
    }

    public function removeRedisItemStatus($status) {
        $redis_item_exists = Redis::smembers("status.".optional($this->status)->alias) ?? [];
        if (count($redis_item_exists) == 1){
            Redis::sadd("status.".optional($this->status)->alias, "");
        }
        if (in_array($this->order->id, $redis_item_exists)){
            if (optional($this->order->lastStatus)->alias != optional($this->status)->alias){
                Redis::srem("status.".optional($this->status)->alias, $this->order->id);
            }
        }
        $this->item_status = $status;
        $this->save();
    }

}
