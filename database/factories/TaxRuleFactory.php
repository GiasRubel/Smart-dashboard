<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\TaxRule::class, function (Faker $f) {
    return [
        'title' => $f->words( rand( 1, 4 ), true ),
        'priority' => $f->randomNumber( rand( 1, 3 ) ),
        'applicable_for_subtotal' => $f->boolean,
    ];
} );