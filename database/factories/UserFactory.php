<?php

use Faker\Generator as Faker;
use App\Models as Models;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define( Models\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'mobile' => $faker->phoneNumber,
        'is_admin' => $faker->boolean( 20 ),
        'is_email_verify' => $faker->boolean,
        'is_mobile_verify' => $faker->boolean,
        'remember_token' => str_random( 10 ),
    ];
} );