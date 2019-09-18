<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class AdminOrderNotifyEmail implements ShouldQueue
{
    use Queueable, SerializesModels, Dispatchable, InteractsWithQueue;
    public $order;
    public $customer;
    public $adminEmail;
    public $tries = 3;
    public $timeout = 30;

    /**
     * Create a new message instance.
     *
     * @param $order
     * @param $customer
     * @param $email
     */
    public function __construct($order, $customer, $email)
    {
        $this->order = $order;
        $this->customer = $customer;
        $this->adminEmail = $email;
    }

    /**
     * Build the message.
     *
     * @return AdminMail
     */
    public function handle()
    {
        return Mail::to($this->adminEmail)->send(new AdminMail($this->order, $this->customer, $this->adminEmail));
    }
}
