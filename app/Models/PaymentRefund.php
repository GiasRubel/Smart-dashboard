<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentRefund extends Model
{
    protected $table = "payment_refunds";
    protected $fillable = [
        'payment_id',
        'refund_id',
        'refund_amount',
        'refund_by'
    ];
    public function payment(){
        return $this->belongsTo(OrderPayment::class, 'payment_id', 'id');
    }
    public function user(){
        return $this->hasOne(User::class, 'id', 'refund_by');
    }
}
