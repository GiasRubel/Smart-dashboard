<?php

use Illuminate\Database\Seeder;

class ProductMeasurementCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\ProductMeasurementCategory::class, 30)->create();
    }
}
