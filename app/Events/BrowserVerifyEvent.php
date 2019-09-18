<?php

namespace App\Events;

use App\Models\BrowserVerify;
use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class BrowserVerifyEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $browser;
    public $user;

    /**
     * Create a new event instance.
     *
     * @param $browser
     * @param User $user
     */

    public function __construct($browser, User $user)
    {
        $this->browser=$browser;
        $this->user=$user;
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
