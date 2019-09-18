<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\LoginActivities::class, function (Faker $f) {
    return [
        'operation' => $f->sentence
    ];
} );