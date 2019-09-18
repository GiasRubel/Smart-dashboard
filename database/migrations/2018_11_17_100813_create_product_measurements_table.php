<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductMeasurementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_measurement', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('store_id')->nullable();
            $table->string('title')->nullable();
            $table->string('sku');
            $table->double('weight')->nullable();
            $table->string('volumetric_weight')->nullable();
            $table->string('dimension')->nullable();
            $table->unsignedBigInteger('approved_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_measurements');
    }
}
