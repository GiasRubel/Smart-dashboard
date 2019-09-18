<?php

namespace App\Listeners\Order;

use App\Events\order\SendOrderStatusNotifyEmailEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;
use App\Jobs\Order\SendOrderStatusNotifyEmail;

class SendOrderStatusNotifyEmailListener
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
     * @param  SendOrderStatusNotifyEmailEvent  $event
     * @return void
     */
    public function handle(SendOrderStatusNotifyEmailEvent $event)
    {
        Mail::to($event->user)->send(new SendOrderStatusNotifyEmail($event->user, $event->content, $event->status));
    }
}
