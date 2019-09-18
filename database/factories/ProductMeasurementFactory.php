<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\ProductMeasurement::class, function (Faker $f) {
    return [
        'store_id' => $f->randomElement( [1, 2, 3] ),
        'weight' => $f->numberBetween(40, 500),
        'dimension' => $f->numberBetween(10, 60)." x ".$f->numberBetween(10, 150)." x ".$f->numberBetween(10, 120),
        'volumetric_weight' => $f->numberBetween(20, 800),
        'approved_by' => $f->randomElement( Models\User::whereIsAdmin( 1 )->pluck( 'id' )->toArray() )
    ];
} );