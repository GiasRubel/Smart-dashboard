<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('order_number');
            $table->unsignedInteger('currency');
            $table->double('shipping_cost')->default(0);
            $table->double('tax_usa')->default(0);
            $table->double('tax_bd')->default(0);
            $table->integer('payment_method_id')->unsigned();
            $table->string('purchase_invoice_number')->nullable();
            $table->integer('user_id')->unsigned();
            $table->integer('tax_rule_id')->nullable()->unsigned();
            $table->integer('shipping_method_id')->nullable()->unsigned();
            $table->integer('shipping_address_id')->nullable()->unsigned();
            $table->string('coupon_id')->nullable();
            $table->dateTime("order_date")->nullable();
            $table->dateTime("delivery_date")->nullable();
            $table->unsignedInteger('last_status_id');

            $table->foreign('payment_method_id')->references('id')->on('payment_methods')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('tax_rule_id')->references('id')->on('tax_rules')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
