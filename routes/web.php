<?php
Auth::routes();

Route::get('/', 'HomeController@index');


Route::group( ['prefix' => 'report', 'namespace' => 'Report'], function () {
    Route::get( 'sales', 'SalesReport@sales' );
} );


Route::get( 'dashboard-permitted-menus', 'Dashboard\\DashboardController@getPermittedMenu' )->middleware( ['auth'] );
Route::get( "admin-info", function () {
    $user=auth()->user();
    $user->roles;
    return $user;
} )->middleware( 'auth' );


Route::post( '/cart-data', function () {

    $cart = $_POST['cart_response'] ?? 'No data';
    $url = request()->fullUrl();
    $header = request()->headers;
    $fp = fopen( public_path() . '/cookie.txt', "a" );
    $json = fopen( public_path() . '/cart.json', "a" );
    fwrite( $json, PHP_EOL . trim( $cart ) . ' requestUrl: ' . $url );
    fwrite( $fp, PHP_EOL . $header );
    fclose( $fp );
    fclose( $json );
    print 'ok';
    //dd(request()->all());
} );

Route::get( '/check-prohibited-item', function () {
    return response( ['message' => array_rand( [true, false] )] );
} );


Route::get( '/user/verify/resend/{user}', 'Auth\RegisterController@reVerifyUser' )->name( 'user.verify.resend' );
Route::get( '/user/login/verify/resend/{user}/{browser_id}', 'Auth\LoginController@reVerifyBrowser' )->name( 'user.verify.browser.resend' );
Route::get( '/user/login/verify/{token}/{user}/{browser_id}', 'Auth\LoginController@verifyUserBrowser' )->name( 'user.verify.browser' );
Route::get( '/user/verify/{token}', 'Auth\RegisterController@verifyUser' )->name( 'user.verify' );
