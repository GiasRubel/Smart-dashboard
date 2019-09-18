<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\Dashboard\ShipmentratesRequest;
use App\Models\Country;
use App\Models\District;
use App\Models\ShipmentRate;
use App\Models\State;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ShipmentrateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return ShipmentRate::with('country', 'state', 'district')
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
        return Country::pluck('title', 'id');
    }

    public function states($country)
    {
        return State::whereCountryId($country)->pluck('title','id');
    }

    /**
     * @param $state
     * @param $country
     * @return mixed
     */
    public function districts($state, $country = 0) {
        if ($country == 1){
            return District::whereCountryId($state)->get();
        }
        return District::whereStateId($state)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ShipmentratesRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ShipmentratesRequest $request)
    {
        ShipmentRate::create($request->all());

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
        return ShipmentRate::with('country','state')->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return ShipmentRate::with('country', 'state')->find($id);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(ShipmentratesRequest $request, $id)
    {
        $shipment = ShipmentRate::find($id);
        $shipment->fill($request->all())->save();

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

        $shipment = ShipmentRate::find($id);

        $shipment->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data Deleted']);
    }


}
