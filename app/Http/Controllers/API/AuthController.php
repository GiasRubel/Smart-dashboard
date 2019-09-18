<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Traits\UserTrait;
use App\Models\BrowserVerify;
use App\Models\SocialProvider;
use App\Models\User;
use App\Models\VerifyUser;
use Carbon\Carbon;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Http\Request;
use App\Http\Requests\AuthRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Laravel\Socialite\Facades\Socialite;
use Mockery\Exception;

class AuthController extends APIController
{
    use UserTrait;

    /**
     * @param AuthRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signup(AuthRequest $request)
    {
        $user = new User( [
            'name' => $request->name,
            'email' => $request->email,
            'mobile' => $request->mobile,
            'password' => bcrypt( $request->password ),
        ] );
        $user->save();
        $nwBrowser = $this->isBrowserVerify( $request, $user, false, false );
        $this->createTokenAndSendMail( $user );

        $user = $this->userData( $user );
        $user['is_browser_verify'] = $nwBrowser->is_verify;

        return response()->json( ['message' => __( 'account.registration.notify_verify_email' ),
            'result' => $user], 201 );
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $user = User::where( 'email', '=', $request->email )->first();
        if (!$user) {
            return response()->json( ['message' => __( 'account.login.user_not_register' )], 401 );
        }
        if (!Auth::attempt( ['email' => $request->email, 'password' => $request->password] )) {
            return response()->json( ['message' => __( 'account.login.not_match' )], 401 );
        }

        if (Hash::check( $request->password, $user->password ) && !$user->is_email_verify) {
            return response()->json( ['message' => __( 'account.login.notify_email_verify_first' ), 'resend' => route( 'user.verify.resend' )], 401 );
        }


        $user = $this->userData( $request->user() );
        $isbrowserverify = $this->isBrowserVerify( $request, $user );
        if ($isbrowserverify) {
            $user['is_browser_verify'] = $isbrowserverify->is_verify;
        } else {
            $user['is_browser_verify'] = 0;
            return response()->json( ['message' => __( 'account.login.notify_browser_first' ), 'result' => $user], 200 );
        }
        return response()->json( ['message' => __( 'account.login.login_success' ), 'result' => $user], 200 );

    }

    /**
     * @param $provider
     * @return mixed
     */
    public function redirectToProvider($provider)
    {
        try {

            return Socialite::driver( $provider )->stateless()->redirect();

        } catch (Exception $e) {
            redirect( config('configuration.front_end_url') );
        }
    }

    /**
     * @param $provider
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     * @throws \Exception
     */
    public function handleCallback($provider)
    {
        try {
            $user = Socialite::driver( $provider )->stateless()->user();

            if ($user) {
                $userExistProvider = $this->checkProviderIsExists( $user );

                if (!$user->getEmail()) {

                    if (!$userExistProvider) {
                        cache( [$user->token => ['user' => $user, 'provider' => $provider]], now()->addMinutes( 4 ) );
                        return redirect(config('configuration.front_end_url'). '/email-not-found/' . $user->token );
                    }
                }

                $userexist = $this->findEmailIfExists( $user );

                if ($userExistProvider) {
                    return $this->getSocialAuthData( $userExistProvider );
                } elseif ($userexist && $userexist->id) {
                    return $this->getSocialAuthData( $userexist );
                } else {
                    $nwuser = $this->findOrCreateUser( $user );
                }


                if ($nwuser) {
                    $this->createProvider( $user, $provider, $nwuser );

                    return $this->getSocialAuthData( $nwuser );
                }

            }
        } catch (ClientException $e) {
            return response( ['message' => $e->getMessage()] );
        }
    }


    private function findEmailIfExists($social)
    {
        return User::whereEmail( $social->email )->first();
    }

    private function findOrCreateUser($social)
    {
        return User::create( [
            'name' => $social->name,
            'email' => $social->email,
        ] );
    }

