<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminMenu extends Models
{
    protected $table='admin_menus';
    public $timestamps=false;

    protected $fillable = ['title', 'menu_types','menu_action','route','module_name','component_name','icon_class','status','icon_img', 'parent_component'];

}
