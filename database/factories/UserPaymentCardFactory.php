<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\UserPaymentCart::class, function (Faker $f) {
    return [
        'gateway_id' => $f->randomElement( Models\PaymentOnline::pluck( 'id' )->toArray() ),
        'card_number' => $f->randomElement( ['4000000000000077', '4000000000000093', '4000000000000010', '4000000000000028', '4242424242424242', '4000056655665556', '5555555555554444', '2223003122003222', '5200828282828210', '5105105105105100', '378282246310005', '371449635398431', '6011111111111117', '6011000990139424'] ),
        'cvc' => $f->randomNumber( 3 ),
        'card_bank' => $f->randomElement( ['Paypal', 'Onebank', 'Master Card', 'Visa Card', 'Americal Express', 'Bkash', 'DBBL', 'Discover', 'Diners Club', 'UnionPay', 'JCB'] ),
        'is_verify' => $f->boolean,
        'assign_amount' => $f->randomNumber( rand( 4, 6 ) ),
        'amount' => $f->randomNumber( rand( 4, 6 ) ),
        'currency' => $f->randomElement( Models\Currency::pluck( 'id' )->toarray() ),
        'create_at' => $f->dateTimeThisMonth,
        'expire_at' => $f->creditCardExpirationDate
    ];
} );