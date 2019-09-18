<?php

namespace App\Http\Controllers\Report;

use PDF;
use App\Http\Controllers\Controller;

class ReportController extends Controller
{
    protected $view='report';
    public function __construct()
    {
//        $this->middleware('auth:api');
    }

    public function getPDF($data)
    {

            $pdf = PDF::loadView($this->view, with(['data'=>$data]));
            return $pdf;
    }


}
