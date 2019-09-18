<?php

namespace App\Mail;

use App\Models\BrowserVerify;
use App\Traits\AddressTrait;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class BrowserVerifyEmail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels, AddressTrait;
    public $user;
    public $browser;
    public $redirectUrl;
    public $tries = 3;
    public $timeout = 30;
    public $admins = [];
    public $origin = '';


    /**
     * Create a new message instance.
     *
     * @param $browser
     * @param $user
     */
    public function __construct($browser, $user)
    {
        $this->browser = $browser;
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
        $mail =  $this->view( 'email.account.browserverify', [
            'browser' => $this->browser,
            'user' => $this->user,
            'token' => $token,
            'redirect' => $this->redirectUrl,
            'address' => $this->addressDecider(null, $this->origin)
        ])->subject( 'Please verify your browser' );
        /*if (count($this->admins) > 0){
            $mail->bcc($this->admins);
        }*/
        return $mail;

    }
}
