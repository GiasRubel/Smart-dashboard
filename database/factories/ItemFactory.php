<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\Item::class, function (Faker $f) {
    return [
        'title' => $f->randomElement( ['Samsung smart TV ' . rand( 1, 8 ), 'Iphone ' . rand( 1, 8 ), 'Samsung ' . rand( 1, 9 ), 'Nokia ' . rand( 1, 9 ), 'Google pixel ' . rand( 1, 9 ), 'One plus ' . rand( 1, 6 )] ),
        'store_id' => $f->randomElement( [1, 2, 3] ),
        'user_id' => $f->randomElement( Models\User::pluck( 'id' )->toArray() ),
        'weight' => rand(1, 50) . ' lb',
        'dimension' => $f->randomNumber( rand(1,2) ) . "x" . $f->randomNumber( rand(1,2) ) . "x" .  $f->randomNumber( rand(1,2) ) . " inches",
        'url' => $f->url,
        'imageUrl' => $f->imageUrl(),
        'sku' => $f->sha1,
        'available_quantity' => $f->numberBetween(20, 220),
        'is_gift' => $f->boolean,
        'is_apply_insurance' => $f->boolean,
        'item_status' => $f->randomElement( Models\State::pluck( 'id' )->toArray() ),
        'volumetric_weight' =>  rand(1, 4000),
        'session_id' => md5(uniqid())
    ];
} );