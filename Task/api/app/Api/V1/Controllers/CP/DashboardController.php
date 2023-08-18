<?php

namespace App\Api\V1\Controllers\CP;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\Api\V1\Controllers\ApiController;
use App\Model\Order\Order; 


class DashboardController extends ApiController
{
    use Helpers;
   
    function getInfo(){
       
        $from = date('Y-m-d 00:00:00');
        $to = date('Y-m-d 23:59:59');

        $totalSaleToday             = Order::sum('total_price'); 

        $data = [
            'total_sale_today'           => $totalSaleToday
        ];
        
        return $data; 
    }

}
