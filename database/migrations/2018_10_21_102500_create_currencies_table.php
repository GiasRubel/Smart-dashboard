<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCurrenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create( 'currencies', function (Blueprint $table) {
            $table->increments( 'id' );
            $table->string( 'title' );
            $table->string( 'code' )->nullable();
            $table->string( 'sign' )->nullable();
            $table->string( 'usd_conversion_amount' );
        } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists( 'currencies' );
    }
}
