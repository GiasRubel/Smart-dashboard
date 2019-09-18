<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NotificationType extends Models
{
    public $timestamps = false;

    protected $fillable = ['title', 'type'];
}
