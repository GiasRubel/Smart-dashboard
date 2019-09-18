<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentOnline extends Models
{
    use SoftDeletes;

    public $timestamps=false;

    protected $fillable = ['payment_method_id', 'title', 'secret_token', 'secret_id','applicable_country', 'others', 'order', 'alias', 'charge_amount'];

    public function paymentmethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_method_id');
    }

    public function country()
    {
        return $this->belongsTo(Country::class,'applicable_country');
    }
}
