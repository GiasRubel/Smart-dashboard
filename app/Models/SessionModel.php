<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SessionModel extends Model
{
   protected $table = "sessions";
   public $timestamps = false;
   protected $fillable = [
       'id',
       'user_id',
       'ip_address',
       'user_agent',
       'payload',
       'last_activity'
   ];
}
