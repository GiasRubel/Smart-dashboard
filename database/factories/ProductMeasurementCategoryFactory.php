<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\ProductMeasurementCategory::class, function (Faker $f) {
    return [
        'title' => $f->randomElement( ['Samsung smart TV' . rand( 1, 10 ), 'Iphone-' . rand( 1, 10 ), 'Samsung ' . rand( 1, 9 ), 'Nokia ' . rand( 1, 9 ), 'Google pixel ' . rand( 1, 9 ), 'One plus ' . rand( 1, 6 )] ),
        'volumetric_weight' => $f->numberBetween(120, 200),
        'parent_id' => $f->numberBetween(1, 10)
    ];
} );