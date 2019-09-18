<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentByCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create( 'payment_onlines', function (Blueprint $table) {
            $table->increments( 'id' );
            $table->unsignedInteger( 'payment_method_id' );
            $table->string( 'title' );
            $table->string( 'secret_token' )->nullable();
            $table->string( 'secret_id' )->nullable();
            $table->string( 'applicable_country' )->nullable();
            $table->string('alias', 40)->unique();
            $table->double('charge_amount')->nullable();
            $table->text( 'others' )->nullable();
        } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists( 'payment_onlines' );
    }
}
