<?php

namespace App\Http\Controllers\Dashboard\User;

use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Requests\Dashboard\UserRequest;
use App\Models\Address;
use App\Models\BrowserVerify;
use App\Models\User;
use App\Models\Role;
use App\Notifications\OrderCustomNotification;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends DashboardController
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        return User::with('roles')
            ->orderBy('id', 'DESC')
            ->filter($this->filter)
            ->paginate(request()->per_page);
    }

    public function byAdmin(Request $request)
    {
        return User::with('roles')
            ->where('is_admin',1)
            ->filter($this->filter)
            ->orderBy('id','DESC')
            ->paginate($request->per_page);

    }

    public function byMember(Request $request)
    {
        return User::with('roles')
            ->where('is_admin',0)
            ->where('is_email_verify',1)
            ->filter($this->filter)
            ->orderBy('id', 'DESC')
            ->paginate($request->per_page);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Role[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function create()
    {
      return  Role::with('users')->get();
    }

    public function getUser($user = ''){
        $users = User::when($user, function ($query) use ($user){
            $query->where('name', 'like', "%{$user}%")->orWhere('email', 'like', "%{$user}%");
        })->get();
        if ($user == 'user'){
            $users = User::latest('id')->limit(10)->get();
        }
        return $users;
    }

    public function getUserAddress($user) {
        return Address::where('user_id', $user)->get();
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
     $this->validate($request, [
            'name'     => 'required|min:2',
            'email'    => "required|email|unique:users,email",
            'password' => 'required|min:3',

        ]);

        $roles =  $request->role;

        foreach($roles as $role){
            $new[] =  $role["id"];
        }
        $user = new User;

        $user->name = $request->name;
        $user->email = $request->email;
        $user->mobile = $request->phone;
        $user->password = Hash::make($request->password);
        $user->is_admin = $request->status;

        $user->save();
        $user->roles()->sync($new);

        return response()->json(['success' => 'Data Stored']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return User|User[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     */
    public function show($id)
    {
        return User::with('roles')->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return User|User[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     */
    public function edit($id)
    {
        return User::with('roles')->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserRequest $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $id)
    {

        $users = User::with('roles')->find($id);

        $users->name = $request->name;
        $users->email = $request->email;
        $users->mobile = $request->mobile;
        $users->is_admin = $request->is_admin;

        $users->save();
        $users->roles()->sync($request->roles);

        return response()->json(['success' => 'Data Updated']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ids = explode(",", $id);
        $users = User::find($id);
        $users->roles()->whereIn('id', $ids)->detach();
        $users->delete();

        return response()->json(['success' => 'Data Deleted']);
    }
    public function sendNotification($id, Request $request){
        $request->validate([
            'title' => 'required|min:5',
            'message' => 'required|min:5'
        ]);
        User::find($id)->notify((new OrderCustomNotification( $request->all(), ['mail'] ))->delay( 5 ));
        return response()->json(['status' => true, 'message' => 'User has been notified successfully']);
    }

    public function storeUserAddress(Request $request, Address $address)
    {
        $this->validate($request, [
            'country' => 'required|not_in:0',
            'district' => 'required|not_in:0',
            'user' => 'required|not_in:0',
            'full_name' => 'required|min:3',
            'address_1' => 'required|min:5',
            'phone_number' => 'required|min:9'
        ]);
        $address->fill([
            'user_id' => $request->user,
            'country_id' => $request->country,
            'state_id' => $request->state,
            'district_id' => $request->district,
            'full_name' => $request->full_name,
            'address' => $request->address_1,
            'city' => $request->city,
            'zip_code' => $request->zip_code,
            'phone' => [['phone' => $request->phone_number]],
            'address_2' => $request->address_2
        ]);
        $address->save();
        return response()->json(['status' => true, 'message' => trans('api.address_saved'), 'address_id' => $address->id]);
    }

    public function getUnverifiedBrowser($id){
        return BrowserVerify::whereUserId($id)->whereIsVerify(0)->latest()->limit(3)->get();
    }

    public function approveBrowser($id)
    {
        $obj = BrowserVerify::find($id);
        $obj->is_verify = 1;
        $obj->save();
        return response()->json([
            "status" => true,
            "message" => "Browser has been verified for user"
        ]);
    }

    public function approveEmail($id)
    {
        $user = User::find($id);
        $user->is_email_verify = 1;
        $user->save();
        return response()->json([
            "status" => true,
            "message" => "User has been verfied successfully"
        ]);
    }
}
