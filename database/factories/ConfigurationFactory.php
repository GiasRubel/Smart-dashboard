<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\Configuration::class, function (Faker $f) {
    return [
        'purpose' => $f->paragraph
    ];
} );