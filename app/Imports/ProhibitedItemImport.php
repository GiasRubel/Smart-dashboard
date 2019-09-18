<?php

namespace App\Imports;

use App\Models\ProhibitedItem;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProhibitedItemImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new ProhibitedItem([
            'title' => $row['title'],
            'type'  => $row['type'],
        ]);
    }
}
