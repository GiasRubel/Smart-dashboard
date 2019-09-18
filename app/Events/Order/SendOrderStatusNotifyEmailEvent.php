<?php

namespace App\Events\Order;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class SendOrderStatusNotifyEmailEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $user;
    public $content;
    public $status;

    /**
     * Create a new event instance.
     *
     * @param $user
     * @param $content
     * @param $status
     */
    public function __construct($user, $content, $status)
    {
        $this->user = $user;
        $this->content = $content;
        $this->status = $status;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
