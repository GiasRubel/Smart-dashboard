<?php

namespace App\Models;

use App\Events\BrowserVerifyEvent;
use App\Events\UserRegistration;
use Carbon\Carbon;
use App\Models\BrowserVerify;
use Illuminate\Database\Eloquent\Model;

class VerifyUser extends Model
{
    protected $guarded = [];
    public $timestamps = false;
    protected $dates = ['expire_at', 'verified_at'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
