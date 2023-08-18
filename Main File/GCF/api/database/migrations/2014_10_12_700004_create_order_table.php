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

            $table->integer('receipt_number')->unsigned()->index()->nullable();

            $table->integer('member_id')->unsigned()->index()->nullable();
            $table->integer('package_id')->unsigned()->index()->nullable();
            
            $table->dateTime('ordered_at')->nullable();
            $table->dateTime('paid_at')->nullable();
            $table->dateTime('approved_at')->nullable();

            $table->integer('payment_type_id')->default(1); //by Cash. 
            $table->integer('status_id')->unsigned()->index()->default(1);
            $table->foreign('status_id')->references('id')->on('status');
            $table->integer('actioner_id')->unsigned()->index()->nullable(); //Staff who has right to check and approve
            $table->dateTime('action_at')->nullable();
            $table->mediumText('action_note')->nullable();
           
            $table->decimal('total_price', 10, 2)->default(0); //USD
            $table->integer('total_pv')->unsigned()->default(0);

            $table->mediumText('note')->nullable();

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
        Schema::dropIfExists('order');
    }
}
