<?php

namespace App\Listeners;

use App\Events\UserVerify;
use App\Mail\VerifyEmail;
use App\Mail\WelcomeEmail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendReVerifyEmail
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
     * @param  object $event
     * @return void
     */
    public function handle(UserVerify $event)
    {
        Mail::to( $event->user->email )->send( (new VerifyEmail( $event->user ))->onQueue("high") );
    }
}
