<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBrowserVerifiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('browser_verifies', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('is_verify')->default(false);
            $table->integer('user_id')->unsigned();
            $table->string('device_type');
            $table->string('device_id');
            $table->string('browser_type');
            $table->string('browser_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('browser_verifies');
    }
}
