<?php

namespace App\Imports;

use App\Models\ShipmentRate;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ShipmentRatesImport implements ToModel,  WithHeadingRow
{

//    use Importable;

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */

    public function model(array $row)
    {

        $weight = ShipmentRate::where('weight_range', $row['weight_range'])
            ->where('country_id',$row['country'])
            ->first();

        if (!$weight)
        {
            return new ShipmentRate([
                'title'        => $row['title'],
                'country_id'   => $row['country'],
                'state_id'     => $row['state'],
                'district'     => $row['district'],
                'weight_range' => $row['weight_range'],
                'dimension'    => $row['dimension'],
                'items'        => $row['items'],
                'price'        => $row['price'],
                'zip_code'     => $row['zip_code'],
                'order'        => $row['order'],
            ]);
        }else{
            return new ShipmentRate([
                'title'=> Null,
                'country_id' => Null,
            ]);
        }

    }



}
