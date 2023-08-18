<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->increments('id', 11);
            
            $table->integer('type_id')->unsigned()->index()->nullable();
            $table->foreign('type_id')->references('id')->on('users_type')->onDelete('cascade');

            $table->string('name', 50)->nullable();
            $table->string('avatar', 100)->default('public/user/profile.png');

            $table->string('phone', 50)->unique()->nullable();
            $table->string('email', 50)->unique()->nullable();

            $table->string('password');
            $table->dateTime('password_last_updated_at')->nullable();
            $table->dateTime('password_last_updater')->nullable();
            $table->boolean('is_active')->default(1);
          
            $table->integer('creator_id')->unsigned()->index()->nullable();
            $table->integer('updater_id')->unsigned()->index()->nullable();
            $table->integer('deleter_id')->unsigned()->index()->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
}
