<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\Dashboard\TaxZoneRatesRequest;
use App\Models\TaxZoneRate;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TaxZoneRateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       return TaxZoneRate::with('country','state')
           ->filter($this->filter)
           ->orderby('id', 'desc')
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
    public function store(TaxZoneRatesRequest $request)
    {

        TaxZoneRate::create($request->all());

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
        return TaxZoneRate::with('country', 'state')->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TaxZoneRatesRequest $request, $id)
    {
        $taxzone = TaxZoneRate::find($id);
        $taxzone->fill($request->all())->save();

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

        $taxzone = TaxZoneRate::find($id);

        $taxzone->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data Deleted']);
    }
}
