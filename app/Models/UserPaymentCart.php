<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserPaymentCart extends Model
{
    use SoftDeletes;
    public $timestamps=false;
    protected $table = "user_payment_cards";
    protected $fillable = [
        'user_id',
        'gateway_id',
        'card_number',
        'cvc',
        'card_bank',
        'is_verify',
        'assign_amount',
        'amount',
        'currency',
        'create_at',
        'expire_at',
        'is_active',
        'address_id'
    ];

    protected  $casts =[
        'is_active' => 'boolean',
        'is_verify' => 'boolean'
    ];

    public function setCvcAttribute($value) {
        $this->attributes['cvc'] = '';
    }

    public function billingAddress(){
        return $this->belongsTo(Address::class,'address_id', 'id');
    }

    public function gateWay(){
        return $this->hasOne(PaymentOnline::class,'id', 'gateway_id');
    }

}
