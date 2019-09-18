<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LoginActivities extends Model
{
    public function login(){
        return $this->belongsTo(Login::class,'login_id','id');
    }
}
