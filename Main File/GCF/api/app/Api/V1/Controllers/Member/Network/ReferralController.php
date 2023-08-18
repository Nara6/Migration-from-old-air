<?php

namespace App\Api\V1\Controllers\Member\Network;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;
use Carbon\Carbon;

use App\CamCyber\FileUpload;
use App\Api\V1\Controllers\ApiController;
use App\BH\Account;
use App\Model\User\Main as User;
use App\Model\Member\Main as Member;
use App\Model\Member\Rank as Rank;

use App\Model\Setup\Province;

class ReferralController extends ApiController
{
    use Helpers;
   
    function listing(Request $req) {

        $user         = JWTAuth::parseToken()->authenticate();

        $data = Member::select('id','user_id','referral_id','rank_id','pv','created_at')
        ->with([
            'user',
            'rank'
        ]) 
        ->where('referral_id', $user->member->id);

        $data = $data->orderBy('id', 'desc')->paginate( $req->limit ? $req->limit : 10);
        return response()->json($data, 200);
    }
 
} 
