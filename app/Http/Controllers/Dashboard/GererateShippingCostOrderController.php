<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GererateShippingCostOrderController extends Controller
{
    public function userShippingCostOrder($user_id) {
        $orders = Order::with('shippingOrder')
            ->where('user_id', '=', $user_id)
            ->whereHas('shippingOrder', function ($query){
                $query->whereNull('order_id')
                    ->whereNull('status');
            })->get();
        return $orders;
    }
}
