<?php

namespace App\Api\V1\Controllers\CP\Financial;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\Api\V1\Controllers\ApiController;

use App\Model\Transaction\Transaction; 



class FinanceTransactionController extends ApiController
{
    use Helpers;
   
    function listing(){

        $data = Transaction::select('*')->get(); 
        
        

        return $data; 
    }
   
}
