<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class TaxRuleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Models\TaxRule::class, 5)->create();
    }
}
