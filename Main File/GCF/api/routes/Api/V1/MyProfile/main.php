<?php

$controller = 'App\Api\V1\Controllers\MyProfile\MyProfileController@';
$api->get('/', 						['uses' => $controller.'get']);
$api->put('/', 						['uses' => $controller.'put']); 
$api->put('/change-password', 		['uses' => $controller.'changePassword']); //Update
