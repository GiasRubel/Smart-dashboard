<?php

namespace App\Models;

class District extends Models
{
    protected $fillable = ['title', 'country_id', 'state_id', 'created_at', 'updated_at'];

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

}
