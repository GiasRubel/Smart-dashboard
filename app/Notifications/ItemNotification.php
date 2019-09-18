<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ItemNotification extends Notification implements ShouldQueue
{
    use Queueable;
    private $items;
    private $notifyBy;
    public $tries = 3;
    public $timeout = 30;
    public $auth;


    /**
     * Create a new notification instance.
     * @param $items
     * @param $notifyBy
     * @return void
     */
    public function __construct($items, $notifyBy)
    {
        $this->items = $items;
        $this->notifyBy = $notifyBy;
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
        if (isset( $this->items->title )) {
            return (new MailMessage)->view( 'email.item.item',
                [
                    'items' => $this->items,
                    'user' => $notifiable
                ])
                ->subject( "Hey, This is the product status you've been waiting for!!!" );
        }

        return (new MailMessage)->view( 'email.item.items', [
            'items' => $this->items,
            'user' => $notifiable
        ])->subject( "Hey, This is the product status you've been waiting for!!!" );
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
            "message" => "Due to some unavoidable circumstances, your ordered product price has been changed. Please check your cart.",
            "name" => $notifiable->name,
            "url" => "/cart",
            "url_title" => "Check your cart",
            "type" => "notification-item",
            "notify_by" => $this->auth->name,
        ];
    }
}
