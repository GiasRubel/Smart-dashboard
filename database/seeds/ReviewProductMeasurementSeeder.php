<?php

use Illuminate\Database\Seeder;
use App\Models\ProductMeasurement;

class ReviewProductMeasurementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $measurements = ProductMeasurement::all();
        $measurements->flatMap(function ($m){
            factory(\App\Models\ProductMeasurementReview::class, rand(2, 4))->create([
                'measurement_id' => $m->id
            ]);
        });
    }
}
