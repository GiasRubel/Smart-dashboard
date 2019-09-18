<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderShippingCost extends Model
{
    protected $table = "order_shipping_cost";
    protected $fillable = ['order_id', 'reference_id', 'status'];

    public function order(){
        return $this->belongsTo(Order::class, 'reference_id', 'id');
    }
}
