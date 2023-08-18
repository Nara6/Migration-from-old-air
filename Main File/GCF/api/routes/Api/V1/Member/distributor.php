<?php
//==============================================================================>> Overview
$api->get('/dashboard',                    ['uses' => 'Distributor\DistributorOverviewController@dashboard']);
$api->get('/get-report-order',             ['uses' => 'Distributor\DistributorOverviewController@getReportOrder']);
$api->get('/get-report-purchase',          ['uses' => 'Distributor\DistributorOverviewController@getReportPurchase']);
$api->put('/update-distributor',           ['uses' => 'Distributor\DistributorOverviewController@updateDistributor']);

//==============================================================================>> Sale
$api->get('/members',                      ['uses' => 'Distributor\ResourceController@searchMember']);
$api->get('/sales',                        ['uses' => 'Distributor\DistributorSaleController@listing']);
$api->post('/sales',                       ['uses' => 'Distributor\DistributorSaleController@create']);
$api->post('/sales/action',                ['uses' => 'Distributor\DistributorSaleController@action']);
$api->get('/get-status',                        ['uses' => 'Distributor\DistributorSaleController@getStatus']);

//==============================================================================>> Purchase
$api->get('/upline-distributors',           ['uses' => 'Distributor\ResourceController@searchUplineDistributor']);
$api->get('/purchases',                     ['uses' => 'Distributor\DistributorPurchaseController@listing']);
$api->post('/purchases',                    ['uses' => 'Distributor\DistributorPurchaseController@create']);
$api->post('/purchases/cancel/{id}',        ['uses' => 'Distributor\DistributorPurchaseController@cancelPurchase']);
$api->get('/get-status',                    ['uses' => 'Distributor\DistributorPurchaseController@getStatus']);

//==============================================================================>> Purchase Request
$api->get('/downline-distributors',         ['uses' => 'Distributor\ResourceController@searchDownlineDistributor']);
$api->get('/purchase-requests',             ['uses' => 'Distributor\DistributorPurchaseRequestController@listing']);
$api->post('/purchase-requests',            ['uses' => 'Distributor\DistributorPurchaseRequestController@create']);
$api->post('/purchase-requests/action',     ['uses' => 'Distributor\DistributorPurchaseRequestController@action']);

//==============================================================================>> Product
$api->get('/products',                      ['uses' => 'Distributor\DistributorProductController@listing']);
$api->get('/stock-history',                 ['uses' => 'Distributor\DistributorProductController@stockHistory']);
$api->post('/add-stock',                    ['uses' => 'Distributor\DistributorProductController@addStock']);

//==============================================================================>> Activation
$api->get('/activation',                    ['uses' => 'Distributor\DistributorActivationController@listing']);
$api->delete('/activation',                 ['uses' => 'Distributor\DistributorActivationController@cancel']);
$api->post('/activation',                   ['uses' => 'Distributor\DistributorActivationController@subscribe']);