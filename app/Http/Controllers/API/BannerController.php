<?php

namespace App\Http\Controllers\API;

use App\Models\Banner;
use Carbon\Carbon;
use App\Http\Controllers\Controller;

class BannerController extends Controller
{
    /**
     * @return mixed
     */
    public function index()
    {
        $current_time = Carbon::now();
        $result = Banner::where(function ($query) use ($current_time){
                $query->where([
                    ['status', '=', 1],
                    ['activated_at', '<=', $current_time],
                    ['expire_at', '>=', $current_time]
                ])->orWhere([['status', '=', 1], ['default_img', '=', 1]]);
            })
            ->whereHas('country', function ($query){
                $query->where("domain_url", \request()->header('origin'));
            })
            ->groupBy('type')
            ->get();
        return $result;
    }
}
