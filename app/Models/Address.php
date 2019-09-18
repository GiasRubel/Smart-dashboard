<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use SoftDeletes;
    public $timestamps = false;
    public $guarded = [];
    protected $dates = ['deleted_at'];
    protected $appends = ['phones'];
    protected $fillable = [
        'user_id',
        'country_id',
        'state_id',
        'full_name',
        'address',
        'city',
        'zip_code',
        'phone',
        'latitude',
        'longitude',
        'is_default',
        'address_2',
        'district_id'
    ];

    public function getPhonesAttribute()
    {
        if ($data = json_decode( $this->attributes["phone"] )) {
            return $data;
        }

        return [["phone" => $this->attributes["phone"]]];
    }

    public function setPhoneAttribute($value)
    {
        $this->attributes["phone"] = json_encode($value);
    }

    public function user()
    {
        return $this->belongsTo( User::class, 'user_id' );
    }

    public function country()
    {
        return $this->belongsTo( Country::class, 'country_id' );
    }

    public function state()
    {
        return $this->belongsTo( State::class, 'state_id' );
    }

    public function order()
    {
        return $this->hasMany( Order::class, 'shipping_address_id', 'id' );
    }

    public function district()
    {
        return $this->belongsTo(District::class, 'district_id', 'id');
    }

}
