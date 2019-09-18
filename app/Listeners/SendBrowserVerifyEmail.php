<?php

namespace App\Listeners;

use App\Events\BrowserVerifyEvent;
use App\Mail\BrowserVerifyEmail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendBrowserVerifyEmail
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
     * @param BrowserVerifyEvent $event
     * @return void
     */
    public function handle(BrowserVerifyEvent $event)
    {
        Mail::to($event->user['email'])->send((new BrowserVerifyEmail($event->browser, $event->user))->onQueue("high"));
    }
}
