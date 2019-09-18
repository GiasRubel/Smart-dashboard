<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateOrdersTableForeignKey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::table("orders", function (Blueprint $table){
            $doctorineTable = Schema::getConnection()
                ->getDoctrineSchemaManager()
                ->listTableDetails('orders');
            if ($doctorineTable->hasIndex('orders_payment_method_id_foreign')){
                $table->dropForeign('orders_payment_method_id_foreign');
                $table->foreign('payment_method_id')
                    ->references('id')
                    ->on("payment_methods")
                    ->onDelete('SET NULL');
            }

            if ($doctorineTable->hasIndex('orders_tax_rule_id_foreign')){
                $table->dropForeign('orders_tax_rule_id_foreign');
                $table->foreign('tax_rule_id')
                    ->references('id')
                    ->on("tax_rules")
                    ->onDelete('SET NULL');
            }

            if ($doctorineTable->hasIndex('orders_user_id_foreign')){
                $table->dropForeign('orders_user_id_foreign');
                $table->integer('user_id')->nullable()->unsigned()->change();
                $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('set null');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::table("orders", function (Blueprint $table){
            $doctorineTable = Schema::getConnection()
                ->getDoctrineSchemaManager()
                ->listTableDetails('orders');
            if ($doctorineTable->hasIndex('orders_payment_method_id_foreign')){
                $table->dropForeign('orders_payment_method_id_foreign');
                $table->foreign('payment_method_id')
                    ->references('id')
                    ->on("payment_methods")
                    ->onDelete('cascade');
            }

            if ($doctorineTable->hasIndex('orders_tax_rule_id_foreign')){
                $table->dropForeign('orders_tax_rule_id_foreign');
                $table->foreign('tax_rule_id')
                    ->references('id')
                    ->on("tax_rules")
                    ->onDelete('cascade');
            }

            if ($doctorineTable->hasIndex('orders_user_id_foreign')){
                $table->dropForeign('orders_user_id_foreign');
                $table->integer('user_id')->nullable()->unsigned()->change();
                $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');
            }
        });
    }
}
