<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class ShipmentRateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory( Models\ShipmentRate::class, 1000 )->create();
    }
}
