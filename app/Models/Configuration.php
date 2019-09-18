<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Configuration extends Models
{
    protected $table = "configurations";
    protected $fillable = [
        'title',
        'purpose',
        'alias',
        'status',
        'updatedBy'
    ];

    public function user(){
        return $this->hasOne(User::class, 'id', 'updatedBy');
    }

}
