<?php

namespace App\Api\V1\Controllers\Member\Network;

use Illuminate\Http\Request;
use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\Api\V1\Controllers\ApiController;
use App\GCF\Network;



class NetworkController extends ApiController
{
    use Helpers;
   
    function getRootNode(Request $request){

        $user         = JWTAuth::parseToken()->authenticate();
        return response()->json(Network::getRoodNode($user->member->id), 200);
    }

    function getDownlineNodes(){
       
        return response()->json(Network::getNodes(), 200);
    }
    

    
}
