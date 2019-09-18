<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDistrictColoumnAddessTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("addresses", function(Blueprint $table){
            $table->unsignedInteger('district_id')->after('state_id')->nullable();

            $table->foreign("district_id")->references('id')->on('districts')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("addresses", function(Blueprint $table){
            $table->dropColumn('distrct_id');
        });
    }
}
