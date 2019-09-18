<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Models
{
    public $timestamps=false;

    protected $fillable = ['title', 'country_code', 'default_currency', 'is_shippable', 'domain_url'];

    protected $casts = [
        'is_shippable' => 'boolean',
    ];

    public function states(){
        return $this->hasMany(State::class);
    }

    public function address(){
        return $this->hasMany(Address::class);
    }

   public function currencies()
   {
       return $this->belongsTo(Currency::class,'default_currency');
   }
}
