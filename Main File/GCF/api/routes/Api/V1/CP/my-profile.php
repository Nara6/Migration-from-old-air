<?php

$controller = 'MyProfile\Controller@';
$api->get('/', 						['uses' => $controller.'get']);
$api->put('/', 						['uses' => $controller.'put']); 
$api->put('/change-password', 		['uses' => $controller.'changePassword']); //Update
