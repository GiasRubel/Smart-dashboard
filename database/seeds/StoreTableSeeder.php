<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class StoreTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory( Models\Store::class, 3 )->create();
    }
}




