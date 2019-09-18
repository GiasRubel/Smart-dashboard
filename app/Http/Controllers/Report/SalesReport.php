<?php

namespace App\Http\Controllers\Report;

class SalesReport extends ReportController
{

    public function sales()
    {
        $this->view = 'report/layout/sales/sales';
        $data = [
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
            ['item_from' => 'amazon', 'sku' => 'A006Z598', 'qty' => 2, 'rate' => 30, 'amount' => 35],
        ];
        $pdf = $this->getPDF($data);
        return $pdf->stream();
    }
}
