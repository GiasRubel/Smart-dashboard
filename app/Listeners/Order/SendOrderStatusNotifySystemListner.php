<?php

namespace App\Listeners\Order;

use App\Events\Order\SendOrderStatusNotifySystemEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendOrderStatusNotifySystemListner
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
     * @param  SendOrderStatusNotifySystemEvent  $event
     * @return void
     */
    public function handle(SendOrderStatusNotifySystemEvent $event)
    {

    }
}
