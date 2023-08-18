<?php

//=================================================================================>>>> Route Package
$api->get('/packages',                   ['uses'     => 'Product\PackageController@listing']);
$api->post('/packages',                  ['uses'     => 'Product\PackageController@create']);
$api->get('/packages/{id}',              ['uses'     => 'Product\PackageController@view']);
$api->put('/packages/{id}',              ['uses'     => 'Product\PackageController@update']);
$api->delete('/packages/{id}',           ['uses'     => 'Product\PackageController@delete']);
$api->post('/package-products',                  ['uses'     => 'Product\PackageController@addProduct']);
// ================================== Get Product Price
$controller = 'Product\RebatePriceController@';
$api->put('/rebates', 			['uses'     => $controller.'updateRebatePrice']); 
$api->get('/rebates/{id}', 		['uses'     => $controller.'listing']);


$controller = 'Product\Controller@';
$api->get('/', 				            ['uses'     => $controller.'listing']);
$api->get('/{id}', 			            ['uses'     => $controller.'view']);
$api->put('/{id}', 			            ['uses'     => $controller.'update']); 
$api->post('/', 			            ['uses'     => $controller.'create']);
$api->delete('/{id}', 		            ['uses'     => $controller.'delete']);






