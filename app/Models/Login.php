<?php

namespace App\Models;

use App\Models as Models;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    protected $dates = ['login_at', 'logout_at', 'created_at', 'updated_at'];

    public function browser()
    {
        return $this->belongsTo(BrowserVerify::class, 'browser_id', 'id');
    }

    public function loginActivities()
    {
        return $this->hasMany(LoginActivities::class, 'login_id', 'id');
    }

}
