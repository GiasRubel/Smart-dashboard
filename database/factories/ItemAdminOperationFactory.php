<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\ItemAdminOperation::class, function (Faker $f) {
    return [
        'purchase_invoice_number' => $f->randomNumber( rand( 4, 8 ) ),
        'custom_amount' => rand(10, 110),
        'custom_amount_reason' => $f->sentence( rand( 1, 5 ) ),
        'updated_by' => $f->randomElement( Models\User::whereIsAdmin( 1 )->pluck( 'id' )->toArray() ),
        'created_at' => $f->dateTimeThisMonth,
        'updated_at' => $f->dateTimeThisMonth
    ];
} );