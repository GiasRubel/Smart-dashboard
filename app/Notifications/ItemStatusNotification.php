<?php

namespace App\Notifications;

use App\Traits\AddressTrait;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class ItemStatusNotification extends Notification implements ShouldQueue
{
    use Queueable, AddressTrait;

    public $items;
    public $notifyBy;
    public $auth;
    public $order;

    /**
     * Create a new notification instance.
     *
     * @param $items
     * @param $order
     * @param array $notifyBy
     */
    public function __construct($items, $order, $notifyBy = ['database', 'mail'])
    {
        $this->items = $items;
        $this->notifyBy = $notifyBy;
        $this->order = $order;
        $this->auth = auth()->user();
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return $this->notifyBy;
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->view('email.item.item_status',
                        [
                            'items' => $this->items,
                            'user' => $notifiable,
                            'order' => $this->order,
                            'address' => $this->addressDecider(optional($this->order->address->country)->country_code)
                        ])
                    ->subject('Your ordered items status has been updated');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            "message" => "Your items status has been updated. Check it out in your order details",
            "name" => $notifiable->name,
            "url" => "/user/" . $notifiable->id . "/order-details/" . $this->order->id,
            "url_title" => "View in order",
            "type" => "notification-" . strtolower( $this->order->lastStatus->alias ),
            "notify_by" => $this->auth->name,
        ];
    }

    public function broadcastOn()
    {
        return new PrivateChannel( 'App.User.' . $this->order->user_id );
    }

}
