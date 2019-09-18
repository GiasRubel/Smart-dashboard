<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSmsNotifiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sms_notifies', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('sms_template_id')->unsigned();
            $table->string('mobile');
            $table->string('name');

            $table->foreign('sms_template_id')->references('id')->on('sms_templates')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sms_notifies');
    }
}
