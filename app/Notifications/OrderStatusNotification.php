<?php

namespace App\Notifications;

use App\Models\Order;
use App\Models\User;
use App\Traits\AddressTrait;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class OrderStatusNotification extends Notification implements ShouldBroadcast, ShouldQueue
{
    use Queueable, AddressTrait;
    public $notifyBy;
    public $order;
    public $status;
    public $auth;
    public $tries = 3;
    public $timeout = 30;

    /**
     * Create a new notification instance.
     *
     * @param Order $order
     * @param array $notifyBy
     */
    //public function __construct(Order $order, Array $notifyBy = ['database', 'broadcast'])
    public function __construct(Order $order, Array $notifyBy = ['database', 'broadcast'])
    {
        $this->order = $order;
        $this->notifyBy = $notifyBy;
        $this->auth = auth()->user();
        $this->status = $this->order->lastStatus;
    }

    /**
     * Get the notification's delivery channels.ss
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        $this->user = $notifiable;
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
        $statusOrder = collect($this->order->status);
        $lastStatus = $statusOrder->firstWhere('id', '=', $this->order->last_status_id);
        if ($this->status->alias === 'confirm'){
            $mail = (new MailMessage)->view( 'email.order.orderconfirm', [
                "user" => $notifiable,
                "order" => $this->order,
                'status' => $this->status,
                'address' => $this->addressDecider(optional($this->order->address->country)->country_code)
            ] )
                ->subject( "Hey " . $notifiable->name . ", This is the Order status of your product you've been waiting for!!!" );
            if (optional($lastStatus->pivot)->description != ""){
                $description = json_decode(optional($lastStatus->pivot)->description);
                if (isset($description->image)){
                    $mail->attach(public_path(\Storage::url($description->image)));
                }
            }
            return $mail;
        }
        else{
            $mail = (new MailMessage)->view( 'email.order.orderStatus',
                [
                    "user" => $notifiable,
                    "order" => $this->order,
                    'status' => $this->status,
                    'address' => $this->addressDecider(optional($this->order->address->country)->country_code)
                ] )
                ->subject( "Hey " . $notifiable->name . ", This is the Order status of your product you've been waiting for!!!" );
            if (optional($lastStatus->pivot)->description != ""){
                $description = json_decode(optional($lastStatus->pivot)->description);
                if (isset($description->image)){
                    $mail->attach(public_path(\Storage::url($description->image)));
                }
            }

            return $mail;
        }

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
            "message" => "Your order has been " . $this->status->title,
            "name" => $notifiable->name,
            "url" => "/user/" . $notifiable->id . "/order-details/" . $this->order->id,
            "url_title" => "Check your order details",
            "type" => "notification-" . strtolower( $this->status->alias ),
            "notify_by" => $this->auth->name,
            "order_number"=>$this->order->order_number
        ];
    }

    public function broadcastOn()
    {
        return new PrivateChannel( 'App.User.' . $this->order->user_id );
    }

}
