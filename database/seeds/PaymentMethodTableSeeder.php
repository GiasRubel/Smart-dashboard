<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class PaymentMethodTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*factory( Models\PaymentMethod::class, 2 )->create();*/

        Models\PaymentMethod::insert( [
            [
                'title' => "By Credit Card",
                'is_online' => 1,
                'is_card_applicable' => 1,
            ],
            [
                'title' => "Cash",
                'is_online' => 0,
                'is_card_applicable' => 0,
            ],
        ] );
    }


}
