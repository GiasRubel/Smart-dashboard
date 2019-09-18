<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\OrderPayment::class, function (Faker $f) {

    return [
        'payment_method_id' => $f->randomElement( Models\PaymentMethod::pluck( 'id' )->toArray() ),
        'gateway_id' => $f->randomElement( Models\PaymentOnline::pluck( 'id' )->toArray() ),
        'charge_id' => $f->creditCardNumber,
        'visible_4_digit' => $f->randomNumber( 4 ),
        'amount' => $f->randomNumber( rand(1,6) ),
        'currency' => $f->randomElement( Models\Currency::pluck( 'id' )->toarray() ),
        'status' => $f->boolean,
        'expire_at' => $f->creditCardExpirationDate,
        'create_at' => $f->dateTimeThisMonth
    ];
} );