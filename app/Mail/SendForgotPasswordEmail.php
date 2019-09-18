<?php

namespace App\Mail;

use App\Traits\AddressTrait;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendForgotPasswordEmail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels, AddressTrait;
    public $user;
    public $redirect;
    public $tries = 3;
    public $timeout = 30;
    public $admins = [];
    public $origin = '';

    /**
     * Create a new message instance.
     *
     * @param $user
     * @param $redirect
     */
    public function __construct($user, $redirect)
    {
        $this->user = $user;
        $this->redirect = $redirect;
        $admins = explode(",", config("settings.order_admin_notify_emails"));
        $this->admins = array_map(function ($ar) { return trim($ar); }, $admins);
        $this->origin = request()->header('origin');
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $mail = $this->view( 'email.account.forgotpassword', [
            'user' => $this->user,
            'redirect' => $this->redirect,
            'address' => $this->addressDecider(null, $this->origin)
        ] )
            ->subject( "Reset password instructions" );
        /*if (count($this->admins) > 0){
            $mail->bcc($this->admins);
        }*/
        return $mail;
    }
}
