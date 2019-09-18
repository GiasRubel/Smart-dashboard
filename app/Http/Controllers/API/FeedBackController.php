<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\FeedBackResource;
use App\Models\FeedBack;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FeedBackController extends Controller
{
    public function index(){
        return FeedBackResource::collection(FeedBack::active()->latest()->get());
    }


    public function storeFeedBack(Request $request, FeedBack $feedBack) {
        $request->validate([
            'message' => 'required|min:10'
        ]);
        $feedBack->user_id = auth()->id();
        $feedBack->message = $request->message;
        $feedBack->save();
        return response()->json(['status' => true, 'message' => trans('api.feedback_added')]);
    }
}
