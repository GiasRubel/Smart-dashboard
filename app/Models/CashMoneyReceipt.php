<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CashMoneyReceipt extends Model
{
    protected $table = "cash_money_receipts";
    protected $fillable = ["receipt_image"];

    public function order(){
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }
}
