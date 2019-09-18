<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeedBack extends Model
{
    protected $table = "feed_backs";
    protected $fillable = [
        'user_id',
        'message',
        'status'
    ];
    protected $casts = [
        'status' => 'boolean'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function scopeActive($query){
        $query->where('status', '=', 1);
    }
}
