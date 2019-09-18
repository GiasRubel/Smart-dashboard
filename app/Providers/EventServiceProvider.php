<?php

namespace App\Providers;

use App\Events\BrowserVerifyEvent;
use App\Events\UserRegistration;
use App\Events\UserVerify;
use App\Events\Order\SendOrderStatusNotifyEmailEvent;
use App\Events\Order\SendOrderStatusNotifySmsEvent;
use App\Events\Order\SendOrderStatusNotifySystemEvent;
use App\Listeners\SendBrowserVerifyEmail;
use App\Listeners\SendPasswordReset;
use App\Listeners\SendReVerifyEmail;
use App\Listeners\Order\SendOrderStatusNotifySmsListener;
use App\Listeners\Order\SendOrderStatusNotifySystemListner;
use App\Listeners\SendVerifyEmail;
use App\Listeners\Order\SendOrderStatusNotifyEmailListener;
use App\Listeners\SendWelcomeEmail;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        UserRegistration::class => [
            SendWelcomeEmail::class,
        ],
        BrowserVerifyEvent::class=>[
            SendBrowserVerifyEmail::class
        ],
        Registered::class=>[
          SendEmailVerificationNotification::class
        ],
        UserVerify::class=>[
          SendReVerifyEmail::class
        ],
        SendOrderStatusNotifyEmailEvent::class => [
            SendOrderStatusNotifyEmailListener::class,
        ],
        SendOrderStatusNotifySmsEvent::class => [
            SendOrderStatusNotifySmsListener::class,
        ],
        SendOrderStatusNotifySystemEvent::class => [
            SendOrderStatusNotifySystemListner::class,
        ],
        'Illuminate\Auth\Events\PasswordReset' => [
         SendPasswordReset::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
