<?php
use Faker\Generator as Faker;
use App\Models as Models;

$factory->define(Models\State::class, function (Faker $f) {
    return [
        'title' => $f->state,
    ];
});