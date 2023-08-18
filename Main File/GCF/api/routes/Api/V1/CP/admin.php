<?php

$controller = 'Admin\Controller@';

$api->get('/', 				['uses' => $controller.'listing']);
$api->get('/{id}', 			['uses' => $controller.'view']);
$api->put('/{id}', 			['uses' => $controller.'update']);
$api->post('/', 			['uses' => $controller.'create']);
$api->delete('/{id}', 		['uses' => $controller.'delete']);

/** To Update Admin password */
$api->put('/{id}/change-password', 			['uses' => $controller.'changePassword']);