<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions_category', function (Blueprint $table) {
            $table->increments('id', 11);
            
            $table->integer('type_id')->unsigned()->index()->nullable();
            
            $table->string('name', 50)->default('');
            $table->string('action', 50)->default('');
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions_category');
    }
}
