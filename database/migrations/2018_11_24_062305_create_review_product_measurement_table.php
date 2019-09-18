<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReviewProductMeasurementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('review_product_measurement', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('measurement_id');
            $table->string('item_from_weight')->nullable();
            $table->string('item_from_dimension')->nullable();
            $table->string('item_from_volumetric_weight')->nullable();
            $table->timestamps();

            $table->foreign('measurement_id')
                ->on('product_measurement')
                ->references('id')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('review_product_measurement');
    }
}
