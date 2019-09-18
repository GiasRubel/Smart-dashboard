<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class NotificationController extends APIController
{
    /**
     * Auth user all notification get.
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function countUnreadNotifications()
    {
        $notifications = Auth::user()->unreadNotifications->count();
        return $this->showMessage( $notifications );
    }

    public function notifications()
    {
        $request = request();
        $notifications = Auth::user()->notifications();

        if ($request->read)
            $notifications = $notifications->whereNotNull( 'read_at' );
        if ($request->unread)
            $notifications = $notifications->whereNull( 'read_at' );

        $notifications->orderBy( 'created_at', $request->order ?? 'DESC' );

        $notifications = $notifications->paginate(15);

        return $this->pagination( $notifications );
    }

    /**
     * Auth user all seen notification list
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function read()
    {
        $reads = Auth::user()->readNotifications;
        return $this->showAll( $reads );
    }

    /**
     * Auth user un-read notifications
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function unRead()
    {
        $unReads = Auth::user()->unreadNotifications;
        return $this->showAll( $unReads );
    }

    /**
     * Notification details and mark as read.
     * @return \Illuminate\Http\JsonResponse
     */
    public function markAsRead()
    {
        $notification = Auth::user()->notifications()->whereId( request( 'id' ) )->first();
        $notification->markAsRead();
        return $this->showOne( $notification );
    }


    public function markAsUnRead()
    {
        $notification = Auth::user()->notifications()->whereId( request( 'id' ) )->first();
        $notification->markAsUnread();
        return $this->showMessage( "Successfully set this notification mark as un-read" );
    }

    public function markAsReadIds(Request $request)
    {
        $notifications = Auth::user()->notifications()->whereIn( 'id',  $request->ids )->get();
        $notifications->markAsRead();
        return $this->showMessage( "Successfully set mark as read" );
    }

    public function markAsUnReadIds(Request $request)
    {
        $notifications = Auth::user()->notifications()->whereIn( 'id', $request->ids )->get();
        $notifications->markAsUnRead();
        return $this->showMessage( "Successfully set mark as read" );
    }

    public function markAllAsRead()
    {
        auth()->user()->unreadNotifications->markAsRead();
        return $this->showMessage( "Successfully set all mark as read" );
    }

    public function markAllAsUnRead()
    {
        auth()->user()->readNotifications->markAsUnRead();
        return $this->showMessage( "Successfully set all mark as un-read" );
    }


}
