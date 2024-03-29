<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateCurrencyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('currencies', function (Blueprint $table){
            $table->timestamp('expire_at');
        });
    }

    public function down(){
        Schema::table('currencies', function (Blueprint $table){
            $table->dropColumn('expire_at');
        });
    }
}
