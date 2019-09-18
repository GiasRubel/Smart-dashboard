<?php

use App\Models as Models;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CurrencyTableSeeder extends Seeder
{
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        \Illuminate\Support\Facades\DB::table("currencies")->truncate();
        Models\Currency::insert([
            [
                'title' => 'BDT',
                'sign' => 'BDT',
                'code' => 'BDT',
                'usd_conversion_amount' => 84.18,
            ],
            [
                'title' => 'USD',
                'sign' => '$',
                'code' => 'usd',
                'usd_conversion_amount' => 1,
            ],
            [
                'title' => 'PKR',
                'sign' => '₨',
                'code' => 'PKR',
                'usd_conversion_amount' => 150.36,
            ]
        ]);
    }
}
