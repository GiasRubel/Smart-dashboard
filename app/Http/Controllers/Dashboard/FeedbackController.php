<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\FeedBack;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FeedbackController extends Controller
{
    public function index() {
        return FeedBack::with('user')->paginate(20);
    }

    public function destroy($id) {
        try{
            $feedback = FeedBack::findOrFail($id);
        }catch (ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => "Feedback not found"]);
        }
        if ($feedback->delete()){
            return response()->json(['status' => true, 'message' => trans('api.feedback_deleted')]);
        }
        return response()->json(['status' => false, 'message' => trans('api.feedback_deleted_failed')]);
    }

    public function changeStatus(Request $request, $id) {
        try{
            $feedback = FeedBack::findOrFail($id);
        }catch (ModelNotFoundException $exception){
            return response()->json(['status' => false, 'message' => "Feedback not found"]);
        }
        $feedback->status = $request->stutus;
        $feedback->save();
        return response()->json(['status' => true, 'message' => "Feedback status updated"]);
    }
}
