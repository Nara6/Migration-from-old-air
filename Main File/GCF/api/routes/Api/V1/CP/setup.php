<?php


$api->group(['prefix' => 'ranks'], function ($api) {

    $controller = 'Setup\RankController@';

    $api->get('/', 				            ['uses'     => $controller.'listing']);
    $api->get('/{id}', 			            ['uses'     => $controller.'view']);
    $api->put('/{id}', 			            ['uses'     => $controller.'update']); 
    $api->post('/', 			            ['uses'     => $controller.'create']);
    $api->delete('/{id}', 		            ['uses'     => $controller.'delete']);
    
});

$api->group(['prefix' => 'package-category'], function ($api) {

    $controller = 'Setup\PackageCategoryController@';

    $api->get('/', 				            ['uses'     => $controller.'listing']);
    $api->get('/{id}', 			            ['uses'     => $controller.'view']);
    $api->put('/{id}', 			            ['uses'     => $controller.'update']); 
    $api->post('/', 			            ['uses'     => $controller.'create']);
    $api->delete('/{id}', 		            ['uses'     => $controller.'delete']);
    
});

$api->group(['prefix' => 'product-category'], function ($api) {

    $controller = 'Setup\ProductCategoryController@';

    $api->get('/', 				            ['uses'     => $controller.'listing']);
    $api->get('/{id}', 			            ['uses'     => $controller.'view']);
    $api->put('/{id}', 			            ['uses'     => $controller.'update']); 
    $api->post('/', 			            ['uses'     => $controller.'create']);
    $api->delete('/{id}', 		            ['uses'     => $controller.'delete']);
    
});

$api->group(['prefix' => 'product-type'], function ($api) {

    $controller = 'Setup\ProductTypeController@';

    $api->get('/', 				            ['uses'     => $controller.'listing']);
    $api->get('/{id}', 			            ['uses'     => $controller.'view']);
    $api->put('/{id}', 			            ['uses'     => $controller.'update']); 
    $api->post('/', 			            ['uses'     => $controller.'create']);
    $api->delete('/{id}', 		            ['uses'     => $controller.'delete']);
    
});

$api->group(['prefix' => 'status'], function ($api) {

    $controller = 'Setup\StatusController@';

    $api->get('/', 				            ['uses'     => $controller.'listing']);
    
});