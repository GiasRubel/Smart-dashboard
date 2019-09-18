<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\Dashboard\StatusRequest;
use App\Models\Status;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param Request $request
     * @param bool $page
     * @return Status[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index(Request $request, $page = false)
    {
        if($page){
            return Status::all();
        }
        return Status::orderby('id', 'desc')
            ->filter($this->filter)
            ->paginate(request()->per_page);
    }

    /**
     * Show the form for creating a new resource.
     *
     *
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     *
     * @param StatusRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StatusRequest $request)
    {
        Status::create($request->all());
        return response()->json(['success' => 'Data Stored']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     */
    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        return Status::with('orders')->find($id);
    }

    public function update(StatusRequest $request, $id)
    {
        $status = Status::find($id);
        $status->fill($request->all())->save();

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

       $status = Status::find($id);

       $status->orders()->whereIn('id', $ids)->detach();

       $status->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data Deleted']);
    }
}
