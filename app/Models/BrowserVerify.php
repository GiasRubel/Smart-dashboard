<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BrowserVerify extends Model
{
    protected $guarded=[];
    public function logins(){
        return $this->hasMany(Login::class,'browser_id');
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
