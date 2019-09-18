<?php

namespace App\Exports;

use App\Models\ShipmentRate;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ShipmentRateExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return ShipmentRate::all();
    }

    public function headings(): array
    {
        return [
            '#',
            'Title',
            'Country_id',
            'State_id',
            'Weight_range',
            'Dimension',
            'Items',
            'Price',
            'Zip_code',
            'Product_type',
            'order',
            'district',
        ];
    }
}
