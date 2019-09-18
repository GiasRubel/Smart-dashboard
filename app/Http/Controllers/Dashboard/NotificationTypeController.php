<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\NotificationType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NotificationTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return NotificationType::orderby('id', 'desc')
            ->filter($this->filter)
            ->paginate($request->per_page);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'type' => 'required'
        ],[
            'title.required' => 'Notification Type Name Required',
        ]);
        NotificationType::create($request->all());
        return response()->json(['success' => 'Data Stored']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return NotificationType::find($id);
}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required',
            'type' => 'required'
        ],[
            'title.required' => 'Notification Type Name Required',
        ]);
        $notiType = NotificationType::find($id);
        $notiType->fill($request->all())->save();

        return response()->json(['success' => 'Data Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ids = explode(",", $id);

        $notification = NotificationType::find($id);

        $notification->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data Deleted']);

    }
}
