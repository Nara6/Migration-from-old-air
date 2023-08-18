<?php

namespace App\Api\V1\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use JWTAuth;
use App\Api\V1\Controllers\ApiController;
use App\Model\Member\Main as Member;


class LookUpController extends ApiController
{

    public function verifyUid(Request $request) {
      
        $this->validate($request, [
         
            'uid'      => 'required',
           
        ], [

            'uid.required'=>'Please your inter UID', 

        ]);

        //Check for valid uid
        $uid = Member::select('id','user_id', 'rank_id')->whereHas('user', function($query) use ($request){
            $query->where('uid', $request->uid); 
        })
        ->with([
            'user:id,name_kh,name,uid,email,phone', 
            'rank'
        ])
        // ->whereHas('subscriptions')
        ->first(); 
        if($uid){
            
            return response()->json([
                'member'        => $uid,
                'status'        => 'success',
                'message'       => 'គណនីត្រូវ! លោកអ្នកអាចចុះឈ្មោះបាន', 
               
            ], 200); 

        }else{

            return response()->json([
                'status'        => 'fail',
                'message'       => 'ព័ត៌មានបញ្ជូនមិនត្រឹមត្រូវ។ សូមពិនិត្យម្តងទៀត។'
            ], 200); 
        }

          
    }

  
}
