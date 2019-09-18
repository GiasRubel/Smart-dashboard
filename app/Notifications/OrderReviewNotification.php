<?php

namespace App\Notifications;

use App\Models\Order;
use App\Traits\AddressTrait;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class OrderReviewNotification extends Notification implements ShouldBroadcast, ShouldQueue
{
    use Queueable, AddressTrait;
    public $notifyBy;
    public $order;
    public $auth;
    public $conversion_rate;
    public $tries = 3;
    public $timeout = 30;

    /**
     * Create a new notification instance.
     *
     * @param Order $order
     * @param $notifyBy
     * @param string $message
     */
    public function __construct(Order $order, $notifyBy, $message = "")
    {
        $this->order = $order;
        $this->conversion_rate = optional($order->address->country)->country_code === 'BD' ?  config('settings.BDT') : 1;
        $this->notifyBy = $notifyBy;
        $this->auth = auth()->user();
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed $notifiable
     * @return MailMessage
     */
    public function via($notifiable)
    {
        return $this->notifyBy;
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)->view( 'email.order.orderReviewed', [
            'order' => $this->order,
            'user' => $notifiable,
            'conversion_rate' => $this->conversion_rate,
            'address' => $this->addressDecider(optional($this->order->address->country)->country_code)
        ] )->subject( "Your order has been reviewed & thanks for being part of the movement" );
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
            "message" => "Your order has been reviewed. To complete your order please proceed and make payment",
            "name" => $notifiable->name,
            "url" => "/user/" . $notifiable->id . "/order-details/" . $this->order->id,
            "url_title" => "Pay Now",
            "type" => "notification-" . strtolower( $this->order->lastStatus->alias ),
            "notify_by" => $this->auth->name,
            "order_number"=>$this->order->order_number
        ];
    }

    /**
     * broadcast the notification in real time through real time in private channel App.User.user_id
     * @return PrivateChannel|array|\Illuminate\Broadcasting\Channel|\Illuminate\Broadcasting\Channel[]
     */
    public function broadcastOn()
    {
        return new PrivateChannel( 'App.User.' . $this->order->user_id );
    }

}
