<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class State extends Models
{
    public $timestamps = false;

    protected $fillable = ['title', 'country_id'];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function address(){
        return $this->hasMany(Address::class);
    }

    public function districts() {
        return $this->hasMany(District::class, 'id', 'state_id');
    }

    //for unit test
    public function getNameAttribute()
    {
        return "$this->title";
    }

}
