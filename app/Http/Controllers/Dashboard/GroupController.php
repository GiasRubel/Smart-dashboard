<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Group;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Group::latest('id')
            ->filter($this->filter)
            ->paginate(request()->per_page);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
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
           'title' => 'required|min:2'
        ]);

        $group = new Group();
        $group->title = $request->title;
        $group->save();
        return response()->json(['success' => 'Data Stored']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return void
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
        return Group::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required|min:2'
        ]);

        $group = Group::find($id);
        $group->title = $request->title;
        $group->save();
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

        $groups = Group::find($id);

        $groups->taxApplyGroup()->whereIn('id', $ids)->detach();
        $groups->users()->whereIn('id', $ids)->detach();

        $groups->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data Deleted']);
    }
}
