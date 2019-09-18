<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\ShipmentRate::class, function (Faker $f) {
    return [
        'title' => $f->words( rand( 1, 3 ) , true),
        'zip_code' => $f->postcode,
        'weight_range' => $f->unique()->numberBetween( 1, 1000 ),
        'dimension' => '*',
        'items' => '*',
        'price' => $f->numberBetween( 1, 5 ),
        'order' => $f->randomNumber( rand( 1, 2 ) ),
        'country_id' => $f->randomElement( Models\Country::pluck( 'id' )->toArray() ),
        'state_id' => $f->randomElement( Models\State::pluck( 'id' )->toArray() ),
    ];
} );