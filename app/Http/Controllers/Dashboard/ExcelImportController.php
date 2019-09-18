<?php

namespace App\Http\Controllers\Dashboard;

use App\Exports\ShipmentRateExport;
use App\Exports\StateExport;
use App\Imports\ProhibitedItemImport;
use App\Exports\ProhibitedItemExport;
use App\Imports\ShipmentRatesImport;
use App\Imports\StateImport;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class ExcelImportController extends Controller
{
    public function importExcel(Request $request)
    {

        if ($request->hasFile('file')) {
            Excel::import(new ShipmentRatesImport(), request()->file('file'));
            return response()->json(['success' => 'Data imported']);
        } else {
            return response()->json(['success' => 'Something Wrong']);
        }

    }

    public function import_excel_prohibited(Request $request)
    {
        if ($request->hasFile('file')) {
            Excel::import(new ProhibitedItemImport(), request()->file('file'));
            return response()->json(['success' => 'Data imported']);
        } else {
            return response()->json(['success' => 'Something Wrong']);
        }
    }

    public function export_prohibited()
    {
        return Excel::download(new ProhibitedItemExport(), 'prohibited.xlsx');
    }
    public function export_shipment()
    {
        return Excel::download(new ShipmentRateExport(), 'shipping_rate.xlsx');
    }

    public function export_states()
    {
        return Excel::download(new StateExport(), 'states.xlsx');
    }

    public function import_excel_states(Request $request)
    {
        if ($request->hasFile('file')) {
            Excel::import(new StateImport(), request()->file('file'));
            return response()->json(['success' => 'Data imported']);
        } else {
            return response()->json(['success' => 'Something Wrong']);
        }

    }
}
