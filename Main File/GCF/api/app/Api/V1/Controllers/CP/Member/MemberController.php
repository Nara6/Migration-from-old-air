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
use App\Model\Setup\Province;
use App\Model\Setup\District;
use App\Model\Setup\Role;
use App\Model\Transaction\Transaction;
use App\Model\Subscription\Main as Subscription;

use Carbon\Carbon;


// Import Resource
use App\Api\V1\Resources\Product\ProductResource;
use App\Api\V1\Resources\Product\ProductCollection;

class MemberController extends ApiController
{
    use Helpers;
    function listing(Request $req) {
      
        $data = Member::select('id','user_id','referral_id','rank_id','pv','created_at')
        ->with([
            'user',
            'rank',
            'referral'

        ]); 

        // ==============================>> Keyword
        if( $req->key && $req->key !="" ){
            $data = $data->whereHas('user', function($q) use($req){
                $q->where('name', 'like', $req->key)->orWhere('phone', 'like', $req->key)->orWhere('email', 'like',  $req->key)->orWhere('uid', 'like', $req->key);
            });
        }

        // ==============================>> Date Range
        if($req->from && $req->to && isValidDate($req->from) && isValidDate($req->to)){
            $data = $data->whereBetween('created_at', [$req->from." 00:00:00", $req->to." 23:59:59"]);
        }

        // ==============================>> referral
        if($req->referral){
            $data = $data->where('referral_id', $req->referral); 
        }

        $data = $data->orderBy('id', 'desc')->paginate( $req->limit ? $req->limit : 10);
        return response()->json($data, 200);
    }

    function view($id = 0){

        $data = Member::select('id','user_id','referral_id','rank_id','pv','created_at')
        ->with([
            'user',
            'rank',
            'referral'

        ])
        ->find($id); 

        if($data){
            $data = new ProductResource($data);
            return response()->json($data, 200);
        }else{
            return response()->json([
                'status'  => 'fail',
                'message' => 'រកមិនឃើញកំណត់ត្រា។'
            ], 404);
        }

       
        
    }

    function update(Request $request, $id=0){
     
        $admin     = JWTAuth::parseToken()->authenticate();
        $member    = Member::select('*')->find($id);

        if($member){

            $user = $member->user; 

            $this->validate($request,[

                'name' => 'required|max:150',
                'phone' =>  [
                                'required', 
                                'min:9',
                                'max:10',
                                'regex:/(^[0][0-9].{7}$)|(^[0][0-9].{8}$)/', 
                                Rule::unique('user', 'phone')->ignore($member->user->id)
                            ],
                // 'email'=>   [
                //                 'sometimes',  
                //                 'email', 
                //                 'max:100', 
                //                 Rule::unique('user', 'email')->ignore($member->user->id)
                //             ],
                        ],[
                'name.required'       =>   'Please enter your name.',
                'name.max'            =>   'Name has been digit  to 60.',

                'phone.required'      =>   'Please enter your phone number.',
                'phone.regex'         =>   'Phone number is required.EX 0964737335',
                'phone.min'           =>   'Phone number  ',
                'phone.max'           =>   'Phone number has been digit to 10',

                //'email.email'         =>   'Email is required.',
                //'email.max'           =>   'email has been digit  to 100.',
              
            ]);

            $user->name_kh  = $request->name_kh;
            $user->name     = $request->name;
            $user->phone    = $request->phone;
            $user->email    = $request->email;
            $user->address  = $request->address;

            $user->save();

            $last = Member::select('id')->orderBy('id', 'DESC')->first();
            $id = 0;
            if($last){
                $id = $last->id+1;
            }

             //Need to create folder before storing images
            $date_today = Carbon::today()->format('d').'-'.Carbon::today()->format('M').'-'.Carbon::today()->format('Y');    
            if($request->avatar){
                $user  = FileUpload::uploadFileV2( $request->avatar, 'user/'.$date_today , '');
                if($user['url']){
                    $user->avatar = $user['url'];
                }
            }

            $member->save();
                            
            return response()->json([
                'status' => 'success',
                'message' => 'ទិន្នន័យត្រូវបានធ្វើបច្ចុប្បន្នភាព។', 
                'member' => $member
            ], 200);

        }else{
            return response()->json([
                'status' => 'fail',
                'message' => 'កំណត់ត្រាអតិថិជនមិនត្រឹមត្រូវ។', 
            
            ], 400);
        }
    }

    function changePassword(Request $request, $id=0){

        $this->validate($request, [
            'password' => 'required|min:6|max:60',
        ]);
        $admin     = JWTAuth::parseToken()->authenticate();
        $member    = Member::select('*')->find($id);
        //$user = User::find($id); 
        if($member){
            $user = $member->user; 
            $user->password = bcrypt($request->input('password'));
            $user->save();

            return response()->json([
                //'user' => $member,
                'status' => 'success',
                'message' => 'ពាក្យសម្ងាត់ត្រូវបានធ្វើបច្ចុប្បន្នភាពដោយជោគជ័យ។', 
               
            ], 200);
        }else{
            return response()->json([
                'status' => 'fail',
                'message' => 'សមាជិកមិនត្រឹមត្រូវ', 
               
            ], 404);
        }
        
        
    }
    function listReferral(Request $req ,$id = 0){

        $data   = Member::select('id', 'user_id', 'referral_id', 'rank_id', 'rank_expired','left_downline','right_downline', 'personal_pv', 'left_pv','right_pv', 'left_pv_total', 'right_pv_total','distributor_name','distributor_contract_started', 'distributor_contract_expired', 'created_at')
        ->where('referral_id',$id)
        ->with([
            'user',
            'rank']);

        $data = $data->orderBy('id', 'desc')->paginate( $req->limit ? $req->limit : 100);
        return response()->json($data, 200);

    
    }
    function listTransaction(Request $req ,$id = 0){

        $data   = Transaction::select('*')
        ->with([
            'category'
        ])
        ->where('member_id',$id);

        $data = $data->orderBy('id', 'desc')->paginate( $req->limit ? $req->limit : 100);
        return response()->json($data, 200);

    
    }

}
