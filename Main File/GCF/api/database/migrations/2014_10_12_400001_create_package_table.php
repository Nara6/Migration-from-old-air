<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePackageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('package', function (Blueprint $table) {
            $table->increments('id', 11);

            $table->string('kh_name', 150)->nullable();
            $table->string('en_name', 150)->nullable();
            $table->string('image', 500)->nullable();
            
            $table->integer('pv')->nullable()->default(0);
            $table->integer('price')->nullable()->default(0);
         
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
        Schema::dropIfExists('package');
    }
}
