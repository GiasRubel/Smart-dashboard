<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_prices', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('item_id');
            $table->string('discount')->default(0)->nullable();
            $table->dateTime('discount_end_at')->nullable();
            $table->double('current_price')->default(0)->nullable();
            $table->double('item_price')->default(0);
            $table->integer('quantity');
            $table->double('service_charge')->default(0)->nullable();
            $table->double('item_bd_tax')->default(0)->nullable();
            $table->double('item_usa_tax')->default(0)->nullable();
            $table->double('insurance_amount')->default(0)->nullable();
            $table->double("gift_amount")->default(0)->nullable();

            $table->foreign('item_id')->references('id')->on('items')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_prices');
    }
}
