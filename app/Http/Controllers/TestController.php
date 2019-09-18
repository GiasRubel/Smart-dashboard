<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class TestController extends Controller
{
    use \App\Traits\OAC;
    public function index(){
        $result = $this->currencyRate("BDT")->getData();
        $result = $this->currencyConverter($result->value, 400);
        return $this->gatewayCharge('sslCommerz', $result);
    }
}
