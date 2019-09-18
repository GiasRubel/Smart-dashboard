<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @method static insert(array $array)
 */
class Currency extends Models
{
    public $timestamps=false;

    protected $fillable = ['title', 'code', 'sign', 'usd_conversion_amount', 'expire_at'];
}
