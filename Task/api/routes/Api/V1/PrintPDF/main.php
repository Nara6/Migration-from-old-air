<?php

$api->group(['namespace' => 'App\Api\V1\Controllers\PrintPDF'], function($api) {

    # Print Student application
    $api->get('/order-invoice',               ['uses' => 'printInvoiceOrderController@printInvioceOrder']);


}); 

