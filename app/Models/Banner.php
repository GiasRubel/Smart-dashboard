<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Models
{
    protected  $fillable = ['status', 'type', 'activated_at', 'expire_at', 'default_img', 'country_id'];

    public function country()
    {
        return $this->hasOne(Country::class, 'id', 'country_id');
    }
}
