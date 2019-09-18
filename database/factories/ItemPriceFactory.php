<?php
use Faker\Generator as Faker;
use App\Models as Models;

$factory->define(Models\ItemPrice::class, function (Faker $f){
    return [
        'discount' => $f->randomDigit,
        'current_price' => rand(10, 150),
        'item_price'=> rand(10, 120),
        'quantity' => $f->numberBetween(1 , 10),
        'service_charge' => 0,
        'item_bd_tax' => 0,
        'item_usa_tax' => 0,
        'discount_end_at' => \Carbon\Carbon::now()
    ];
});