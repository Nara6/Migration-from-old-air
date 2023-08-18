<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member', function (Blueprint $table) {
            $table->increments('id', 11);

            $table->integer('user_id')->unsigned()->index()->nullable();
            $table->foreign('user_id')->references('id')->on('user')->onDelete('cascade');


            //==============================>> Network Info
            $table->integer('referral_id')->unsigned()->index()->default(1);
            $table->integer('parent_node_id')->unsigned()->index()->default(1);
            
            $table->integer('rank_id')->unsigned()->nullable();
            $table->foreign('rank_id')->references('id')->on('rank');
           
            //Wallet
            $table->integer('pv')->nullable()->default(0);

           
            
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
        Schema::dropIfExists('member');
    }
}
