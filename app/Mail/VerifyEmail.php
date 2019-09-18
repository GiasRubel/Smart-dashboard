<?php

namespace App\Mail;

use App\Models\User;
use App\Traits\AddressTrait;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class VerifyEmail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels, AddressTrait;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $user;
    public $redirectUrl;
    public $tries = 3;
    public $timeout = 30;
    public $admins = [];
    public $origin = '';

    public function __construct(User $user)
    {
        $this->user = $user;
        $this->redirectUrl = request()->redirect ?? null;
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
        $token = $this->user->verifyUser()->orderBy( 'id', 'desc' )->first()->token;
        $browser = $this->user->browser_id;
        $mail = $this->view( 'email.account.emailverify', [
            'user' => $this->user,
            'token' => $token,
            'browser' => $browser,
            'redirect' => $this->redirectUrl,
            'address' => $this->addressDecider(null, $this->origin)
        ])->subject( "Please verify your email" );

        /*if (count($this->admins) > 0){
            $mail->bcc($this->admins);
        }*/
        return $mail;
    }
}
