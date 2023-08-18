<?php


$controller = 'Sale\SaleController@';
$api->get('/', 				            ['uses'     => $controller.'listing']);
$api->get('/{id}', 				            ['uses'     => $controller.'view']);
$api->post('/action',                   ['uses'     => $controller.'action']);
