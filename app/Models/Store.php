<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Store extends Models
{
    protected $table = "stores";

    protected $fillable = ['store_name'];
}
