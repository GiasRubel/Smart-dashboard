<?php

namespace App\Mail;

use App\Traits\AddressTrait;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class AdminMail extends Mailable
{
    use SerializesModels, AddressTrait;
    public $order;
    public $customer;
    public $email;

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
        $this->email = $email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->to( $this->email )
            ->view( 'email.order.adminEmail',
                [
                    'order' => $this->order,
                    'customer' => $this->customer,
                    'address' => $this->addressDecider()
                ]
            )->subject( "The new order has proceeded" );
    }
}
