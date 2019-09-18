<?php

namespace App\Listeners\Order;

use App\Events\Order\SendOrderStatusNotifySmsEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Jobs\Order\SendOrderStatusNotifySms;

class SendOrderStatusNotifySmsListener
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
     * @param  SendOrderStatusNotifySmsEvent'  $event
     * @return void
     */
    public function handle(SendOrderStatusNotifySmsEvent $event)
    {
        new SendOrderStatusNotifySms($event->user, $event->content);
    }
}
