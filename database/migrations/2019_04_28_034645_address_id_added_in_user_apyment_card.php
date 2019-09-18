<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddressIdAddedInUserApymentCard extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_payment_cards', function (Blueprint $table) {
            $table->unsignedInteger('address_id')->after('gateway_id')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_payment_cards', function (Blueprint $table) {
            $table->dropColumn('address_id');
        });
    }
}
