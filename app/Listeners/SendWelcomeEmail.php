<?php

namespace App\Listeners;

use App\Events\UserRegistration;
use App\Mail\WelcomeEmail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendWelcomeEmail
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
    public function handle(UserRegistration $event)
    {
        Mail::to($event->user->email)->send((new WelcomeEmail($event->user))->onQueue("high"));
    }
}
