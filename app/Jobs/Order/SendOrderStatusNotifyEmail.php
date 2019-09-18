<?php

namespace App\Jobs\Order;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Mail\Mailable;

class SendOrderStatusNotifyEmail extends Mailable implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $user;
    public $order;
    public $status;

    public function __construct($user, $order, $status)
    {
        $this->user = $user;
        $this->order = $order;
        $this->status = $status;

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function build()
    {
        $this->view( 'email.order.orderStatus' )
            ->with( ["user" => $this->user, "order" => $this->order, 'status' => $this->status ] );
    }
}
