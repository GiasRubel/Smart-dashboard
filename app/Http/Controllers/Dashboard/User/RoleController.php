<?php

namespace App\Http\Controllers\Dashboard\User;

use App\Http\Requests\Dashboard\Rolerequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        return Role::with('users')
            ->filter($this->filter)
            ->orderby('id', 'desc')->paginate($request->per_page);
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Rolerequest $request)
    {

        $role = new Role;

        $role->title = $request->title;
        $role->alias = $request->alias;
        $role->save();
        return response()->json(['success' => 'Data Inserted']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
//        return Role::where('id', $id)->findOrFail()->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Role::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Rolerequest $request, $id)
    {
        $roles = Role::find($id);
        $roles->title = $request->title;
        $roles->alias = $request->alias;

        $roles->save();

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
        $role = Role::find($id);
        $role->users()->whereIn('id', $ids)->detach();
        $role->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data Deleted']);
    }


}
