<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateItemsTableForeignKey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("items", function (Blueprint $table){
            $table->dropForeign('items_order_id_foreign');
            $table->foreign('order_id')
                ->references('id')
                ->on('orders')
                ->onDelete('SET NULL');

            $table->dropForeign('items_user_id_foreign');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("items", function (Blueprint $table){
            $table->dropForeign('items_order_id_foreign');
            $table->dropForeign('items_user_id_foreign');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->change();
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade')->change();
        });
    }
}
