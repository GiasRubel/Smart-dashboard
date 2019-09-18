<?php

namespace App\Models;

use App\Events\Order\SendOrderStatusNotifySmsEvent;
use App\Notifications\OrderStatusNotification;
use Illuminate\Support\Facades\Redis;

class Order extends Models
{
    public $timestamps = false;
    protected $appends = ["master_price", "total_price", "total_insurance", "total_gift", "items_shipping_cost"];
    protected $dates = [
        'order_date'
    ];
    protected $fillable = [
        'order_number',
        'currency',
        'shipping_cost',
        'tax_usa',
        'tax_bd',
        'payment_method_id',
        'purchase_invoice_number',
        'user_id',
        'tax_rule_id',
        'shipping_method_id',
        'shipping_address_id',
        'coupon_id',
        'order_date',
        'delivery_date',
        'last_status_id',
        'service_charge'
    ];
    public function getMasterPriceAttribute(){
        return $this->calculateMasterPrice();
    }
    public function getTotalPriceAttribute(){
        return $this->calculateTotalPrice();
    }

    public function paymentmethod()
    {
        return $this->belongsTo( PaymentMethod::class, 'payment_method_id' );
    }

    public function user()
    {
        return $this->belongsTo( User::class, 'user_id' );
    }

    public function tax_rule()
    {
        return $this->belongsTo( TaxRule::class, 'tax_rule_id' );
    }

    public function status()
    {
        return $this->belongsToMany( Status::class, 'order_statuses','order_id', 'status_id')
            ->withPivot('updated_by', 'description')
            ->withTimestamps();
    }

    public function reasons(){
        return $this->belongsToMany(Reason::class, 'order_reasons', 'order_id', 'reasons_id')
            ->withPivot('other_reason');
    }

    public function currencies()
    {
        return $this->hasOne( Currency::class, 'id', 'currency' );
    }

    public function lastStatus(){
        return $this->belongsTo(Status::class, 'last_status_id', 'id');
    }

    public function lastStatusCreatedAt(){
        $relation = $this->hasOne(OrderStatusPivot::class, 'status_id', 'last_status_id');
        $relation->getQuery()
            ->joins = [];
        $relation->select('order_statuses.*')->getQuery()->join('orders', function ($query){
            $query->on('orders.id', '=', 'order_statuses.order_id');
            $query->on('orders.last_status_id', '=', 'order_statuses.status_id');
        });
        return $relation;
    }

    public function items()
    {
        return $this->hasMany( Item::class, 'order_id' );
    }

    public function address()
    {
        return $this->hasOne( Address::class, 'id', 'shipping_address_id' )->withTrashed();
    }

    public function payments()
    {
        return $this->hasMany( OrderPayment::class, 'order_id' );
    }

    public function getOrderByStatus($status)
    {
        return $this->where('last_status_id', $status);
    }
    public function calculateMasterPrice(){
        return $this->total_price +
            $this->shipping_cost + //order shippping cost
            $this->tax_usa +
            $this->tax_bd +
            $this->service_charge +
            $this->items_shipping_cost; // items shipping cost. This also included quantity
    }
    public function calculateTotalPrice(){
        $items = collect($this->items);
        return $items->sum("itemPrice.item_subtotal_price");
    }
    public function totalVolumetricWeight(){
        $total = 0;
        foreach ($this->items as $item){
            $exploded = explode(' ', $item->volumetric_weight);
            $total += $exploded[0] * $item->itemPrice->quantity;
        }
        return $total;
    }
    public function moneyReceipt(){
        return $this->hasMany(CashMoneyReceipt::class, 'order_id', 'id');
    }

    public function getTotalInsuranceAttribute(){
        $items = collect($this->items);
        return $items->sum("itemPrice.insurance_amount"); //total insurance amount of order
    }
    public function getTotalGiftAttribute(){
        return $this->items->sum("itemPrice.gift_amount"); //total gift amount of order
    }

    public function getItemsShippingCostAttribute()
    {
        return $this->items->sum("itemPrice.item_shipping_cost"); //total shipping cost of item
    }

    public function shippingOrder(){
        return $this->hasOne(OrderShippingCost::class, 'reference_id', 'id');
    }

    public function totalGateWayChargeAmount() {
        return $this->payments()->sum("gateway_charge_amount");
    }

    //status change || redis counter section || status notify

    public function deleteOrder()
    {
        $redis_exists = Redis::smembers("status.".optional($this->lastStatus)->alias) ?? [];

        if (count($redis_exists) == 1){
            Redis::sadd("status.".optional($this->lastStatus)->alias, "");
        }

        Redis::srem("status.{$this->lastStatus->alias}", 0, $this->id);
        foreach ($this->items()->get() as $item){
            Redis::srem("status.".optional($item->status)->alias, 0, $this->id);
        }
        $this->delete();

    }

    public static function boot(){
        parent::boot();
        static::deleting(function ($order){
            $redis_exists = Redis::smembers("status.".optional($order->lastStatus)->alias) ?? [];

            if (count($redis_exists) == 1){
                Redis::sadd("status.".optional($order->lastStatus)->alias, "");
            }

            Redis::srem("status.{$order->lastStatus->alias}", 0, $order->id);
            foreach ($order->items()->get() as $item){
                Redis::srem("status.".optional($item->status)->alias, 0, $order->id);
            }
            $order->items()->delete();
            $order->shippingOrder()->delete();
        });
    }

    public function statusNotify($notifyBy)
    {
        if ($notifyBy === 'email'){
            return $this->user->notify((new OrderStatusNotification( $this, ['mail'] ))->delay( 5 ));
        }else if ($notifyBy === 'all') {
            return $this->user->notify((new OrderStatusNotification( $this, ['database', 'mail', 'broadcast'] ))->delay( 5 ));
        }else if($notifyBy === 'system'){
            return $this->user->notify((new OrderStatusNotification( $this, ['database', 'broadcast'] ))->delay( 5 ));
        }else if($notifyBy === 'sms'){
            return event( new SendOrderStatusNotifySmsEvent( $this->user, $this ) );
        }
    }

    public function changeStatus($status, $data = [])
    {
        $redis_exists = Redis::smembers("status.".optional($this->lastStatus)->alias) ?? [];

        if (count($redis_exists) == 1){
            Redis::sadd("status.".optional($this->lastStatus)->alias, "");
        }

        if (in_array($this->id, $redis_exists))
            Redis::srem("status.{$this->lastStatus->alias}", $this->id);
        $st = Status::find($status);

        //check if current status exist
        $redis_exists = Redis::smembers("status.".$st->alias) ?? [];
        if (in_array($this->id, $redis_exists))
            Redis::srem("status.{$st->alias}", $this->id);

        Redis::sadd("status.{$st->alias}", $this->id);
        $this->last_status_id = $status;
        $this->status()->attach([$status => [
            'updated_by' => \Auth::id(),
            'description' => json_encode($data)
        ]]);
        $this->save();
        foreach ($this->items()->get() as $key => $item){
            if (optional($item->status)->alias != 'cancel'){
                $item->removeRedisItemStatus($status);
            }
        }
    }


}
