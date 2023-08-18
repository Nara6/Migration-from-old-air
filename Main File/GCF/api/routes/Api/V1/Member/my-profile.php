<?php

$controller = 'MyProfile\Controller@';
$api->get('/', 							['as' => 'get', 					'uses' => $controller.'get']);
$api->post('/', 						['as' => 'put', 					'uses' => $controller.'put']);


//==============================================================>> Update Password
$api->post('/change-password', 			['as' => 'change-password', 		'uses' => $controller.'changePassword']); //Update

//==============================================================>> Security
$controller = 'MyProfile\Security@';
//========================>> Email Verification
$api->get('/send-email-verify-code', 	['as' => 'send-email-verify-code', 	'uses' => $controller.'sendEmailVerifyCode']);
$api->post('/verify-email', 				['as' => 'verify-email', 			'uses' => $controller.'verifyEmail']);

//========================>> Phone Verification
$api->get('/send-phone-verify-code', 	['as' => 'send-phone-verify-code', 	'uses' => $controller.'sendPhoneVerifyCode']);
$api->post('/verify-phone', 				['as' => 'verify-phone', 			'uses' => $controller.'verifyPhone']);
