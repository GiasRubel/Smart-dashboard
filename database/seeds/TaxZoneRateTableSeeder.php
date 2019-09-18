<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class TaxZoneRateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Models\TaxZoneRate::class, 5)->create();
    }
}
