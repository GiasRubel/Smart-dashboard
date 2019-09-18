<?php

use Illuminate\Database\Seeder;
use App\Models as Models;

class PaymentOnlineTableSeeder extends Seeder
{

    public function run()
    {
        Models\PaymentOnline::insert([
            [
                'title' => "Domestic Payment Gateway",
                'secret_token' => "xoren5bdeaa66bab8f",
                'secret_id' => "xoren5bdeaa66bab8f@ssl",
                'applicable_country' => 'Bangladesh',
                'payment_method_id' => Models\PaymentMethod::whereIsOnline(1)->first()->id,
                'alias' => 'sslcommerz',
                'charge_amount' => '2.5',
                'others' => "DDD",
            ],
            [
                'payment_method_id' => Models\PaymentMethod::whereIsOnline(1)->first()->id,
                'title' => "International Credit Card",
                'secret_token' => "pk_test_uNXDpH4dYevytS36Q0dBOOUs",
                'secret_id' => "sk_test_clhU1fDlN8tXlgUAcSajr1Ha",
                'applicable_country' => 'Bangladesh',
                'others' => "DDD",
                'alias' => 'stripe',
                'charge_amount' => '2.5'
            ],
            [
                'payment_method_id' => Models\PaymentMethod::whereIsOnline(1)->first()->id,
                'title' => "American Express",
                'secret_token' => "xoren5bdeaa66bab8f",
                'secret_id' => "xoren5bdeaa66bab8f@ssl",
                'applicable_country' => 'Bangladesh',
                'others' => "DDD",
                'alias' => 'american-express',
                'charge_amount' => '3.5'
            ]
        ]);
    }
}
