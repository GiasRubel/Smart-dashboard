<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\BrowserVerify::class, function (Faker $f) {
    return [
        'is_verify' => $f->boolean,
        'device_type' => $f->randomElement( ['mobile', 'desktop'] ),
        'device_id' => str_random( 20 ),
        'browser_type' => $f->userAgent,
        'browser_id' => str_random( 20 ),
    ];
} );