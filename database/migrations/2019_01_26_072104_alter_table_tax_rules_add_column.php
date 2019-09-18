<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableTaxRulesAddColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tax_rules', function (Blueprint $table) {
            $table->string('contain_title');
            $table->text('contain_type')->nullable();
            $table->string('contain_unit')->nullable();
            $table->string('unit_min')->nullable();
            $table->string('unit_max')->nullable();
            $table->string('tax_price');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tax_rules', function (Blueprint $table) {
            $table->dropColumn('contain_title');
            $table->dropColumn('contain_type');
            $table->dropColumn('contain_unit');
            $table->dropColumn('unit_min');
            $table->dropColumn('unit_max');
            $table->dropColumn('tax_price');
        });
    }
}
