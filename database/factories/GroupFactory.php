<?php
use Faker\Generator as Faker;
use App\Models as Models;

$factory->define(Models\Group::class, function (Faker $f) {
    return [
        'title' => $f->words(2, true),
    ];
});