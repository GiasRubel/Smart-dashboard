<?php

namespace App\Exports;

use App\models\state;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class StateExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return state::all();
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            '#',
            'Country',
            'Title',
        ];
    }
}
