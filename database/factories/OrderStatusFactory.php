<?php

use Faker\Generator as Faker;
use App\Models as Models;


$factory->define( Models\OrderStatus::class, function (Faker $f) {
    return [
        /*'order_id' => $f->randomElement( Models\Order::pluck( 'id' )->toArray() ),
        'status_id' => $f->randomElement( Models\Status::pluck( 'id' )->toArray() ),*/
        'updated_by' => $f->randomElement( Models\User::whereIsAdmin( 1 )->pluck( 'id' )->toArray() ),
        'created_at' => $f->dateTimeThisMonth,
        'updated_at' => $f->dateTimeThisMonth,
    ];
} );