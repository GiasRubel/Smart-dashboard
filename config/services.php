<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => env('SES_REGION', 'us-east-1'),
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\Models\User::class,
        'key' => env('STRIPE_KEY', 'pk_test_uNXDpH4dYevytS36Q0dBOOUs'),
        'secret' => env('STRIPE_SECRET', 'sk_test_clhU1fDlN8tXlgUAcSajr1Ha'),
        'webhook' => [
            'secret' => env('STRIPE_WEBHOOK_SECRET'),
            'tolerance' => env('STRIPE_WEBHOOK_TOLERANCE', 300),
        ],
    ],
    'google' => [
        'client_id' => env('GOOGLE_CLIENT_ID'),         // Your GitHub Client ID
        'client_secret' => env('GOOGLE_CLIENT_SECRET'), // Your GitHub Client Secret
        'redirect' => 'https://api.'.env('BASE_DOMAIN').'/auth/login/google/callback',
    ],

    'facebook' => [
        'client_id' => env('FACEBOOK_CLIENT_ID')??'265903417317041',         // Your GitHub Client ID
        'client_secret' => env('FACEBOOK_CLIENT_SECRET')??'965350fcadf7146a1e14fe099bcc4e8a', // Your GitHub Client Secret
        'redirect' => 'https://api.'.env('BASE_DOMAIN').'/auth/login/facebook/callback',
    ],

    'linkedin' => [
        'client_id' => env('LINKEDIN_CLIENT_ID')??'265903417317041',         // Your GitHub Client ID
        'client_secret' => env('LINKEDIN_CLIENT_SECRET')??'965350fcadf7146a1e14fe099bcc4e8a', // Your GitHub Client Secret
        'redirect' => 'https://api.'.env('BASE_DOMAIN').'/auth/login/linkedin/callback',
    ],

    'twitter' => [
        'client_id' => env('TWITTER_CLIENT_ID')??'265903417317041',         // Your GitHub Client ID
        'client_secret' => env('TWITTER_CLIENT_SECRET')??'965350fcadf7146a1e14fe099bcc4e8a', // Your GitHub Client Secret
        'redirect' => 'https://api.'.env('BASE_DOMAIN').'/auth/login/twitter/callback',
    ],
];
