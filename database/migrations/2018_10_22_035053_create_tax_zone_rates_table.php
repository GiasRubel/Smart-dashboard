<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTaxZoneRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tax_zone_rates', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('country_id');
            $table->string('state_id')->nullable();
            $table->integer('zip')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tax_zone_rates');
    }
}
