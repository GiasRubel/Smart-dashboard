<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShipmentRate extends Models
{
    public $timestamps = false;

    protected $table = 'shipment_rates';

    protected $fillable = ['title', 'country_id', 'district', 'state_id', 'zip_code', 'weight_range', 'dimension', 'items', 'price', 'product_type', 'order'];


    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function district() {
        return $this->belongsTo(District::class, 'district', 'id');
    }

    public function setTitleAttribute($value)
    {
        return $this->attributes['title'] = trim($value);
    }

    public static function boot()
    {
        parent::boot();
        static::saving(function ($rate){
            cache()->forget('maximum_shipping_weight');
            cache()->forget("cost-".$rate->country_id."-".$rate->state_id."-".$rate->district."-".$rate->weight_range);
        });
    }

}
