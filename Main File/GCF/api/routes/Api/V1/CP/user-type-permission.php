<?php

$controller = 'User\UserTypeController@';
$api->get('/', 		        ['uses' => $controller.'get']);
$api->get('/{id}', 		    ['uses' => $controller.'permissions']);
$api->post('/set', 		    ['uses' => $controller.'setPermission']);