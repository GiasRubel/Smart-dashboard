<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\Dashboard\ProductMeasurmentRequest;
use App\Models\ProductMeasurement;
use App\Models\Store;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ProductMeasurmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {

        return ProductMeasurement::with('users', 'stores','item')
            ->filter($this->filter)
            ->orderby('id', 'desc')
            ->paginate(request()->per_page);
    }

    public function measurment_approved()
    {
        return ProductMeasurement::with('users', 'stores','item')
            ->where('approved_by', '!=', 0 )
            ->filter($this->filter)
            ->orderby('id', 'desc')
            ->paginate(request()->per_page);
    }


    public function measurment_notapproved()
    {
        return ProductMeasurement::with('users', 'stores','item')
            ->where('approved_by', '=', 0 )
            ->filter($this->filter)
            ->orderby('id', 'desc')
            ->paginate(request()->per_page);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Store::pluck('store_name', 'id');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductMeasurmentRequest $request)
    {

        if (Auth::user()) {
            $user_id = Auth::user()->id;
        }

//        $request->approved == '' ? $request->approved = 0 : $request->approved = 1;

        ProductMeasurement::create($request->all() + ['approved_by' => $user_id]);

        return response()->json(['success' => 'Data Stored']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return ProductMeasurement::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductMeasurmentRequest $request, $id)
    {

        $measurment = ProductMeasurement::find($id);

        $measurment->fill($request->all())->save();

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

        $measurment = ProductMeasurement::find($id);

        $measurment->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data Deleted']);
    }
}
