<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProhibitedItem extends Models
{
    protected $table='prohibited_items';
    public $timestamps=false;
    protected $fillable = ['title', 'type'];
}
