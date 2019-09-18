<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;

class ConsoleController extends Controller
{
    public function cache_clear()
    {
        $cache = Artisan::call('cache:clear', []);
        return 'cache cleared';
    }

    public function config_clear()
    {
        $config = Artisan::call('config:clear');
        return 'config cleared';
    }

}
