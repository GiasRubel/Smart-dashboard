<?php

use Faker\Generator as Faker;
use App\Models as Models;

$factory->define( Models\Status::class, function (Faker $f) {
    $title = $f->unique()->randomElement( ['Pending', 'Cancel', 'Shipped', 'Us-on-hand', 'Purchased', 'Transit', 'DAC-received', 'Pending-custom-clearance', 'Out-for-delivery', 'Cleared-custom', 'Delivered', 'Confirmed', 'Pending-for-review', 'Review-complete', 'Cash-pending'] );
    $index = $f->unique()->randomElement(range(1, 15));
    return [
        'title' => $title,
        'has_notify_user' => $f->boolean,
        'alias' => strtolower( $title ),
        'notify_by' => $f->randomElement( ['all', 'email', 'sms', 'system', 'none'] ),
        'index' => $index
    ];
});