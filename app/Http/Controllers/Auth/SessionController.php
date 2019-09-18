<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\SessionModel;

class SessionController extends Controller
{
    public function getSession(Request $request, SessionModel $sessionModel)
    {
        $base = uniqid();
        $sessionModel->id = $base;
        $sessionModel->ip_address = $request->ip();
        $sessionModel->user_agent = $request->userAgent();
        $sessionModel->user_id = auth()->guard( 'api' )->id() ? auth()->guard( 'api' )->id() : '';
        $sessionModel->last_activity = 'session generated';
        $sessionModel->save();
        return response()->json( ['status' => true, 'session_id' => $base, 'user_id' => $sessionModel->user_id] );
    }

    public function checkSessionIsExists($session_id)
    {
        return response()->json(['session' => SessionModel::whereId( $session_id )->exists()]);
    }
}
