<?php
use Faker\Generator as Faker;
use App\Models as Models;

$factory->define(Models\ProhibitedItem::class,function (Faker $f){
    return [
        'title' => $f->word,
        'type' => $f->randomElement(['title', 'category'])
    ];
});