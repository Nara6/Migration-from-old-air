<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$api = app('Dingo\Api\Routing\Router');
$api->version('v1', function ($api) {
    
    //:::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Making Auth
    $api->group(['prefix' => 'auth'], function ($api) {
        require(__DIR__.'/Api/V1/Auth/main.php');
    });
    
    //:::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Authenticated
    $api->group(['middleware' => ['api.auth', 'cors']], function($api) {

        $api->group(['prefix' => 'cp', 'middleware' => []], function ($api) {
            require(__DIR__.'/Api/V1/CP/main.php');
        });
        
        // ::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Member
        $api->group(['prefix' => 'member', 'middleware' => []], function ($api) {
            require(__DIR__.'/Api/V1/Member/main.php');
        });

        //:::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> None Authentication
        $api->group(['prefix' => 'my-profiles', 'middleware' => []],function($api){
            require(__DIR__.'/Api/V1/MyProfile/main.php');
        });
        
    });

    //:::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> By Pass Testing
    $api->group(['prefix' => 'test'], function ($api) {
        $api->get('/test-upgrade', 							['uses'     => 'App\Api\V1\Controllers\Test\TestController@upgradeRank']);
    });

    $api->group(['prefix' => 'commission'], function ($api) {
        $api->get('/dual-team', 					    ['uses'     => 'App\Api\V1\Controllers\Test\TestController@upgradeRank']);
        $api->get('/rebate', 							['uses'     => 'App\Api\V1\Controllers\Test\TestController@upgradeRank']);
    });
    

});
