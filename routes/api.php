<?php
Route::group(["prefix" => 'user', 'namespace' => 'Auth'], function (){
    Route::get( 'login/verify/{token}/{user}/{browser}', 'LoginController@verifyUserBrowser' )->name( 'user.verify.browser' );
    Route::get( "check-session-exists/{session_id}", "SessionController@checkSessionIsExists" );
    Route::get( "session_id", "SessionController@getSession" );
});

Route::group(["namespace" => "API"], function (){
    Route::post( "search/product", "ProductSearchController@search" );
    Route::get( "get-meta-info", "MetaInfoController@getMeta" );
    Route::get('/reason-list', 'OrderController@orderReason')->middleware('auth:api');
    Route::get('/feedback-list', "FeedBackController@index");
    Route::post('/feedback-message/store', 'FeedBackController@storeFeedBack')->middleware('auth:api');
    Route::post( "store-item", "ItemController@storeItem" );
});

Route::get( '/settings', function () {
    return config( 'settings' );
} );

Route::get('/banners', 'API\BannerController@index');

Route::group( ['prefix' => 'payment', 'namespace' => 'Payment'], function () {

    Route::group(["prefix" => "method"], function (){
        Route::get( "/", "PaymentAPIController@paymentMethod" );
        Route::get( "/{payment_method_id}", "PaymentAPIController@gateway" );
    });

    Route::get( "user/card-list/{gateway_id?}", "PaymentAPIController@userCard" )->middleware( "auth:api" );

    Route::group(["prefix" => "user/card", 'middleware' => 'auth:api'], function (){
        Route::post( "/store", "PaymentAPIController@storeUserCard" );
        Route::patch( "/update/{id}", "PaymentAPIController@updateUserCard" );
        Route::get( "/{card_id}", "PaymentAPIController@card" );
        Route::patch( "/active/{id}", "PaymentAPIController@activeUserCard" );
        Route::delete( "/{id}", "PaymentAPIController@deleteUserCard" );
    });

    Route::group(["prefix" => "stripe"], function (){
        Route::post( "charge", "StripePaymentController@complete" )->middleware( 'auth:api' )->name( "stripe.charge" );
        Route::post( "release", "StripePaymentController@release" )->middleware( 'auth', 'admin' )->name( "stripe.release" );
        Route::post( "capture", "StripePaymentController@capture" )->middleware( 'auth', 'admin' )->name( "stripe.capture" );
    });

    Route::group(["prefix" => "sslcommerz"], function (){
        Route::post( "payment", "SSLCommerzController@charge" )->name( 'sslcommerz.complete' );
        Route::post( "success", "SSLCommerzController@success" );
        Route::post( "fail", "SSLCommerzController@fail" );
        Route::post( "cancel", "SSLCommerzController@cancel" );
        Route::post("postpond-request", "SSLCommerzController@postpondRequest");
        Route::post("refund", "SSLCommerzController@sslRefund")->name("ssl.refund")->middleware('auth');
    });

    Route::group(["prefix" => "authorize"], function (){
        Route::post("charge", "AuthorizePaymentController@charge")
            ->middleware('auth:api')
            ->name("authorize.charge");
        Route::post("card/validate", "AuthorizePaymentController@validateCard")
            ->middleware('auth:api')
            ->name("authorize.validate");
        Route::get("validate/{card_number}", "AuthorizePaymentController@getBankInfo");
    });

    Route::post("set-card-billing-address", "PaymentAPIController@setBillingAddress")
        ->middleware('auth:api')
        ->name('payment.setBilling');

} );

Route::group( ['prefix' => 'item', 'namespace' => 'API'], function () {
    Route::patch( "/quantity/{item_id}", "ItemController@itemQuantity" );
    Route::patch( '/apply-gift/{item_id}', 'ItemController@applyGift' );
    Route::patch( '/apply-insurance/{item_id}', 'ItemController@applyInsurance' );
    Route::get('popular-items/{perpage?}', 'ItemController@popularItems');
} );

Route::group( ['prefix' => 'report', 'namespace' => 'Report'], function () {
    Route::get( 'sales', 'SalesReport@sales' );
} );

Route::group( ["prefix" => "shipping"], function () {
    Route::get( "/countries", "Shipping\ShpingAPIController@countries" );
    Route::get( "/countries/{id}", "Shipping\ShpingAPIController@states" );
    Route::get( "/districts/{id}", "Shipping\ShpingAPIController@districts" );
    Route::get( "/cost", "Shipping\ShpingAPIController@cost" );
} );


Route::group( ['prefix' => 'order/user', 'namespace' => 'API'], function () {
    Route::get( 'cart', 'OrderController@cart' );
    Route::delete( 'cart/{id}', 'OrderController@cartDelete' );
    Route::post( "cart-update", "OrderController@updateCart" )->middleware( 'auth:api' );
    Route::get( 'list', 'OrderController@userOrderList' )->middleware( 'auth:api' );
    Route::get( '/{id}', 'OrderController@order' )->middleware( 'auth:api' );
    Route::post( '/cancel/{id}', 'OrderController@cancel' )->middleware( 'auth:api' );
} );


Route::post('reorder/save-item', 'API\ItemController@storeReorderItem');

Route::group(['middleware' => 'auth:api', 'namespace' => 'API'], function (){
    Route::get('/reason-list', 'OrderController@orderReason');
    Route::get('reorder/item-list/{perpage?}', 'OrderController@itemList');
});

