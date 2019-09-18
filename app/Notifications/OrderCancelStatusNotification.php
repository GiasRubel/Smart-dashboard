<?php

namespace App\Notifications;

use App\Traits\AddressTrait;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class OrderCancelStatusNotification extends Notification implements ShouldQueue
{
    use Queueable, AddressTrait;
    public $order;
    public $auth;
    public $tries = 3;
    public $timeout = 30;


    /**
     * Create a new notification instance.
     *
     * @param $order
     */
    public function __construct($order)
    {
        $this->order = $order;
        $this->auth = auth()->user();

    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->view( 'email.order.orderCancel', [
                'order' => $this->order,
                'user' => $notifiable,
                'address' => $this->addressDecider(optional($this->order->address->country)->country_code)
            ])->subject( "Your order has been canceled" );
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            "message" => "Our technical team has been reviewed your order (Order No#" . $this->order->order_number . ") . If you want to proceed your order, go to your order details and complete your payment. ",
            "name" => $notifiable->name,
            "url" => "/user/" . $notifiable->id . "/order-details/" . $this->order->id,
            "url_title" => "Pay Now",
            "type" => "notification-" . strtolower( $this->order->lastStatus->alias ),
            "notify_by" => $this->auth->name,
            "order_number"=>$this->order->order_number
        ];
    }

    public function broadcastOn()
    {
        return new PrivateChannel( 'App.User.' . $this->order->user_id );
    }
}
