<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\AddressRequest;
use App\Models\Address;
use App\Models\Country;
use App\Models\State;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddressController extends APIController
{
    public function index()
    {
        $address = Address::where( 'user_id', Auth::id() )->with( 'country', 'state', 'district' )->get();

        return response()->json( ['message' => 'User address', 'result' => $address], 200 );
    }

    public function show($id)
    {
        $address = Address::with( 'country', 'state', 'district' )->where( [['id', '=', $id], ['user_id', '=', Auth::id()]] )->first();
        if ($address)
            return response()->json( ['message' => 'Address details ', 'result' => $address], 200 );

        return response()->json( ['message' => 'Something went wrong'], 400 );
    }

    public function getCountry()
    {
        $country = cache()->remember( 'country', 43200, function () {
            return $country = Country::all();
        } );
        return response()->json( ['message' => 'country list', 'result' => $country] );
    }

    public function getState()
    {
        $country = State::all();
        return response()->json( ['message' => 'country list', 'result' => $country] );
    }

    public function store(AddressRequest $request, Address $address)
    {
        $address->fill( [
            'user_id' => Auth::id(),
            'country_id' => $request->country_id,
            'state_id' => $request->state_id,
            'district_id' => $request->district_id,
            'full_name' => $request->full_name,
            'address' => $request->address,
            'city' => $request->city,
            'zip_code' => $request->zip_code,
            'phone' => $request->phones,
            'is_default' => $request->is_default ?? 0,
            'address_2' => $request->address_2
        ] );
        $address->save();
        $address = $address->with( ['country', 'state', 'district'] )->find( $address->id );
        return response()->json( ['message' => 'Address added successfully', 'result' => $address], 201 );
    }

    public function setDefault(Request $request)
    {
        if ($request->address_id && Address::where( 'is_default', true )->first()) {
            Address::where( 'user_id', auth()->id() )->where( 'is_default', true )->update( ['is_default' => false] );
        }
        $address = Address::with( 'country', 'state', 'district' )->find( $request->address_id );
        $address->is_default = true;
        $address->save();
        if ($address)
            return response()->json( ['message' => 'Default address changed successully', 'result' => $address] );
        return response()->json( ['message' => 'Something went wrong.'], 400 );

    }

    public function update(AddressRequest $request, $id)
    {
        try {
            $address = Address::with( 'country', 'state', 'district' )->findOrFail( $id );
        } catch (ModelNotFoundException $exception) {
            return response()->json( ['message' => 'Something went wrong.'], 400 );
        }
        $data = $request->except( ['phone'] ); //all data
        $address->fill( $data ); //fill all data
        $address->phone = $request->phones;
        $address->save(); //save to database
        if ($address) {
            return response()->json( ['message' => 'Address Changed Successfully.', 'result' => $address->where( 'id', $id )->with( 'country', 'state' )->first()], 200 );
        }
        return response()->json( ['message' => 'Something went wrong.'], 400 );

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(Request $request)
    {
        if ($request->id) {
            $address = Address::where( [['id', '=', $request->id], ['user_id', '=', Auth::id()]] )->first();
            $address = $address->delete();
            if ($address) {
                return response()->json( ['message' => 'Address deleted successfully'], 200 );
            }
        }
        return response()->json( ['message' => 'Something went wrong'], 400 );
    }

}
