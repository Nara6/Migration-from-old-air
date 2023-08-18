<?php

namespace App\Api\V1\Controllers\CP\Setup;

use Illuminate\Http\Request;

use App\Api\V1\Controllers\ApiController;
use App\Model\Setup\Status;

use Dingo\Api\Routing\Helpers;
use JWTAuth;
// use App\Model\User as Model;

class StatusController extends ApiController
{
    use Helpers;
    function listing() {

        $data = Status::select('id','name')
        ->get();

        return response()->json($data, 200);
    }

}
