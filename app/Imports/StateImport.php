<?php

namespace App\Imports;

use App\Models\State;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class StateImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return State
    */
    public function model(array $row)
    {
        return new State([
            'country_id' => $row['country'],
            'title'      => $row['title'],
        ]);
    }
}
