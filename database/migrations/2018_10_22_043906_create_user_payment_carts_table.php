<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserPaymentCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_payment_cards', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger("user_id");
            $table->unsignedInteger("gateway_id")->nullable();
            $table->string('card_number');
            $table->string("cvc")->nullable();
            $table->string('card_bank');
            $table->boolean('is_verify')->default(false);
            $table->double('assign_amount')->nullable();
            $table->double('amount')->nullable();
            $table->string('currency')->nullable();
            $table->dateTime('create_at');
            $table->string('expire_at');
            $table->tinyInteger('is_active');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_payment_cards');
    }
}
