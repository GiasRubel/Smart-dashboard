<?php
return [
   'ssl_payment' => env('SSL_URL', 'https://sandbox.sslcommerz.com/gwprocess/v3/api.php'),
    'currency_url' => env('CURRENCY_URL', 'https://api.currencyconverterapi.com/api/v6/convert?apiKey=4f10f5f8-16e4-497c-8c18-ce80cf25a040&q='),
    'base_currency' => "USD",
    'conversion_expire_at' => '1 day', // array conversion expire time
    'ssl_refund' => 'https://sandbox.sslcommerz.com/validator/api/merchantTransIDvalidationAPI.php?'
];