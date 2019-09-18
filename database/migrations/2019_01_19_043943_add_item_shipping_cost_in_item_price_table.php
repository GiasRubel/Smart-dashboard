<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddItemShippingCostInItemPriceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table( 'item_prices', function (Blueprint $table) {
            $table->double( 'shipping_cost' )->default( 0 );
        } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table( 'item_prices', function (Blueprint $table) {
            $table->dropColumn( 'shipping_cost' );
        } );
    }
}
