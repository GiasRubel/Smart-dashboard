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

class CreateOrderNotification extends Notification implements ShouldBroadcast, ShouldQueue
{
    use Queueable, AddressTrait;
    public $notifyBy;
    public $order;
    public $auth;
    public $view;
    public $tries = 3;
    public $timeout = 30;

    /**
     * Create a new notification instance.
     *
     * @param Order $order
     * @param $notifyBy
     * @param bool $view
     */
    public function __construct(Order $order, $notifyBy, $view = false)
    {
        $this->order = $order;
        $this->notifyBy = $notifyBy;
        $this->auth = auth()->user();
        $this->view = $view;
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
        $address = $this->addressDecider(optional($this->order->address->country)->country_code);
        //while shipping cost is not required(Already paid)
        if ($this->view){
            return (new MailMessage)->view( 'email.order.confirmForShipping', [
                'order' => $this->order,
                'user' => $notifiable,
                'address' => $address
            ] )->subject( "Ship your product through ShopNShipBD.com" );
        }
        //while shipping cost is required(Not paid yet)
        return (new MailMessage)->view( 'email.order.orderCreate', [
            'order' => $this->order,
            'user' => $notifiable,
            'address' => $address
        ] )->subject( "Ship your product through ShopNShipBD.com" );
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
