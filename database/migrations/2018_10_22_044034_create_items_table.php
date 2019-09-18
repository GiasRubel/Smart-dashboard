<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->unsignedInteger('store_id')->nullable();
            $table->string('weight')->nullable();
            $table->string('dimension')->nullable();
            $table->string('url')->nullable();
            $table->string('imageUrl')->nullable();
            $table->string('sku')->nullable();
            $table->integer("available_quantity")->nullable()->default(0);
            $table->integer('user_id')->unsigned()->nullable();
            $table->boolean('is_gift')->default(false);
            $table->boolean('is_apply_insurance')->default(false);
            $table->string('item_status')->nullable();
            $table->integer('order_id')->nullable()->unsigned();
            $table->string('volumetric_weight')->nullable();
            $table->string('session_id')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
