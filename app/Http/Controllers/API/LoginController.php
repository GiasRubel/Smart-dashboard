<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Traits\UserTrait;
use App\Http\Requests\API\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends APIController
{

    use UserTrait;

    public function login(LoginRequest $request)
    {
        $user = User::whereEmail( $request->email )->first();

        if (!$user) {
            return response()->json( ['message' => __( 'account.login.user_not_register' )], 401 );
        }

        if (!Auth::attempt( ['email' => $request->email, 'password' => $request->password] )) {
            return response()->json( ['message' => __( 'account.login.not_match' )], 401 );
        }
        $userInfo = $this->userData( $request->user() );

        $userInfo['is_browser_verify'] = 0;

        if (Hash::check( $request->password, $user->password ) && !$user->is_email_verify) {
            return response()->json( ['message' => __( 'account.login.notify_email_verify_first' ),
                'resend' => route( 'user.verify.resend', $user ),
                'result' => $userInfo], 200 );
        }
        $isbrowserverify = $this->isBrowserVerify( $request, $userInfo );

        if ($isbrowserverify && $isbrowserverify->is_verify) {
            $userInfo['is_browser_verify'] = $isbrowserverify->is_verify;
        } else {
            return response()->json( ['message' => __( 'account.login.notify_browser_first' ), 'result' => $userInfo], 200 );
        }

        return response()->json( ['message' => __( 'account.login.login_success' ), 'result' => $userInfo], 200 );

    }

}
