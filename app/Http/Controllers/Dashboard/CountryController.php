<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\Dashboard\CountryRequest;
use App\Models\Country;
use App\Models\Currency;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Country::with('states','currencies')
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
       return Currency::pluck('title', 'id');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CountryRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CountryRequest $request)
    {

        Country::create($request->all());

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
     * @return Country|Country[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    public function edit($id)
    {
        return Country::with('states')->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CountryRequest $request, $id)
    {
        $country = Country::find($id);
        $country->fill($request->all())->save();

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

        $country = Country::find($id);

        $country->address()->whereIn('id', $ids)->delete();

        $country->whereIn('id', $ids)->delete();

        return response()->json(['success' => 'Data Deleted']);
    }
}
