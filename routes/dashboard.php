<?php

Route::post('user/change-password', 'API\AuthController@changePassword')->middleware('auth', 'admin');
Route::get("settings", function (){
    return config('settings');
});
Route::group(['namespace' => 'Dashboard', 'middleware' => ['auth', 'admin']], function () {
    Route::get("/shipping/cost", "SubmitForReviewController@getShippingCost");
    Route::post("make-order", "SubmitForReviewController@saveOrder");
    Route::get("/order/pending-for-review/{id}", "SubmitForReviewController@showPendingForReview");
    Route::patch("order/review-submit-item/{id}", "SubmitForReviewController@update");
    Route::get('/details', 'DashboardController@index');
    Route::get('currencies', 'DashboardController@currencies');
    Route::post("/payment/release", "PaymentController@release");
    Route::post("/payment/capture", "PaymentController@capture");
    Route::post("user/send-notification", "OrderController@sendNotification");
    Route::apiResource('reasons', 'ReasonController');

    Route::get("/financial-report", "FinanCialReportController@index");
    Route::get("/report/pdf/financial-report", "FinanCialReportController@showPdf");

    //**********Start Users, User Roles, Role Permissions Controller*********//
    Route::group(['namespace' => 'User'], function () {
        Route::post("user/notify/{id}", "UserController@sendNotification");
        Route::post('/permission/update', 'PermissionController@update');
        Route::get('/user/by-admin', 'UserController@byAdmin');
        Route::get('/user/by-member', 'UserController@byMember');
        Route::resource('/user', 'UserController');
        Route::get('/permission/role/{role_id?}', 'PermissionController@rolePermission');
        Route::get('/permission', 'PermissionController@index');
        Route::resource('/role', 'RoleController');
        Route::get("/user/list/{user?}", "UserController@getUser");
        Route::get("/user/address-list/{user}", "UserController@getUserAddress");
        Route::post("/save-user-address", "UserController@storeUserAddress");
        Route::get("get-user-unverified-browser/{id}", "UserController@getUnverifiedBrowser");
        Route::post("approve-user-unverified-browser/{id}", "UserController@approveBrowser");
        Route::post("approve-user-unverified-email/{id}", "UserController@approveEmail");
    });
    //**********End Users, User Roles, Role Permissions Controller*********//

    Route::get("/user-feedback/list", "FeedbackController@index");
    Route::patch("/user-feedback/change-status/{id}", "FeedbackController@changeStatus");
    Route::delete("/user-feedback/delete/{id}", "FeedbackController@destroy");

    Route::resource('/group', 'GroupController');

    Route::resource('/product-measurment', 'ProductMeasurmentController');
    Route::get('/measurment-search/{field}/{query}', 'ProductMeasurmentController@search');
    Route::get('/measurment-search-approved/{field}/{query}', 'ProductMeasurmentController@search_approved');
    Route::get('/measurment-search-notapproved/{field}/{query}', 'ProductMeasurmentController@search_notapproved');
    Route::get('/product-measurment-approved', 'ProductMeasurmentController@measurment_approved');
    Route::get('/product-measurment-notapproved', 'ProductMeasurmentController@measurment_notapproved');

    Route::get('/shipment/country/{country_id}/states', 'ShipmentrateController@states');
    Route::get('/shipment/state/{state_id}/districts/{country?}', 'ShipmentrateController@districts');
    Route::resource('/shipment', 'ShipmentrateController');

    Route::resource('/tax-zone-rate', 'TaxZoneRateController');
    Route::resource('/tax-rules', 'TaxRulesController');

    Route::resource('/payment-methods', 'PaymentMethodController');
    Route::resource('/payment-by-card', 'paymentByCardController');

    Route::resource('banner-list', 'BannerController');

    Route::get('/export-shippingrate', 'ExcelImportController@export_shipment');
    Route::post('/excel-import', 'ExcelImportController@importExcel');
    Route::get('/export-prohibited', 'ExcelImportController@export_prohibited');
    Route::post('/excel-import-prohibited', 'ExcelImportController@import_excel_prohibited');
    Route::get('/export-states', 'ExcelImportController@export_states');
    Route::post('/excel-import-states', 'ExcelImportController@import_excel_states');

    Route::get("item/discount-items", "CartController@discountItems");
    Route::post("/item/change-status", "CartController@changeStatus");
    Route::patch('item/approved/{id}', 'OrderController@approve');
    Route::post("item/save-multiple-review", "OrderController@saveItemReview");
    Route::get("orders/order-invoice/{id}/{custom?}", "OrderController@invoice");
    Route::get("orders/order-invoice-without-price/{id}/{custom?}", "OrderController@withoutInvoice");
    Route::post("order/product-measurement", "OrderController@updateMeasurementProduct");
    Route::get("order/product-measurement/{order_id}/{purchased?}", "OrderController@measurementProduct");
    Route::post("order/update-admin-operation", "OrderController@adminOperation");
    Route::post("order/update-custom-price", "OrderController@customPrice");
    Route::post("order/update-invoice", "OrderController@invoiceUpdate");
    Route::post("order-status-update", "OrderController@statusUpdateAll")->name('order-status-update');
    Route::post("change-order-invoice-number", "OrderController@invoiceUpdate");
    Route::post('order-payment/store', 'OrderController@storePayment');
    Route::post('order-status-update-single', 'OrderController@statusUpdateSingle');
    Route::patch('order/edit-tax-bd/{id}', 'OrderController@edit_tax_bd');
    Route::get('order/pending-for-review', 'OrderController@pending_for_review');
    Route::get('order/cash-payment', 'OrderController@cash_payment');
    Route::get('order/review-complete', 'OrderController@review_complete');
    Route::get('order/ready-for-purchase', 'OrderController@ready_for_purchase');
    Route::get('order/search/', 'OrderController@search');
    Route::post('order/cancel-order', 'OrderController@cancel');
    Route::get('order/get-user-order/{user_id}', 'GererateShippingCostOrderController@userShippingCostOrder');
    Route::post("/delete-order-in-batch", "OrderController@deleteOrder");
    Route::post("order/delivery-info/store", "OrderController@storeDeliveredInfo");
    Route::get("/order/orders-report", "OrderController@ordersReport");


    Route::get('/cache-clear', 'ConsoleController@cache_clear');
    Route::get('/config-clear', 'ConsoleController@config_clear');

    Route::get('order/pending/{id}', 'OrderController@show');
    Route::resource('/order', 'OrderController');

    Route::apiResource("store-settings", "StoreSettingsController");

    Route::get("/status/{page}", "StatusController@index"); //all status list
    Route::resource('/status', 'StatusController');
    Route::get('/status/order/report/{alias}', 'DashboardController@statusReport');

    Route::resource('/country', 'CountryController');
    Route::resource('/state', 'StateController');
    Route::resource('/district', 'DistrictController');
    Route::resource('/currency', 'CurrencyController');

    Route::apiResource("/configurations", "ConfigurationController");
    Route::get("product-measurement-category/get/{text?}", "ProductMeasurementCategoryController@parent");
    Route::apiResource("/product-measurement-category", "ProductMeasurementCategoryController");

    Route::resource('/email-template', 'EmailTemplateController');
    Route::resource('/sms-template', 'SmsTemplateController');

    Route::resource('prohibited', 'ProhibitedController');

    Route::resource('/notification-type', 'NotificationTypeController');

    Route::get('/admin-menu/permitted-menus', 'AdminMenuController@getPermittedMenu');
    Route::resource('/admin-menu', 'AdminMenuController');

    Route::resource('/stores', 'StoreController');

    Route::post('/item/show-in-popular/{id}', 'CartController@showInPoPular');
    Route::get('/cart-items', 'CartController@cartItems');
    Route::get('/cart-review-item', 'CartController@cartReviewItem');
    Route::get('/cart-review-item-by-price', 'CartController@cartReviewByPrice');
    Route::get('/cart-authenticated', 'CartController@authenticated_cart');
    Route::get('/cart-unauthenticated', 'CartController@unauthenticated_cart');
    Route::resource('/carts', 'CartController');

    Route::get('/log-viewer', 'LogViewerController@listLogs');
    Route::get('/log-viewer/logs/{date}', 'LogViewerController@show');
    Route::get('/log-viewer/download/{date}', 'LogViewerController@download');
    Route::delete('/log-viewer/{date}', 'LogViewerController@delete');


    Route::get("admin-info", function () {
        return Auth::user();
    });

    Route::get('/{queryString?}', 'HomeController@index')->where('queryString', '(.*)')->name('Dashboard-Home');


});

