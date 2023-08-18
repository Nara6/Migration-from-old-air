<?php

$api->group(['namespace' => 'App\Api\V1\Controllers\Auth'], function($api) {
     
        $api->post('/login', 			        ['uses' => 'LoginController@login']);  
       
        $api->post('/get-reset-password-code', 		['uses' => 'ForgotPasswordController@getResetPasswordCode']);   
        $api->post('/verify-reset-password-code', 	['uses' => 'ForgotPasswordController@verifyResetPasswordCode']);
        $api->post('/reset-password', 	                ['uses' => 'ForgotPasswordController@changePassword']);   

        $api->post('/register', 			['uses' => 'RegisterController@register']);  
        $api->post('/register/user-network', 		['uses' => 'RegisterController@networkRegister']);  
        $api->post('/register/verify-account', 	        ['uses' => 'RegisterController@verifyAccount']);
        $api->post('/register/request-verify-code',     ['uses' => 'RegisterController@requestverifyCode']);
        
        $api->post('/look-up', 			        ['uses' => 'LookUpController@verifyUid']); 

});