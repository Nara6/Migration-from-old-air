<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order', function (Blueprint $table) {
            
            $table->increments('id', 11);
            $table->integer('receipt_number')->unsigned()->nullable();

            $table->integer('cashier_id')->unsigned()->nullable();
            $table->foreign('cashier_id')->references('id')->on('user');

            $table->double('total_price')->nullable();
            $table->decimal('discount', 10, 2)->default(0);
            $table->decimal('total_received', 10, 2)->default(0);

            $table->dateTime('ordered_at')->nullable();
            $table->dateTime('paid_at')->nullable();

            $table->softDeletes();
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
        Schema::dropIfExists('order');
    }
}
