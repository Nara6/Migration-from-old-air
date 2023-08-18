<?php


$controller = 'Member\MemberController@';
$api->get('/', 				            ['uses'     => $controller.'listing']);
$api->get('/{id}', 			            ['uses'     => $controller.'view']);
$api->put('/{id}', 			            ['uses'     => $controller.'update']); 
$api->put('/{id}/change-password', 		['uses'     => $controller.'changePassword']);

// =============> List Referral
$api->get('/{id}/referral', 			['uses'     => $controller.'listReferral']);


$api->post('/change-sponsor', 			['uses'     => 'Member\SponsorController@changeSponsor']);
$api->post('/change-rank', 			    ['uses'     => 'Member\RankController@changeRank']);

// ============>> List Rank
$api->get('/ranks/list',          ['uses'     => 'Member\RankController@getRank']);
$api->put('/ranks/{id}',         ['uses'     => 'Member\RankController@updateRank']);

// ============>> List transactions
 $api->get('/{id}/transactions', 			['uses'     => $controller.'listTransaction']);
