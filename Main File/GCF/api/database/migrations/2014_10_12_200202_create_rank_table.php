<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRankTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rank', function (Blueprint $table) {
            $table->increments('id', 11);
            
           
            $table->string('name', 150)->default('');
            $table->string('icon', 150)->default('');

            //=================Requirement
            $table->decimal('min_downline', 10, 2)->nullable()->default(0);
            $table->decimal('commission_shared', 10, 2)->nullable()->default(1); 
           
          
           
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
        Schema::dropIfExists('rank');
    }
}
