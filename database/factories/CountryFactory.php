<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\Country::class, function (Faker $faker) {
    $country = $faker->unique()->country;
    return [
        'title' => $country,
        'country_code' => $faker->countryCode,
        'default_currency' => $faker->randomElement( Models\Currency::pluck( 'id' )->toArray() ),
    ];
} );