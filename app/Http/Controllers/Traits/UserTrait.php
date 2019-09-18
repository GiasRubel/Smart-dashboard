<?php

namespace App\Http\Controllers\Traits;

use App\Events\BrowserVerifyEvent;
use App\Events\UserRegistration;
use App\Events\UserVerify;
use App\Mail\SendForgotPasswordEmail;
use App\Models\BrowserVerify;
use App\Models\User;
use App\Models\VerifyUser;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

trait UserTrait
{
    public function isBrowserVerify($request, $user, $verify = false, $sendMail = true)
    {
        if (!$user instanceof User) {
            $user = User::find( $user['id'] );
        }

        $browser = $user->browsers()->whereBrowserId( $request->browser_id )->first();
        if (empty( $browser )) {
            $browser = BrowserVerify::create( [
                'browser_id' => $request->browser_id,
                'user_id' => $user->id,
                'is_verify' => $verify
            ] );
        }
        if ($browser && !$browser->is_verify && $sendMail) {
            $this->createTokenAndSendMail( $user, $browser );
        }

        return $browser;
    }

    public function createTokenAndSendMail($user, $browser = null, $type = null, $redirect = null)
    {
        if (!$user instanceof User) {
            $user = User::find( $user );
            $userVerify = $user->verifyUser()->orderBy( 'id', 'desc' )->first();

            if ($userVerify) {
                VerifyUser::destroy( $userVerify->id );
            }
        }

        if (!$browser instanceof BrowserVerify) {
            $browser = BrowserVerify::find( $browser );
        }

        VerifyUser::create( [
            'user_id' => $user->id,
            'token' => str_random( 50 ),
            'expire_at' => Carbon::now()->addMinute( config( 'settings.expire_time' ) ),
        ] );

        if ($browser instanceof BrowserVerify || !$browser instanceof BrowserVerify && !is_null( $browser )) {
            event( new BrowserVerifyEvent( $browser, $user ) );
        } elseif ($type == 'forgotpassword') {
            Mail::to( $user->email )->send( (new SendForgotPasswordEmail( $user, $redirect ))->onQueue("high") );

        } elseif ($type == 'reSendEmail') {
            event( new UserVerify( $user ) );
        } else {

            event( new UserRegistration( $user ) );
        }

    }

    public function verifyUserBrowser($token, $user, $browser)
    {

        $token = VerifyUser::where( 'token', $token )->first();
        if (!$browser instanceof BrowserVerify) {
            $browser = BrowserVerify::find( $browser );
        }
        if (!$token) {
            $this->createTokenAndSendMail( $user, $browser );
        }
        if (isset( $token ) && $token->expire_at >= Carbon::now()) {
            if (!$browser->is_verify) {
                $browser->is_verify = true;
                $browser->save();
                $token->verified_at = Carbon::now();
                $token->save();
            } else {
                return response()->json( ['message' => __( 'account.login.browser_verified' ), 'is_browser_verify' => true], 200 );
            }

            return response()->json( ['message' => __( 'account.login.browser_verified' ), 'is_browser_verify' => true], 200 );
        } elseif (!$browser->is_verify) {
            return response()->json( ['message' => __( 'account.token_expired' ), 'resend' => route( 'user.verify.browser.resend', ['user' => $user, 'browser' => $browser] )] );
        } else {

            return response()->json( ['message' => __( 'account.login.browser_verified' ), 'is_browser_verify' => true], 200 );
        }

    }

    public function verifyUser()
    {
        $token = request()->token;
        $token = VerifyUser::where( 'token', $token )->first();
        if (!$token) {
            return redirect( config('configuration.front_end_url'));
        }
        $user = $token->user;
        if (isset( $token ) && $token->expire_at >= Carbon::now()) {
            if (!$user->is_email_verify) {
                $user->is_email_verify = true;
                $user->save();
                $token->verified_at = Carbon::now();
                $token->save();
                BrowserVerify::where( 'user_id', $user->id )->update( ['is_verify' => true] );
            } else {
                return response()->json( ['message' => __( 'account.login.email_verified' ), 'is_email_verify' => true], 200 );
            }
            return response()->json( ['message' => __( 'account.login.email_verified' ), 'is_email_verify' => true], 200 );
        } elseif (!$user->is_email_verify) {
            return response()->json( ['message' => __( 'account.token_expired' ), 'resend' => route( 'user.verify.resend', ['user' => $user] )] );
        } else {

            return response()->json( ['message' => __( 'account.login.email_verified' ), 'is_email_verify' => true], 200 );
        }
    }

    public function reVerifyUser($user)
    {
        $this->createTokenAndSendMail( $user, null, 'reSendEmail' );
        return response()->json( ['message' => __( 'account.login.resend_verify_email' )] );
    }

    public function userData(User $user)
    {
        $success['token'] = $user->createToken( 'Access Token' )->accessToken;
        $success['id'] = $user->id;
        $success['email'] = $user->email;
        $success['name'] = $user->name;
        $success['mobile'] = $user->mobile;
        $success['is_email_verify'] = $user->is_email_verify;

        return $success;
    }
}
