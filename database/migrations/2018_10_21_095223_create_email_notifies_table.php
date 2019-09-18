<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmailNotifiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('email_notifies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('email');
            $table->string('name');
            $table->string('subject');
            $table->dateTime('send_at');
            $table->integer('uses_template_id')->unsigned();
            $table->integer('news_letter_subscriber_id')->unsigned();
            $table->timestamps();

            $table->foreign('uses_template_id')
                ->references('id')
                ->on('email_templates')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('news_letter_subscriber_id')->references('id')->on('newsletter_subscribers')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('email_notifies');
    }
}