    private function checkProviderIsExists($social)
    {
        $social = SocialProvider::whereProviderId( $social->id )->first();
        if ($social)
            return $social->user;
    }

    private function createProvider($social, $provider, $user)
    {
        return $user->socialProviders()->create( [
            'provider_id' => $social->id,
            'provider' => $provider,
        ] );
    }

    public function createUser($request, $social)
    {
        return User::create( [
            'name' => $social->name,
            'email' => $social->email ?? $request->email,
            'role_id' => $request->role_id
        ] );
    }

    /**
     * @param $user
     * @return \Illuminate\Http\RedirectResponse
     */
    private function getSocialAuthData($user)
    {
        $userInfo = $this->userData( $user );
        $userInfo['is_email_verify'] = 1;
        $userInfo['is_browser_verify'] = 1;
        $userInfo['message'] = 'Successfully logged In';
        $data = http_build_query( $userInfo, '', '&' );
        return redirect(config('configuration.front_end_url'). '/social/login' . '?' . $data );
    }

    /**
     * @param $user
     * @return mixed
     */
    public function userData($user)
    {
        if (!$user instanceof User)
            $user = User::find( $user );

        $success['token'] = $user->createToken( 'Access Token' )->accessToken;
        $success['is_available_to_create_password'] = $user->getAuthPassword() ? false : true;
        $success['id'] = $user->id;
        $success['email'] = $user->email;
        $success['name'] = $user->name;
        $success['mobile'] = $user->mobile;
        $success['is_email_verify'] = $user->is_email_verify;

        return $success;
    }

    public function loginWithEmailFromProvider(Request $request)
    {
        if (cache()->has( $request->token )) {

            $social = cache()->get( $request->token );
            $social['user']->email = $request->email;

            $nwuser = $this->findOrCreateUser( $social['user'] );

            if ($nwuser) {
                $this->createProvider( $social['user'], $social['provider'], $nwuser );

                $userInfo = $this->userData( $nwuser );
                $userInfo['is_email_verify'] = 1;
                $userInfo['is_browser_verify'] = 1;
                $userInfo['message'] = 'Successfully logged In';
                $data = http_build_query( $userInfo, '', '&' );

                return response()->json( $data );
            }
        } else
            return redirect( config('configuration.front_end_url') );
    }

