<?php


$api->get('/',          ['uses'     => 'Distributor\DistributorController@listing']);

//==============>> Stock Activation
$api->get('/stock-types',           ['uses'     => 'Distributor\DistributorActivationController@getStockType']);
$api->get('/stock-status',          ['uses'     => 'Distributor\DistributorActivationController@getStockStatus']);
$api->get('/requests',              ['uses'     => 'Distributor\DistributorActivationController@listing']);
$api->post('/requests',             ['uses'     => 'Distributor\DistributorActivationController@action']);

// ============>> List Rank
$api->get('types/list',               ['uses'       => 'Distributor\DistributorTypeController@getType']);
$api->delete('types/delete',          ['uses'       => 'Distributor\DistributorTypeController@delete']);
$api->post('types/create',            ['uses'       => 'Distributor\DistributorTypeController@create']);
// ============>> 
$api->put('/type/specs', 			  ['uses'        => 'Distributor\DistributorTypeController@updateSpec']); 
$api->get('/type/specs/{id}', 		  ['uses'        =>  'Distributor\DistributorTypeController@view']);
