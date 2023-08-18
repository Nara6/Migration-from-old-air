<?php

namespace App\Api\V1\Controllers\Test;

use Illuminate\Http\Request;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\BH\Stock;
use App\BH\PV; 

use App\Api\V1\Controllers\ApiController;

use App\Model\Member\Main as Member;
class TestController extends ApiController
{
    use Helpers;
   
    function upgradeRank(Request $req){
       
        $member = Member::select('id', 'chart_parent_prefer_direction', 'chart_parent_id','referral_id')
        ->with([
            'referral:id,user_id,rank_id,chart_prefer_direction', 
            
        ])
        ->find($req->memberId)
        ; 
        //return $member; 
        if($member){
            return PV::createChartNode($member); 
        }else{
            return ['invalid member']; 
        }

        


    }

    

   
}
