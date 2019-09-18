<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Models
{
    public $timestamps = false;

    public function users()
    {
        return $this->belongsToMany( User::class, 'user_roles', 'role_id', 'user_id' );
    }

    public function permissions()
    {
        return $this->hasMany( Permission::class );

    }
}
