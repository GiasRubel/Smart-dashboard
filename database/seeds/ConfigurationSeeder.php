<?php

use Illuminate\Database\Seeder;

class ConfigurationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $config = [
            [
                'title' => 'Expire time',
                'alias' => 'expire_time',
                'status' => '10',
                'updatedBy' => 1,
            ], 
            [
                'title' => 'Least insurance amount',
                'alias' => 'least_insurance',
                'status' => 15,
                'updatedBy' => 1
            ],
            [
                'title' => 'Insurance per item',
                'alias' => 'insurancePerItem',
                'status' => 0.012,
                'updatedBy' => 1
            ],
            [
                'title' => 'Tax percentage',
                'alias' => 'taxPercentage',
                'status' => 0.0875,
                'updatedBy' => 1
            ],
            [
                'title' => 'Local tax',
                'alias' => 'localTax',
                'status' => 0,
                'updatedBy' => 1
            ],
            [
                'title' => 'Gift per item',
                'alias' => 'giftPerItem',
                'status' => 5,
                'updatedBy' => 1
            ],
            [
                'title' => 'SSL Commerz percentage',
                'alias' => 'sslCommerz',
                'status' => 0.025,
                'updatedBy' => 1
            ],
            [
                'title' => 'Stripe percentage',
                'alias' => 'stripe',
                'status' => 0.029,
                'updatedBy' => 1
            ],
            [
                'title' => 'American Express',
                'alias' => 'americanExpress',
                'status' => 0.035,
                'updatedBy' => 1
            ],
            [
                'title' => 'Deposit Bank Account Number',
                'alias' => 'deposit_bank_account_number',
                'status' => 424242424242424242,
                'updatedBy' => 1
            ],
            [
                'title' => 'Extra percentage for bd conversion',
                'alias' => 'extra_percentage_for_bd_conversion',
                'status' => 0.04,
                'updatedBy' => 1
            ],
            [
                'title' => 'Royalty Charge Percentage',
                'alias' => 'royalty_charge_percentage',
                'status' => 0.06,
                'updatedBy' => 1
            ],
            [
                'title' => 'Maximum Royalty Charge',
                'alias' => 'maximum_royalty_charge',
                'status' => 6,
                'updatedBy' => 1
            ],
            [
                'title' => 'Minimum item price for review',
                'alias' => 'minimum_item_price_for_review',
                'status' => 350,
                'updatedBy' => 1
            ]
        ];
        \App\Models\Configuration::insert($config);
    }
}
