<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class StatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory( Models\Status::class, 15 )->create();
    }
}




