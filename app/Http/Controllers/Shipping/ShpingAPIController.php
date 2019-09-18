<?php

namespace App\Http\Controllers\Shipping;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Shipping\CountryResource;
use App\Http\Resources\Shipping\StateResource;
use App\Models\District;
use App\Models\Country;
use App\Models\State;
use App\Models\ShipmentRate;
use Illuminate\Support\Facades\DB;

class ShpingAPIController extends Controller
{
    /**
     * @return mixed
     * @throws \Exception
     * return country either from cache or from database
     */
    public function countries(){
        $countries = cache()->remember('countries', 1440, function (){
            return CountryResource::collection(Country::all());
        });
        return $countries;
    }

    /**
     * @param $id
     * @return mixed
     * @throws \Exception
     * used cache for 1 month
     * return states depends on country
     */
    public function states($id){
        $state = cache()->remember('states-'.$id, 1440, function () use($id){
            return StateResource::collection(State::where("country_id", $id)->get());
        });
        return $state;
    }

    public function districts($state){
        return District::whereCountryId($state)->get();
    }

    /**
     * @param Request $request
     * @return string
     * accept country state and range as parameter
     * @throws \Exception
     */
    public function cost(Request $request){
        $country = $request->country;
        $state = $request->state;
        $range = $request->range;
        $district = $request->district;
        return $this->getShippingCost($country, $range, $state, $district)->getContent();
    }

    /**
     * get shipping cost depends on $country $range and state
     * @param $country
     * @param $range
     * @param string $district
     * @param string $state
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function getShippingCost($country, $range, $state = '', $district = ''){
        $max = cache()->rememberForever('maximum_shipping_weight', function (){
            return DB::select("SELECT MAX(weight) as weight FROM(SELECT CAST(SUBSTRING_INDEX(`weight_range`, '-', -1) AS SIGNED) AS weight FROM `shipment_rates`) AS t1");
        });
        if (isset($max[0]) && $max[0]->weight < $range)
            return response()->json([
                "status" => false,
                'message' => trans('api.maxshipment')." ".$max[0]->weight." lbs",
                "excced" => true
            ]);

        $range = $this->rangeLimmiter($range);
        $result = cache()->remember("cost-".$country."-".$state."-".$district."-".$range, 1440, function () use($country, $state, $range, $district){

            //district section
            if ($district){
                $resultDistrict = collect(ShipmentRate::whereDistrict($district)->get());
                if (count($resultDistrict) > 0){
                    $result = $resultDistrict->first(function ($item, $key) use ($range){
                        $weight_range = explode('-', $item->weight_range);
                        $condition = false;
                        if (isset($weight_range[1])){
                            $condition = ($weight_range[0] <= $range && $weight_range[1] >= $range) ? true : false;
                        }
                        return $item->weight_range == $range || $condition;
                    });
                    if ($result){
                        return $result;
                    }
                    if ($range == 0.5){
                        $range = 1;
                        $result = $resultDistrict->first(function ($item, $key) use ($range){
                            $weight_range = explode('-', $item->weight_range);
                            $condition = false;
                            if (isset($weight_range[1])){
                                $condition = ($weight_range[0] <= $range && $weight_range[1] >= $range) ? true : false;
                            }
                            return $item->weight_range == $range || $condition;
                        });
                        if ($result){
                            return $result;
                        }
                    }
                }
            }

            //state section
            if (is_null($state)){
                $districtModel = District::find($district);
                $state = $districtModel->state_id;
                $countryResults = collect(ShipmentRate::whereStateId($state)->get());
                if (count($countryResults) > 0){
                    $result = $countryResults->first(function ($item, $key) use ($range){
                        $weight_range = explode('-', $item->weight_range);
                        $condition = false;
                        if (isset($weight_range[1])){
                            $condition = ($weight_range[0] <= $range && $weight_range[1] >= $range) ? true : false;
                        }
                        return $item->weight_range == $range || $condition;
                    });
                    if ($result)
                        return $result;

                    if ($range == 0.5){
                        $range = 1;
                        $result = $countryResults->first(function ($item, $key) use ($range){
                            $weight_range = explode('-', $item->weight_range);
                            $condition = false;
                            if (isset($weight_range[1])){
                                $condition = ($weight_range[0] <= $range && $weight_range[1] >= $range) ? true : false;
                            }
                            return $item->weight_range == $range || $condition;
                        });
                        if ($result)
                            return $result;
                    }
                }
            }

            //country section
            return ShipmentRate::where(function ($query) use($country) {
                $query->when($country != '', function ($query) use($country) {
                    $query->where("country_id", "=", $country)
                        ->orWhere("country_id", "=", '*')
                        ->orWhereHas("country", function ($query) use($country){
                            $query->where("title", '=', $country);
                        });
                });
            })->where(function ($query) use ($range) {
                $query->where("weight_range", "=", $range);
                $query->orWhere(function ($query) use($range) {
                    $query->where(\DB::raw("SUBSTRING_INDEX(`weight_range`, '-', 1) < ".($range + .01)), true)
                        ->where(\DB::raw("SUBSTRING_INDEX(`weight_range`, '-', -1) > ".($range-1)), true);
                });
            })->first();


        });
        if(isset($result->weight_range)){
            if (preg_match('/-/', $result->weight_range)){
                return response()->json(["status" => true, 'cost' => $range*$result->price]);
            }
            return response()->json(["status" => true, 'cost' => $result->price]);
        }
        cache()->forget("cost-".$country."-".$state."-".$district."-".$range);
        return response()->json(["status" => false, 'message' => trans('api.shippingNotFund')]);
    }

    public function rangeLimmiter($range) {
        if ($range > 0 && $range < 0.51){
            $range = 0.5;
        }
        if ($range > 0.50 && $range < 1.01){
            $range = 1;
        }
        return $range;
    }
}
