<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTelegramTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('telegram', function (Blueprint $table) {
            $table->increments('id', 11);
            $table->string('channel', 150)->default('');
            $table->string('slug', 150)->default('');
            $table->string('chat_id', 150)->default('');
            $table->string('url', 150)->default('');
            $table->string('description', 150)->default('');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('telegram');
    }
}
