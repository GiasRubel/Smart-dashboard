<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\PaymentMethod::class, function (Faker $f) {
    return [
        'title' => $f->unique()->randomElement( ['By Credit Card', 'Cash on delivery'] ),
        'is_online' => $f->boolean(80),
        'is_card_applicable' => $f->boolean(80),
    ];
} );