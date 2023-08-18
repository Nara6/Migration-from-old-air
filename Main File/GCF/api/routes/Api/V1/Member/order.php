<?php
$api->get('/search-distributors', 	    ['uses' => 'Order\SearchDistributorController@search']);
$api->get('/distributor-type',  	    ['uses' => 'Order\SearchDistributorController@type']);
$api->get('/', 							['uses' => 'Order\OrderController@listing']);
$api->post('/', 						['uses' => 'Order\OrderController@create']);
$api->get('/packages', 					['uses' => 'Order\PackageController@listPackage']);
$api->post('/cancel/{id}',              ['uses' => 'Order\OrderController@cancelOrder']);
$api->get('/get-status', 				['uses' => 'Order\OrderController@getStatus']);

// ============================= Product Type 
$api->get('/product-types', 				['uses' => 'Order\ProductTypeController@listing']);
