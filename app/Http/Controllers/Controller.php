<?php

namespace App\Http\Controllers;

use App\Filters\DataFilter;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public $filter;

    public function __construct(DataFilter $dataFilter)
    {
        $this->filter = $dataFilter;
    }

    public function getCookie($name)
    {
        $cookie = request()->header()['cookie'][0];
        $exploded = array_map(function ($el){
            $array = explode('=', $el);
            return [
                ltrim($array[0], ' ') => $array[1]
            ];
        }, explode(';', $cookie));

        foreach ($exploded as $key => $cookie){
            if (isset($cookie[$name])){
                return $cookie[$name];
            }
        }
        return null;

    }
}
