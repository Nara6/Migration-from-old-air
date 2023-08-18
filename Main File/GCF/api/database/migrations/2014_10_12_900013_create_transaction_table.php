<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaction', function (Blueprint $table) {
            $table->increments('id', 11);
            $table->string('trx', 20)->nullable();
            
            $table->integer('type_id')->unsigned()->index()->nullable();

            $table->integer('category_id')->unsigned()->index()->nullable();
            $table->foreign('category_id')->references('id')->on('transactions_category')->onDelete('cascade');

            $table->integer('currency_id')->unsigned()->index()->nullable();
            $table->foreign('currency_id')->references('id')->on('currency')->onDelete('cascade');

            $table->integer('member_id')->unsigned()->index()->nullable();
            $table->foreign('member_id')->references('id')->on('member')->onDelete('cascade');

            $table->integer('admin_id')->unsigned()->index()->nullable();//user

            $table->decimal('amount', 10, 2)->nullable();
            $table->decimal('balance', 10, 2)->nullable();
           
            $table->string('description', 255)->nullable();

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
        Schema::dropIfExists('transaction');
    }
}
