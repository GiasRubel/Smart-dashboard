<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\Store::class, function (Faker $f) {
    return [
        'store_name' => $f->unique()->randomElement( ['Amazon', 'Ebay', 'OverStock'] ),
    ];
} );