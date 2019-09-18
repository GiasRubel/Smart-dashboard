<?php

namespace App\Exports;

use App\Models\ProhibitedItem;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ProhibitedItemExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return ProhibitedItem::all();
    }

    public function headings(): array
    {
        return [
            '#',
            'Title',
            'Type',
        ];
    }
}
