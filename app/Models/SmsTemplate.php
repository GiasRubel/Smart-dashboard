<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SmsTemplate extends Models
{
    public $timestamps = false;
    protected  $fillable = ['title', 'message'];
}
