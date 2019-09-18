<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class OrderCustomNotification extends Notification implements ShouldQueue
{
    use Queueable;
    private $data;
    private $notifyBy;
    public $tries = 3;
    public $timeout = 30;
    public $auth;


    /**
     * Create a new notification instance.
     *
     * @param $data
     * @param $notifyBy
     */
    public function __construct($data, $notifyBy)
    {
        $this->data = $data;
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
        if (isset( $this->data["cc"] ))
            return (new MailMessage)
                ->bcc( explode( ',', $this->data["cc"] ) )
                ->view( 'email.order.custom', [
                    'data' => $this->data,
                    'user' => $notifiable
                ])->subject( $this->data["title"] );

        return (new MailMessage)
            ->view( 'email.order.custom',
                [
                    'data' => $this->data,
                    'user' => $notifiable
                ] )
            ->subject( $this->data["title"] );

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
            "message" => $this->data["title"],
            "name" => $notifiable->name,
            "notify_by" => $this->auth->name,
        ];
    }
}
