<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserRegistration;
use App\Http\Controllers\Traits\UserTrait;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Models\VerifyUser;
use Carbon\Carbon;
use Hamcrest\Core\Every;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers, UserTrait;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    //protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'mobile' => 'nullable|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'mobile' => $data['mobile'] ?? null,
            'password' => Hash::make($data['password']),
        ]);

        $this->createTokenAndSendMail($user);
        return $user;
    }

    protected function registered(Request $request, $user)
    {

        if ($request->ajax() || $request->pjax()) {
            return response()->json(['message' => 'User created successfully', 'result' => $user], 201);
        }
        if ($user->is_admin === true) {
            redirect('/dashboard');
        }
        return redirect(config('configuration.front_end_url'));
    }




}
