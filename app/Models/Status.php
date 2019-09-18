<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Models
{
    public $timestamps=false;

    protected $casts = [
        'has_notify_user' => 'boolean'
    ];

    protected $fillable = ['title', 'alias', 'has_notify_user', 'notify_by', 'index'];

    public function orders()
    {
        return $this->belongsToMany(Order::class,'order_statuses','status_id','order_id')->withTimestamps();
    }
    public function lastOrders(){
        return $this->hasMany(Order::class, 'last_status_id', 'id');
    }
}
