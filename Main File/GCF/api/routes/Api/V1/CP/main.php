<?php

	
	$api->group(['namespace' => 'App\Api\V1\Controllers\CP'], function($api) {
		
		$api->group(['prefix' => 'dashboard'], function ($api) {
			require(__DIR__.'/dashboard.php');
		});

		$api->group(['prefix' => 'products'], function ($api) {
			require(__DIR__.'/product.php');
		});

		$api->group(['prefix' => 'setups'], function ($api) {
			require(__DIR__.'/setup.php');
		});

		$api->group(['prefix' => 'members'], function ($api) {
			require(__DIR__.'/member.php');
		});
		$api->group(['prefix' => 'sales'], function ($api) {
			require(__DIR__.'/sale.php');
		});

		$api->group(['prefix' => 'banks'], function ($api) {
			require(__DIR__.'/bank.php');
		});

		$api->group(['prefix' => 'distributors'], function ($api) {
			require(__DIR__.'/distributor.php');
		});

		$api->group(['prefix' => 'users'], function ($api) {
			require(__DIR__.'/user.php');
		});
	
		$api->group(['prefix' => 'my-profiles'], function ($api) {
			require(__DIR__.'/my-profile.php');
		});

		$api->group(['prefix' => 'user-type-permission'], function ($api) {
			require(__DIR__.'/user-type-permission.php');
		});	

		$api->group(['prefix' => 'finances'], function ($api) {
			require(__DIR__.'/finance.php');
		});

		$api->group(['prefix' => 'crone-job'], function ($api) {
			require(__DIR__.'/crone-job.php');
		});

	});