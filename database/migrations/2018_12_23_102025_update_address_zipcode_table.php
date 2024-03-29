<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateAddressZipcodeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table( 'addresses', function (Blueprint $table) {
            $table->string( 'address_2' )->nullable()->change();
            $table->string( 'zip_code' )->nullable()->change();
        } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table( 'addresses', function (Blueprint $table) {
            $table->string( 'address_2' )->nullable( false )->change();
            $table->string( 'zip_code' )->nullable( false )->change();
        } );
    }
}
