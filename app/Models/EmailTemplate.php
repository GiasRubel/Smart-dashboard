<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmailTemplate extends Models
{
    protected $fillable = ['title', 'source', 'created_at', 'updated_at'];
}
