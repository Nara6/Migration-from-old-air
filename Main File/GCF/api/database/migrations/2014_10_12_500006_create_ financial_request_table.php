<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFinancialRequestTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('financial_request', function (Blueprint $table) {
            $table->increments('id', 11);

            $table->integer('member_id')->unsigned()->index()->nullable();
            $table->foreign('member_id')->references('id')->on('member')->onDelete('cascade');

            $table->integer('type_id')->unsigned()->index()->nullable();
            $table->foreign('type_id')->references('id')->on('financial_request_type')->onDelete('cascade');
            
            $table->integer('status_id')->unsigned()->index()->nullable();
            $table->foreign('status_id')->references('id')->on('status');
            
            $table->integer('bank_id')->unsigned()->index()->nullable();
            $table->foreign('bank_id')->references('id')->on('bank');

            $table->integer('amount')->default(0);
            $table->string('bank_account', 20)->nullable();
            $table->string('bank_number', 20)->default(0);
            $table->string('bank_trx', 20)->default(0);
            $table->string('attachment', 120)->default(0);

            $table->integer('actioner_id')->unsigned()->index()->nullable(); //Staff who has right to check and approve
            $table->dateTime('action_at')->nullable();
            
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
        Schema::dropIfExists('financial_request');
    }
}
