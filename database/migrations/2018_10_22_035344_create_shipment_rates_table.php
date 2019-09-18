<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShipmentRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipment_rates', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('country_id');
            $table->string('state_id')->nullable();
            $table->string('weight_range');
            $table->string('dimension')->nullable();
            $table->string('items')->nullable();
            $table->string('price');
            $table->string('zip_code')->nullable();
            $table->enum('product_type', ['document', 'non-document'])->default('non-document')->nullable();
            $table->unsignedInteger('order')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shipment_rates');
    }
}
