<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\PaymentOnline::class, function (Faker $f) {
    $title = $f->unique()->randomElement( ['SSL  Commerz', 'Stripe'] );
    return [
        'title' => $title,
        'secret_token' => str_random( rand( 15, 20 ) ),
        'secret_id' => str_random( rand( 10, 12 ) ),
        'payment_method_id' => $f->randomElement( Models\PaymentMethod::whereIsOnline( 1 )->pluck( 'id' )->toArray() ),
        'alias' => strtolower( preg_replace( '/\s+/', '-', $title ) ),
        'applicable_country' => $f->randomElement( Models\Country::pluck( 'id' )->toArray() ),
        'others' => $f->sentence,
    ];
} );