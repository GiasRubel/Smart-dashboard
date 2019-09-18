<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Models
{
    public $timestamps=false;

    protected $table = 'payment_methods';

    protected $fillable = ['title', 'is_online', 'is_card_applicable'];

    protected $casts = [
        'is_online' => 'boolean',
        'is_card_applicable' => 'boolean'
    ];

    public function online(){
        return $this->hasMany('App\Models\PaymentOnline', 'payment_method_id', 'id');
    }
    public function scopeIsonline($query){
        return  $query->where('is_online', '=', 1);
    }

}
