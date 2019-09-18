<?php
use Faker\Generator as Faker;
use App\Models as Models;

$factory->define(Models\Invoice::class,function (Faker $f){
    return [
        'comments'=>$f->realText($maxNbChars = 200, $indexSize = 2)
    ];
});