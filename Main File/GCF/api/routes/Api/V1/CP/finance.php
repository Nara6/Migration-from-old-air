<?php

$api->get('/', 							        ['uses' => 'Finance\FinanceTransactionController@listing']);

$api->get('/request-topups', 					['uses' => 'Finance\FinanceActivationController@topups']);
$api->post('/request-topups/activation', 		['uses' => 'Finance\FinanceActivationController@activateTopup']);

// ============================>> E-point & E-Cash
$api->get('/e-points', 				    ['uses' => 'Finance\TransactionController@ePoint']);
$api->get('/e-cashs', 				    ['uses' => 'Finance\TransactionController@eCash']);
$api->get('/pvs', 				        ['uses' => 'Finance\TransactionController@pv']);

// ============================>> Bank
$api->get('/banks', 				    ['uses' => 'Finance\BankController@getBank']);
$api->get('/banks/{id}', 				['uses' => 'Finance\BankController@viewBank']);
$api->put('/banks/{id}', 				['uses' => 'Finance\BankController@updateBank']);
$api->post('/banks', 				    ['uses' => 'Finance\BankController@createBank']);
$api->delete('/banks/{id}', 			['uses' => 'Finance\BankController@deleteBank']);