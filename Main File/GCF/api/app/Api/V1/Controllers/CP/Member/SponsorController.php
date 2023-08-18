<?php

namespace App\Api\V1\Controllers\CP\Member;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\CamCyber\FileUpload;
use App\Api\V1\Controllers\ApiController;
use App\Model\User\Main as User;
use App\Model\Member\Main as Member;

// Import Resource
use App\Api\V1\Resources\Product\ProductResource;
use App\Api\V1\Resources\Product\ProductCollection;

class SponsorController extends ApiController
{
    use Helpers;
    
    function changeSponsor(Request $request){
     
        $admin     = JWTAuth::parseToken()->authenticate();
        $member    = Member::select('*')->find($request->memberId);
      
        if($member){

            $sponsor = Member::whereHas('user', function($query) use ($request) {
                $query->where('uid', $request->new_ref_uid);
            })
            ->first();
            
            if($sponsor){

                $member->referral_id = $sponsor->id; 
                $member->save(); 

                return response()->json([
                   
                    'message' => 'ទិន្នន័យត្រូវបានធ្វើបច្ចុប្បន្នភាព។', 
                   
                ], 200);

            }else{
                return response()->json([
                   
                    'message' => 'Sponsor មិនត្រឹមត្រូវ', 
                   
                ], 400);
            }

           
        }else{
            return response()->json([
                'message' => 'Member មិនត្រឹមត្រូវ', 
            
            ], 400);
        }
    }


}
