<?php

namespace App\Models;

use App\Filters\QueryFilter;
use App\Traits\Authorized;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens, Authorized;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'mobile', 'email_verified_at', 'is_admin', 'image'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    protected $table = 'users';

    protected $casts = [
        'is_active' => 'boolean',
        'is_admin' => 'boolean',
        'is_email_verify' => 'boolean',
        'is_mobile_verify' => 'boolean'
    ];

    public function roles()
    {
        return $this->belongsToMany( Role::class, 'user_roles', 'user_id', 'role_id' );
    }

    public function browsers()
    {
        return $this->hasMany( BrowserVerify::class, 'user_id', 'id' );
    }

    public function groups()
    {
        return $this->belongsToMany( Group::class, 'user_group', 'user_id', 'group_id' );

    }

    public function items()
    {
        return $this->hasMany( Item::class, 'user_id', 'id' );
    }

    public function addToCarts()
    {
        return $this->hasMany( Item::class, 'user_id', 'id' )->where( 'order_id', null );
    }

    public function verifyUser()
    {
        return $this->hasMany( VerifyUser::class, 'user_id' );
    }

    public function addresses()
    {
        return $this->hasMany( Address::class, 'user_id' );
    }

    public function paymentCards()
    {
        return $this->hasMany( UserPaymentCart::class, 'user_id' );
    }

    public function defaultAddress()
    {
        return $this->hasOne( Address::class, 'user_id', 'id' )
            ->where( 'is_default', '=', 1 );
    }

    public function scopeAdmins($query)
    {
        $query->where( 'is_admin', '=', 1 )->get();
    }

    public function scopeUsers($query)
    {
        return $query->where( 'is_admin', '=', 0 )->get();
    }

    public function scopeFilter($query, QueryFilter $filters)
    {
        return $filters->apply( $query );
    }

    public function socialProviders()
    {
        return $this->hasMany(SocialProvider::class);
    }
    public function orders(){
        return $this->hasMany(Order::class, 'user_id', 'id');
    }

    public function feedbacks(){
        return $this->hasMany(FeedBack::class, 'user_id', 'id');
    }

    public static function boot()
    {
        parent::boot();
        static::deleting(function ($user){ //deleting user all information and data
            //$user->orders()->delete();
            $user->addToCarts()->delete();
            //$user->addresses()->delete();
            $user->socialProviders()->delete();
            $user->browsers()->delete();
            //$user->items()->delete();
        });
    }
}
