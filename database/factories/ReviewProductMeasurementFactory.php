<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\ProductMeasurementReview::class, function (Faker $f) {
    return [
        'item_from_weight' => $f->numberBetween(10, 60)." lb",
        'item_from_dimension' => $f->numberBetween(10, 30)." x ".$f->numberBetween(50, 60)." x ".$f->numberBetween(30, 50)." inch",
        'item_from_volumetric_weight' => $f->numberBetween(120, 200)." lb"
    ];
} );