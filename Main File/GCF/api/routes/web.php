<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('test-blockchain', 			[ 'uses' => 'Test\TestController@blockchain']);
// Route::get('test-coinbase', 			[ 'uses' => 'Test\TestController@coinbase']);
// Route::get('test-email', 				[ 'uses' => 'Test\TestController@mail']);