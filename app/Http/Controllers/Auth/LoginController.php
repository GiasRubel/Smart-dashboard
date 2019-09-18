<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\UserTrait;
use App\Rules\IsAdmin;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers, UserTrait;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/dashboard';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware( 'guest' )->except( 'logout' );
    }

    protected function validateLogin(Request $request)
    {
        $requestKey = $this->username();

        return $request->validate( [
            $requestKey => ['required', 'string', new IsAdmin],
            'password' => ['required','string'],
        ] );

    }

    public function authenticated(Request $request, $user)
    {
        //$this->isBrowserVerify($request, $user);

        if ($request->ajax() || $request->pjax()) {

            return response()->json( ['message' => 'User Successfully Logged in', 'result' => $user], 200 );
        }

        if ($user->is_admin === true) {
            return redirect( '/dashboard' );
        }

        return redirect( config('configuration.front_end_url') );
    }

    public function reVerifyBrowser($user, $browser)
    {
        $this->createTokenAndSendMail( $user, $browser );

        return response()->json( ['message' => 'please check your mail, new verification link was sent'] );
    }

    public function username()
    {
        if (filter_var( request( 'emailOrMobile' ), FILTER_VALIDATE_EMAIL )) {
            request()->merge( ['email' => request( 'emailOrMobile' )] );
            return 'email';
        }
        request()->merge( ['mobile' => request( 'emailOrMobile' )] );
        return 'mobile';
    }

}
