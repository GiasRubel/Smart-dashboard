<?php

namespace App\Jobs\Order;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SendOrderStatusNotifySms implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $user;
    public $content;

    public function __construct($user, $content)
    {
       $this->user = $user;
       $this->content = $content;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function build()
    {
        \Log::alert($user);
    }
}
