<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotificationQueuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notification_queues', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->dateTime('queue_start');
            $table->enum('send_every',['day','week','month']);
            $table->boolean('is_repeat')->default(false);
            $table->enum('priority',['high','medium','low']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notification_queues');
    }
}