Route::group(["prefix" => "order", "namespace" => "API", "middleware" => "auth:api"], function (){
    Route::post( 'submit-for-review', 'OrderPlacementController@submitForReview' );
    Route::post( 'confirm-review-order', 'OrderPlacementController@confirm' );
    Route::post( 'upload-money-receipt', 'OrderPlacementController@uploadReceipt' );
    Route::delete( 'delete-money-receipt/{id}', 'OrderPlacementController@deleteReceipt');
    Route::post( "apply-custom-amount", "OrderPlacementController@customAmount" );
});



Route::group(["prefix" => "items", "namespace" => "API"], function (){
    Route::get( 'prohibited', 'ItemController@prohibitedItems' ); //prohibited Items
    Route::get( 'prohibited-item-list/{sessionId}', 'ItemController@prohibitedItem' ); //prohibited Items
    Route::delete( 'prohibited-item-list/{sessionId}', 'ItemController@removeProhibitedItem' ); //prohibited Items
});

Route::group( ['prefix' => 'auth', 'namespace' => 'API'], function () {
    Route::post( 'login', 'LoginController@login' )->name( 'login' );
    Route::post( 'signup', 'AuthController@signup' )->name( 'signup' );
    Route::get( 'login/{provider}', 'AuthController@redirectToProvider' );
    Route::post( 'login/social/email/', 'AuthController@loginWithEmailFromProvider' );
    Route::get( 'login/{provider}/callback', 'AuthController@handleCallback' );

    //forgot password
    Route::post( 'user/forgotpassword/nwpassword', 'AuthController@newPassword' )->name( 'user.forgotpassword.newPassword' );
    Route::post( 'user/verify/email', 'AuthController@verifyUser' );
    Route::post( 'user/forgotpassword', 'AuthController@forgotPasswordSendMail' )->name( 'user.forgotpassword' );
    Route::get( 'user/forgotpassword/verify/{token}/{user}', 'AuthController@forgotPasswordVerify' )->name( 'user.forgotpassword.verify' );
    Route::post( 'user/forgotpassword/nwpassword', 'AuthController@newPassword' )->name( 'user.forgotpassword.newPassword' );

    //prohibited Items
    Route::post( 'prohibitedItems', 'ItemController@prohibitedItems' );
    //Product Details
    Route::post( 'productDetail', 'Product\ProductDetailController@getDetail' );
    Route::post( 'post/scrap/data', 'Product\ProductDetailController@storeScrapData' );
    Route::post( 'storeEbay', 'Product\ProductDetailController@storeEbay' );

    Route::group( ['middleware' => 'auth:api'], function () {
        Route::get( 'logout', 'AuthController@logout' )->name( 'logout' );
        Route::get( 'user', 'AuthController@user' )->name( 'user' );
        Route::post( 'user/isEmailVerify', 'AuthController@is_email_verify' )->name( 'user.isemailverify' );
        Route::post( 'user/is-browser-verified/{browser_id}', 'AuthController@isBrowserVerified' )->name( 'user.isbrowserverify' );
        Route::post( 'user/changepassword', 'AuthController@changePassword' )->name( 'user.changepassword' );
        Route::post( 'user/createpassword', 'AuthController@createPassword' )->name( 'user.createpassword' );
        //Profile
        Route::get( 'profile', 'ProfileController@index' );
        Route::patch( 'user/update', 'ProfileController@update' );
        Route::post( 'user/update-profile-picture', 'ProfileController@changeProfilePicture' );
        //Address
        Route::get( 'address', 'AddressController@index' );
        Route::get( 'address/show/{id}', 'AddressController@show' );
        Route::post( 'address/add', 'AddressController@store' );
        Route::post( 'address/setDefault', 'AddressController@setDefault' );
        Route::patch( 'address/update/{id}', 'AddressController@update' );
        Route::post( 'address/delete', 'AddressController@delete' );

        Route::get( 'getCountry', 'AddressController@getCountry' );
        Route::get( 'getState', 'AddressController@getState' );
        //Item
        Route::post( 'saveItem', 'ItemController@saveItem' );
        Route::post( 'itemList', 'ItemController@itemList' );
        Route::post( 'itemListByUser', 'ItemController@itemListByUser' );
        //Order
        Route::post( 'saveOrder', 'OrderController@saveOrder' );
        Route::post( 'place-order', 'OrderPlacementController@placeOrder' );
        Route::post( 'orderList', 'OrderController@orderList' );
        Route::post( 'orderListByUser', 'OrderController@orderListByUser' );


        Route::get( 'user/notifications', 'NotificationController@notifications' );
        Route::get( 'user/notifications/count', 'NotificationController@countUnreadNotifications' );
        Route::get( 'user/read/notifications', 'NotificationController@read' );
        Route::get( 'user/un-read/notifications', 'NotificationController@unRead' );
        Route::get( 'user/notification/mark-read/{id}', 'NotificationController@markAsRead' );
        Route::get( 'user/notification/mark-unread/{id}', 'NotificationController@markAsUnRead' );
        Route::get( 'user/notifications/mark-read/all', 'NotificationController@markAllAsRead' );
        Route::post( 'user/notifications/mark-read/', 'NotificationController@markAsReadIds' );
        Route::get( 'user/notifications/mark-unread/all', 'NotificationController@markAllAsUnRead' );
        Route::post( 'user/notifications/mark-unread/', 'NotificationController@markAsUnReadIds' );
    } );
} );

Route::get('/{anything?}', function (){
   return redirect( config( 'configuration.front_end_url' ) );
})->where('anything', '(.*)');