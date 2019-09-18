<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderPayment extends Model
{
    protected  $table = "order_payments";
    protected $fillable = [
        'order_id',
        'payment_method_id',
        'charge_id',
        'gateway_id',
        'amount',
        'currency',
        'create_at',
        'expire_at',
        'visible_4_digit',
        'status',
        'conversion_rate',
        'gateway_charge_amount'
    ];

    public function online(){
        return $this->hasOne(PaymentOnline::class, "id", "gateway_id");
    }
    public function method(){
        return $this->hasOne(PaymentMethod::class, 'id', 'payment_method_id');
    }
    public function currency(){
        return $this->hasOne(Currency::class, 'id', 'currency');
    }
    public function refunds(){
        return $this->hasMany(PaymentRefund::class, 'payment_id', 'id');
    }
    public function cash(){
        return $this->hasOne(CashPayment::class, 'payment_id', 'id');
    }
    public function order(){
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }
}
