<?php

namespace App\Listeners;

use App\Events\UserRegistration;
use App\Mail\VerifyEmail;
use Illuminate\Auth\Events\Registered;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendVerifyEmail
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(Registered $event)
    {
        $user=$event->user;
        Mail::to($user)->send((new VerifyEmail($user))->onQueue("high"));
    }
}
