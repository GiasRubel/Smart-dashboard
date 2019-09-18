<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\Login::class, function (Faker $faker) {
    return [
        'ip' => $faker->ipv4,
        'location' => $faker->localIpv4,
        'browser_id' => $faker->randomElement( Models\BrowserVerify::pluck( 'id' )->toArray() ),
        'login_at' => \Carbon\Carbon::now(),
        'logout_at' => \Carbon\Carbon::tomorrow(),
//        'device_type' => rand(0, 1) ? 'mobile' : 'desktop',
//        'browser_type' => $faker->userAgent,

    ];
} );