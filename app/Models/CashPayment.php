<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class CashPayment extends Models
{
    protected $table = "cash_payments";
    protected $fillable = [
        'payment_id',
        'account_name',
        'bank_name',
        'account_number',
        'branch_name'
    ];
    public function payment(){
        return $this->belongsTo(OrderPayment::class, 'payment_id', 'id');
    }
}
