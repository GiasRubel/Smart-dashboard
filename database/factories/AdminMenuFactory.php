<?php
use Faker\Generator as Faker;
use App\Models as Models;

$factory->define(Models\AdminMenu::class,function (Faker $f){
    return [
        'title'=>$f->title,
        'menu_types'=>$f->randomElement(['top_menu','sidebar_menu']),
        'menu_action'=>$f->randomElement(['index','show','create','update','destroy']),
        'route'=>$f->word,
        'module_name'=>$f->word,
        'icon_class'=>$f->word,
        'status'=>$f->boolean(50),
        'icon_img'=>$f->imageUrl(),
    ];
});