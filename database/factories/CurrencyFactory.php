<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\Currency::class, function (Faker $f) {
    return [
        'title' => $f->randomElement( ['BDT', 'USD'] ),
        'sign' => $f->randomElement( ['BDT', '$'] ),
        'code' => $f->randomElement( ['BDT', 'USD'] ),
        'usd_conversion_amount' => $f->numberBetween( 82, 85 ),
    ];
} );