<?php

	$api->group(['namespace' => 'App\Api\V1\Controllers\CP'], function($api) {

		$api->get('/dashboard', 			    ['uses' => 'DashboardController@getInfo']);
		
		
		$api->get('/orders', 			        ['uses' => 'OrderController@listing']);
		$api->delete('/orders/{id}', 			['uses' => 'OrderController@delete']);

		$api->get('/pos/products', 				['uses' => 'POSController@getProducts']);
		$api->post('/pos/order', 				['uses' => 'POSController@makeOrder']);

		$api->get('/pos1/products', 			['uses' => 'POS2Controller@getProducts']);
		$api->post('/pos1/order', 				['uses' => 'POS2Controller@makeOrder']);

		$api->get('/sales', 					['uses' => 'OrderController@listing']);
		$api->delete('/sales/{id}', 			['uses' => 'OrderController@delete']);


		//===================>> Admin Only!!!! :(
		$api->group(['middleware' => 'onlyAdmin'], function($api) {

			$api->get('/branches', 			        ['uses' => 'BranchController@listing']);
			$api->get('/branches/{id}',		    	['uses' => 'BranchController@view']);
			$api->post('/branches', 			    ['uses' => 'BranchController@create']);
			$api->put('/branches/{id}',		    	['uses' => 'BranchController@update']);
			$api->delete('/branches/{id}',		    ['uses' => 'BranchController@delete']);

			$api->get('/expenses/types', 			['uses' => 'ExpenseTypeController@listing']);
			$api->post('/expenses/types', 			['uses' => 'ExpenseTypeController@create']);
			$api->put('/expenses/types/{id}', 		['uses' => 'ExpenseTypeController@update']);
			$api->delete('/expenses/types/{id}', 	['uses' => 'ExpenseTypeController@delete']);

			$api->get('/expenses', 					['uses' => 'ExpenseController@listing']);
			$api->post('/expenses', 				['uses' => 'ExpenseController@create']);
			$api->put('/expenses/{id}', 			['uses' => 'ExpenseController@update']);
			$api->delete('/expenses/{id}', 			['uses' => 'ExpenseController@delete']);

			$api->get('/products/types', 			['uses' => 'ProductTypeController@listing']);
			$api->post('/products/types', 			['uses' => 'ProductTypeController@create']);
			$api->put('/products/types/{id}', 		['uses' => 'ProductTypeController@update']);
			$api->delete('/products/types/{id}', 	['uses' => 'ProductTypeController@delete']);

			$api->get('/products', 					['uses' => 'ProductController@listing']);
			$api->post('/products', 				['uses' => 'ProductController@create']);
			$api->put('/products/{id}', 			['uses' => 'ProductController@update']);
			$api->delete('/products/{id}', 			['uses' => 'ProductController@delete']);

			$api->get('/products1/types', 			['uses' => 'ProductType2Controller@listing']);
			$api->post('/products1/types', 			['uses' => 'ProductType2Controller@create']);
			$api->put('/products1/types/{id}', 		['uses' => 'ProductType2Controller@update']);
			$api->delete('/products1/types/{id}', 	['uses' => 'ProductType2Controller@delete']);

			$api->get('/products1', 				['uses' => 'Product2Controller@listing']);
			$api->post('/products1', 				['uses' => 'Product2Controller@create']);
			$api->put('/products1/{id}', 			['uses' => 'Product2Controller@update']);
			$api->delete('/products1/{id}', 		['uses' => 'Product2Controller@delete']);

			$api->get('/profile', 					['uses' => 'ProfileController@get']);
			$api->get('/profile', 					['uses' => 'ProfileController@put']);
			$api->get('/profile', 					['uses' => 'ProfileController@changePassword']);

			$api->get('/users', 						['uses' => 'UserController@listing']);
			$api->post('/users/{id}/change-password',   ['uses' => 'UserController@changePassword']);
			
		});

		

	});