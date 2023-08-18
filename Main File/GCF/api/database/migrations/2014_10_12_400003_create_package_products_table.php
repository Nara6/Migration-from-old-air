<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePackageProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('package_products', function (Blueprint $table) {
            $table->increments('id', 11);

            $table->integer('package_id')->unsigned()->index()->nullable();
            $table->foreign('package_id')->references('id')->on('package')->onDelete('cascade');

            $table->integer('product_id')->unsigned()->index()->nullable();
            $table->foreign('product_id')->references('id')->on('product')->onDelete('cascade');

            $table->integer('qty')->nullable()->default(1);
            
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
        Schema::dropIfExists('package_products');
    }
}
