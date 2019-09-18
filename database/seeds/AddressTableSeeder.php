<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class AddressTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory( Models\Address::class, 25 )->create();
    }
}




