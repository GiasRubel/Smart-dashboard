<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\TaxZoneRate::class, function (Faker $f) {
    return [
        'title' => $f->words( rand( 1, 4 ), true ),
        'zip' => $f->postcode,
        'country_id' => $f->randomElement( Models\Country::pluck( 'id' )->toArray() ),
        'state_id' => $f->randomElement( Models\State::pluck( 'id' )->toArray() ),
    ];
} );