    /**
     * change user password
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function changePassword(Request $request)
    {
        $request->validate( [
            'current_password' => 'required',
            'new_password' => 'required|confirmed'
        ] );
        $user = auth()->user();
        if (Hash::check( $request->current_password, $user->password )) {
//            User::where( 'id', $user->id )->update([
//                'password' => Hash::make( $request->new_password )
//            ]);
            $user = User::find( $user->id );
            $user->password = Hash::make( $request->new_password );
            $user->save();
            if (\auth()->guard( 'web' )->check())
                Auth::login( $user );
            return response()->json( ['status' => true, 'message' => __( 'account.password.reset.success' )], 200 );
        }
        return response()->json( ['status' => false, 'message' => __( 'account.password.reset.incorrect' )], 401 );
    }

    public function forgotPasswordSendMail(Request $request)
    {
        $user = User::where( 'email', $request->email )->first();
        if ($user) {
            $this->createTokenAndSendMail( $user, $browser = null, $type = 'forgotpassword', $request->redirect );
            return response()->json( ['message' => __( 'account.password.reset.send_email' )], 200 );
        }

        return response()->json( ['message' => __( 'account.login.user_not_register' )], 404 );

    }

    public function forgotPasswordVerify($token, $user)
    {
        $token = VerifyUser::where( 'token', $token )->first();
        if (!$token) {
            return redirect( config('configuration.front_end_url') );
        }
        $user = $token->user;
        if (isset( $token ) && $token->expire_at >= Carbon::now()) {
            return response()->json( ['message' => __( 'account.password.reset.repeat_send_email' ), 'result' => $user] );
        } else {
            $this->createTokenAndSendMail( $user, $browser = null, $type = 'forgotpassword', request()->redirect );

            return response()->json( ['message' => __( 'account.password.reset.resend_email' ), 'resend' => route( 'user.forgotpassword.verify', ['token' => $user->verifyUser()->orderBy( 'id', 'desc' )->first()->token, 'user' => $user->id] )] );
        }

        return $token;
    }


    /**
     * password reset from user
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Illuminate\Validation\ValidationException
     */
    public function newPassword(Request $request)
    {
        $this->validate( $request, [
            'email' => 'required|email',
            'password' => 'required|string|confirmed',
            'password_confirmation' => 'required|string',
            'token' => 'required|string',
            'user_id' => 'required'
        ] );

        $token = VerifyUser::where( 'token', $request->token )->first();
        if (isset( $token ) && $token->expire_at >= Carbon::now()) {
            $user = User::whereId( $request->user_id )->whereEmail( $request->email )->first();
            if ($user) {
                $browser = BrowserVerify::whereBrowserId( $request->browser_id )->first();
                if ($browser) {
                    $browser->update( ['is_verify' => true] );
                } else {
                    $browser = BrowserVerify::create( [
                        'browser_id' => $request->browser_id,
                        'user_id' => $user->id,
                        'is_verify' => true
                    ] );
                }
                $user->update( ['password' => bcrypt( $request->password )] );
                $user = $this->userData( $request->user_id );
                Auth::attempt( ['email' => $request->email, 'password' => $request->password] );

                if ($browser) {
                    $user['is_browser_verify'] = 1;
                } else {
                    $this->isBrowserVerify( $request, $user, true );
                }

                $token->delete();

                return response()->json( ['message' => __( 'account.password.changed.success' ), 'result' => $user], 200 );
            } else {
                return response()->json( ['message' => __( 'account.login.user_not_register' ),], 401 );
            }
        } else {
            $user = User::find( $request->user_id );
            return response()->json( ['message' => __( 'account.token_expired' ), 'resend' => route( 'user.forgotpassword.verify', ['token' => $user->verifyUser()->orderBy( 'id', 'desc' )->first()->token, 'user' => $user->id] )] );
        }

        return redirect( config('configuration.front_end_url') );
    }

    /**
     * creating password who had logged in with social provider
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createPassword(Request $request) {
        $request->validate([
            'password' => 'required|confirmed'
        ]);
        if (!auth('api')->user()->has('socialProviders') && auth()->user()->getAuthPassword())
            return response()->json(['status' => false, 'message' => trans('api.not_allowed_to_change')]);
        $user = User::find(auth('api')->id());
        $user->password = Hash::make($request->password);
        if($user->save())
            return response()->json(['status' => true, 'message' => trans('api.create_password_success')]);
        return response()->json(['status' => true, 'message' => trans('api.create_password_failed')]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json( ['message' => trans('account.login.logout')] );
    }

    public function user(Request $request)
    {
        return response()->json( $request->user() );
    }

    public function is_email_verify(Request $request)
    {
        if (!auth()->user()->is_email_verify) {
            return response()->json( ['message' => __( 'account.login.not_verify_email_login' )] );
        }

        return response()->json( ['message' => __( 'account.login.email_verified_login' ), 'result' => auth()->user()] );
    }

    public function isBrowserVerified(Request $request)
    {
        $browserVerify = 0;
        if ($request->browser_id) {
            $browser = BrowserVerify::whereBrowserId( $request->browser_id )->whereUserId( auth()->id() )->first();
            if ($browser->is_verify) {
                $browserVerify = $browser->is_verify;
                return response()->json( ['result' => ['is_browser_verify' => $browserVerify], 'message' => __( 'account.login.browser_verified_login' )] );
            }
        }
        return response()->json( ['result' => ['is_browser_verify' => $browserVerify], 'message' => __( 'account.login.not_verify_browser_login' )] );

    }
}
