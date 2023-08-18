<?php

namespace App\Api\V1\Controllers\CP\Bank;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\CamCyber\FileUpload;
use App\Api\V1\Controllers\ApiController;
use App\Model\Bank\Main as Bank;
use App\Model\FinancialRequest\FinancialRequest;
use Dingo\Api\Routing\Helpers;
use JWTAuth;

use Carbon\Carbon;

class BankController extends ApiController
{
    use Helpers;
    function listing(Request $req){
        
        $data = Bank::select('*')
        ->get();
        return $data;
    }

}
