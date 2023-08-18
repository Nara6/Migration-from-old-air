<?php

	$api->group(['namespace' => 'App\Api\V1\Controllers\CP'], function($api) {

		//==================================================================================> Dashboard
		$api->get('/dashboard', 			    ['uses' => 'DashboardController@getInfo']);
		
		//==================================================================================> Order
		$api->get('/pos/products', 				['uses' => 'POSController@getProducts']);
		$api->post('/pos/order', 				['uses' => 'POSController@makeOrder']);
		$api->get('/pos/customers', 			['uses' => 'POSController@getCustomers']);
		
		//==================================================================================> Sale
		$api->get('/sales', 					['uses' => 'OrderController@listing']);
		$api->delete('/sales/{id}', 			['uses' => 'OrderController@delete']);

		//==================================================================================> Printing
		$api->get('/sales/printing',         ['uses' => 'PrintDocumentController@printSale']);
		$api->get('/totals/printing',         ['uses' => 'PrintDocumentController@printTotal']);

		//==================================================================================> Product
		$api->get('/products', 					['uses' => 'ProductController@listing']);
		$api->post('/products', 				['uses' => 'ProductController@create']);
		$api->put('/products/{id}', 			['uses' => 'ProductController@update']);
		$api->delete('/products/{id}', 			['uses' => 'ProductController@delete']);

		$api->get('/product/types', 					['uses' => 'ProductTypeController@listing']);
		$api->post('/product/types', 					['uses' => 'ProductTypeController@create']);
		$api->put('/product/types/{id}', 					['uses' => 'ProductTypeController@update']);
		$api->delete('/product/types/{id}', 					['uses' => 'ProductTypeController@delete']);
		//==================================================================================> User
		$api->get('/users', 						['uses' => 'UserController@listing']);


		

	});