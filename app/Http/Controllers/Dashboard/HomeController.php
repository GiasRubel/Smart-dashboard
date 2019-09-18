<?php

namespace App\Http\Controllers\Dashboard;


class HomeController extends DashboardController
{
    public function index()
    {
        return view( 'dashboard.home' );
    }
}
