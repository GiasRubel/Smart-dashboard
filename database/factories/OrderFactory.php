<?php

use Carbon\Carbon;
use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\Order::class, function (Faker $f) {

    return [
        'order_number' => $f->year . '_' . $f->month . $f->randomNumber( rand( 2, 5 ) ),
        'currency' => $f->randomElement( Models\Currency::pluck( 'id' )->toArray() ),
        'shipping_cost' => rand(200, 300),
        'tax_usa' => rand(100, 150),
        'tax_bd' => rand(10, 40),
        'coupon_id' => $f->word,
        'payment_method_id' => $f->randomElement( Models\PaymentMethod::pluck( 'id' )->toArray() ),
        'tax_rule_id' => $f->randomElement( Models\TaxRule::pluck( 'id' )->toArray() ),
        'user_id' => $f->randomElement( Models\User::pluck( 'id' )->toArray() ),
        'shipping_method_id' => random_int( 1, 10 ),
        'shipping_address_id' => $f->randomElement( Models\Address::pluck( 'id' )->toArray() ),
        'order_date' => $f->dateTimeThisMonth,
        'delivery_date' =>$f->dateTimeThisMonth,
        'last_status_id' => rand(1, 10)
    ];
} );