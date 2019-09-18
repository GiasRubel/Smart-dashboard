<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppModelsAdminMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_menus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title',191);
            $table->enum('menu_types',['top_menu','sidebar_menu']);
            $table->enum('menu_action',['index','show','create','update','destroy']);
            $table->string('route',191);
            $table->string('module_name',191)->nullable();
            $table->string('component_name')->nullable();
            $table->string('icon_class',191)->nullable();
            $table->boolean('status')->default(false)->nullable();
            $table->string('icon_img',191)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_models_admin_menus');
    }
}
