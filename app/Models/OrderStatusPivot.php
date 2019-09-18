<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class OrderStatusPivot extends Pivot
{
    protected $table = "order_statuses";
    public function user(){
        return $this->hasOne(User::class, 'id', 'updated_by');
    }
}
