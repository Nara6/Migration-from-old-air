<?php

$api->get('/dual-team', 							    ['uses' => 'CroneJob\DualTeamController@getMember']);
$api->post('/dual-team', 							    ['uses' => 'CroneJob\DualTeamController@clear']);

$api->post('/clear-daily-pv', 							['uses' => 'CroneJob\PVController@clear']);
$api->post('/clear-investment-pool',					['uses' => 'CroneJob\InvestmentPoolController@clear']);
$api->post('/clear-pending-rebate',					    ['uses' => 'CroneJob\RebateController@clear']);