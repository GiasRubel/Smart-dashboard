<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StoreSettings extends Models
{
    protected $table = "store_settings";
    protected $fillable = [
        'store_id',
        'key',
        'value',
        'type'
    ];
    public function store(){
        return $this->belongsTo(Store::class, 'store_id', 'id');
    }
}
