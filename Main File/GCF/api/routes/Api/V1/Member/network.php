<?php
$api->get('/root-node', 							['uses'     => 'Network\NetworkController@getRootNode']);
$api->get('/nodes',      							['uses'     => 'Network\NetworkController@getDownlineNodes']);
$api->get('/referrals', 							['uses'     => 'Network\ReferralController@listing']);
