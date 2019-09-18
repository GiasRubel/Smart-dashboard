<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaxZoneRate extends Models
{
    public $timestamps=false;

    protected $table = 'tax_zone_rates';

    protected $fillable = ['title', 'country_id', 'state_id', 'zip'];

    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    public function state()
    {
        return $this->belongsTo(State::class, 'state_id');
    }
}
