<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\User\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends APIController
{
    public function index()
    {
        $user = User::with('addresses', 'defaultAddress.country', 'defaultAddress.state')->where('id', '=', \Auth::id())->first();
        return new UserResource($user);
    }

    public function update(Request $request){
        $request->validate([
            'name' => 'nullable|required',
            'mobile' => 'nullable|min:9|max:14|unique:users,mobile,'.\Auth::id()
        ]);
        $user = User::find(\Auth::id());
        $user->name = $request->name;
        $user->mobile = $request->mobile;
        $user->save();
        return response()->json(['status' => true, 'message' => 'Profile updated', 'user' => $user]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function changeProfilePicture(Request $request){
        $request->validate([
            'image' => 'required|mimes:jpeg,bmp,png,jpg'
        ]);
        $image = $request->image;
        if ($image){
            $extension = $image->getClientOriginalExtension();
            $image->storeAs('public/avatars', auth()->id().".".$extension);
            $user = User::find(auth()->id());
            $user->image = $extension;
            $user->save();
            return response()->json([
                'status' => true,
                'message' => trans('api.imageChanged'),
                'image' => \Storage::url('public/avatars/'.auth()->id().".".$extension),
            ]);
        }else{
            return response()->json(['status' => false, 'message' => trans('api.somethingWentWrong')]);
        }

    }

}
