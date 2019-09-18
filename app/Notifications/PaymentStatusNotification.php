<?php

namespace App\Notifications;

use App\Mail\AdminOrderNotifyEmail;
use App\Traits\AddressTrait;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class PaymentStatusNotification extends Notification implements ShouldQueue
{
    use Queueable, AddressTrait;
    public $charge;
    public $order;
    public $gateWay;
    public $currency;
    public $gateWayCharge;
    public $tries = 3;
    public $timeout = 30;
    public $origin = '';


    /**
     * Create a new notification instance.
     *
     * @param $charge
     * @param $order
     * @param string $gateWay
     * @param $gateWayCharge
     */
    public function __construct($charge, $order, $gateWay = 'SSLCommerz', $gateWayCharge = 0)
    {
        $this->charge = $charge;
        $this->order = $order;
        $this->gateWay = $gateWay;
        $this->currency = $gateWay == 'SSLCommerz' ? 'BDT ' : '$';
        $this->gateWayCharge = $gateWayCharge;
        $this->origin = request()->header('origin');
        //\Log::debug(config("settings.send_new_order_email"));
        if (config("settings.send_new_order_email") == 'yes'){
            if (in_array( optional( $order->lastStatus )->alias, ['confirmed', 'cash-pending', 'pending'] ) || $gateWay == "STRIPE") {
                $admins = explode( ',', config( "settings.order_admin_notify_emails" ) );
                foreach ($admins as $admin) {
                    $job = (new AdminOrderNotifyEmail( $order, $order->user, trim( $admin ) ));
                    dispatch( $job );
                }
            }
        }
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        if (optional($this->order->lastStatus)->alias == 'partial-payment-complete'){
            $total_custom_amount = $this->order->items->sum("itemAdminOperationInfo.custom_amount");
            return (new MailMessage)
                ->view("email.order.partial_payment",
                [
                    'order' => $this->order, 'charge' => $this->charge,
                    'user' => $notifiable, 'currency' => $this->currency,
                    'gateWay' => $this->gateWay,
                    'gateWayCharge' => $this->gateWayCharge,
                    'total_custom_amount' => $total_custom_amount,
                    'convertion_rate' => ($this->gateWay == 'STRIPE' || $this->gateWay == 'authorize') ? 1 : explode('-', $this->charge["value_d"])[0],
                    'address' => $this->addressDecider(null, $this->origin)
                ])
                ->subject("Partial payment has been received by ShopNShipBD");
        }
        $subject = $this->gateWay == 'CASH' ? 'We\'re waiting for your cash payment to confirm the order' : 'Payment has been received by ShopNShipBD';
        if ($this->gateWay == 'STRIPE') {
            return (new MailMessage)
                ->view( "email.order.strip_payment",
                    ['order' => $this->order, 'charge' => $this->charge,
                        'user' => $notifiable, 'currency' => $this->currency,
                        'gateWay' => $this->gateWay,
                        'gateWayCharge' => $this->gateWayCharge,
                        'address' => $this->addressDecider(null, $this->origin)
                    ])
                ->subject( $subject );
        }
        if ($this->gateWay == 'authorize'){
            return (new MailMessage)
                ->view( "email.order.authorize",
                    ['order' => $this->order, 'charge' => $this->charge,
                        'user' => $notifiable, 'currency' => $this->currency,
                        'gateWay' => $this->gateWay,
                        'gateWayCharge' => $this->gateWayCharge,
                        'address' => $this->addressDecider(null, $this->origin)
                    ])
                ->subject( $subject );
        }
        return (new MailMessage)
            ->view( "email.order.payment",
                [
                    'order' => $this->order, 'charge' => $this->charge,
                    'user' => $notifiable, 'currency' => $this->currency,
                    'gateWay' => $this->gateWay,
                    'gateWayCharge' => $this->gateWayCharge,
                    'address' => $this->addressDecider(null, $this->origin)
                ])
            ->subject( $subject );
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed $notifiable
     * @return array
     */
    /*public function toArray($notifiable)
    {
        return [
            //
        ];
    }*/
}
