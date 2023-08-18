<?php

	
$api->group(['namespace' => 'App\Api\V1\Controllers\Member'], function($api) {
	
	
	$api->group(['prefix' => 'dashboard'], function ($api) {
		require(__DIR__.'/dashboard.php');
	});

	$api->group(['prefix' => 'orders'], function ($api) {
		require(__DIR__.'/order.php');
	});

	$api->group(['prefix' => 'my-profiles'], function ($api) {
		require(__DIR__.'/my-profile.php');
	});

	$api->group(['prefix' => 'stock'], function ($api) {
		require(__DIR__.'/distributor.php');
	});
	
	$api->group(['prefix' => 'network'], function ($api) {
		require(__DIR__.'/network.php');
	});

	$api->group(['prefix' => 'transactions'], function ($api) {
		require(__DIR__.'/transaction.php');
	});


});
