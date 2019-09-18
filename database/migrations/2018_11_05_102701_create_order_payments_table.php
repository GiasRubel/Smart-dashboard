<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_payments', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger("order_id");
            $table->unsignedInteger("payment_method_id")->nullable();
            $table->unsignedInteger("gateway_id")->nullable();
            $table->string("charge_id");
            $table->double("amount",10, 2);
            $table->string('currency')->nullable();
            $table->dateTime('create_at')->nullable();
            $table->string('expire_at', 20)->nullable();
            $table->integer('visible_4_digit')->nullable();
            $table->string("status")->nullable();
            $table->double('conversion_rate')->nullable();
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
        Schema::dropIfExists('order_payments');
    }
}
