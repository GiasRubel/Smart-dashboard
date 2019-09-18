<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoginsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logins', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('browser_id')->unsigned();
            $table->string('ip');
            $table->string('location');
            $table->dateTime('login_at');
            $table->dateTime('logout_at');
            $table->timestamps();

            $table->foreign('browser_id')->references('id')->on('browser_verifies');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('logins');
    }
}
