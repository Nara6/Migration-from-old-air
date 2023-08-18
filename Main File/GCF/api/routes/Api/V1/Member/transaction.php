<?php

$api->get('/', 							['uses' => 'Transaction\TransactionController@transactions']);
$api->get('/categories', 				['uses' => 'Transaction\TransactionController@categories']);


$api->get('/banks', 					['uses' => 'Transaction\TransactionController@banks']);
$api->post('/create', 					['uses' => 'Transaction\TransactionController@create']);
$api->post('/update{id}', 				['uses' => 'Transaction\TransactionController@update']);





// ===================================>>  Topup
//Request
$api->get('/topups', 					['uses' => 'Transaction\FinancialRequestController@topups']);
$api->post('/topups', 					['uses' => 'Transaction\FinancialRequestController@requestTopup']);
$api->delete('/topups', 				['uses' => 'Transaction\FinancialRequestController@cancelTopup']);
//Activation
$api->get('/topups/activation', 		['uses' => 'Transaction\FinancialActivationController@topups']);
$api->post('/topups/activation', 		['uses' => 'Transaction\FinancialActivationController@activateTopup']);



// ===================================>>  Withdraw
//Request
$api->get('/get-balance', 				['uses' => 'Transaction\FinancialRequestController@getBalance']);
$api->get('/withdraws', 				['uses' => 'Transaction\FinancialRequestController@withdraws']);
$api->post('/withdraws', 				['uses' => 'Transaction\FinancialRequestController@requestWithdraw']);
$api->delete('/withdraws', 				['uses' => 'Transaction\FinancialRequestController@cancelWithdraw']);
//Activation
$api->get('/withdraws/activation', 		['uses' => 'Transaction\FinancialActivationController@withdraws']);
$api->post('/withdraws/activation', 	['uses' => 'Transaction\FinancialActivationController@activateWithdraw']);

$api->get('/usd', 						['uses'     => 'Transaction\TransactionController@usd']);