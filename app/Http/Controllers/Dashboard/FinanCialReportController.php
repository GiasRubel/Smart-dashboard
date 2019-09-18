<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FinanCialReportController extends Controller
{
    public function index($status = '') {
        $orders = Order::with('lastStatus')->whereHas('lastStatus', function ($query) use($status) {
            $query->whereNotIn('alias', ['pending', 'cash-pending', 'review-complete', 'pending-for-review', 'cancel']);
        })->get();
        $totalGateChargeAmount = 0;
        foreach ($orders as $key => $order){
            $totalGateChargeAmount += $order->totalGateWayChargeAmount();
        }
        $data["totalGateChargeAmount"] = $totalGateChargeAmount;
        $orders = collect($orders);
        $data["totalOrder"] = count($orders);
        $data["totalOrderCost"] = $orders->sum("master_price");
        $data["totalShippingCost"] = $orders->sum("shipping_cost");
        $data["totalProductCost"] = $orders->sum("total_price");
        $data["totalGiftCost"] = $orders->sum("total_gift");
        $data["totalInsuranceCost"] = $orders->sum("total_insurance");
        $data["totalServiceChargeCost"] = $orders->sum('service_charge');

        return response()->json(["report" => $data]);
    }
    public function showPdf(){
        $result = $this->index()->getOriginalContent();
        \PDF::setOptions( ['dpi' => 150, 'defaultFont' => 'sans-serif'] );
        return $pdf = \PDF::loadView( 'dashboard.invoice.financial_report', ["report" => $result["report"]] )->stream( 'financial.pdf' );
    }
}
