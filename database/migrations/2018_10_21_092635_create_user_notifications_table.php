<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_notifications', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('notification_id')->unsigned()->nullable();
            $table->integer('custom_type_id')->unsigned()->nullable();
            $table->enum('notify_by',['sms','email','system']);
            $table->enum('notify',['now','everyday',7,15,30]);
            $table->boolean('repeatable')->default(false);

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
//            $table->foreign('notification_id')->references('id')->on('notifications');
            $table->foreign('custom_type_id')->references('type_id')->on('custom_notification_types')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_notifications');
    }
}
