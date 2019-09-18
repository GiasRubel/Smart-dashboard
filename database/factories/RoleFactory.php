<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\Role::class, function (Faker $f) {
    $title = $f->unique()->randomElement( ['Admin', 'Support', 'Sales', 'Purchase', 'Delivery', 'Local Delivery', 'Custom', 'Account'] );
    return [
        'title' => $title,
        'alias' => strtolower( $title )
    ];
} );