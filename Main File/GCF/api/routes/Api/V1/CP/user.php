<?php

$controller = 'User\UserController@';
$api->get('/', 				['uses' => $controller.'get']);
$api->get('/{id}', 			['uses' => $controller.'get']);
$api->put('/{id}', 			['uses' => $controller.'put']); //Update
$api->post('/', 			['uses' => $controller.'post']); //Add new
$api->delete('/{id}', 		['uses' => $controller.'delete']); 


$api->put('/{id}/update-password', 			['uses' => $controller.'updatePassword']); //Update


