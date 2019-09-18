<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\Address::class, function (Faker $f) {
    return [
        'address' => $f->address,
        'latitude' => $f->latitude,
        'longitude' => $f->longitude,
        'is_default' => $f->boolean,
        'zip_code' => $f->postcode,
        'phone' => $f->phoneNumber,
        'city' => $f->city,
        'full_name' => $f->title . $f->firstName . $f->lastName,
        'country_id' => $f->randomElement( Models\Country::pluck( 'id' )->toArray() ),
        'state_id' => $f->randomElement( Models\State::pluck( 'id' )->toArray() ),
        'user_id' => $f->randomElement( Models\User::pluck( 'id' )->toArray() ),
    ];
} );