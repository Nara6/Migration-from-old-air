<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->increments('id', 11);

            // $table->integer('category_id')->unsigned()->index()->nullable();
            // $table->foreign('category_id')->references('id')->on('products_category')->onDelete('cascade');

            // $table->integer('type_id')->unsigned()->index()->nullable();
            // $table->foreign('type_id')->references('id')->on('products_type')->onDelete('cascade');

            // $table->integer('package_id')->unsigned()->index()->nullable();
            // $table->foreign('package_id')->references('id')->on('products_package')->onDelete('cascade');
            
            $table->integer('package_id')->unsigned()->index()->nullable();
            $table->foreign('package_id')->references('id')->on('package')->onDelete('cascade');

            $table->string('name', 150)->nullable();
            $table->string('kh_name', 150)->nullable();
            $table->string('en_name', 150)->nullable();
            $table->string('image', 500)->nullable();
            $table->decimal('price', 10, 2)->default(0);
         
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
        Schema::dropIfExists('product');
    }
}
