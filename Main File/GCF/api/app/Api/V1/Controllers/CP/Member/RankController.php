<?php

namespace App\Api\V1\Controllers\CP\Member;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use Carbon\Carbon;
use JWTAuth;

use App\CamCyber\FileUpload;

use App\Api\V1\Controllers\ApiController;
use App\Model\Member\Rank;
use App\Model\Member\Main as Member;

class RankController extends ApiController
{
    use Helpers;

    function getRank(){

        $data   = Rank::select('*')
            
                ->withCount([
                    'members as n_of_members'
                ])->get();

        return $data; 
    }

    function changeRank(Request $request){
     
        $admin     = JWTAuth::parseToken()->authenticate();
        $member    = Member::select('*')->find($request->memberId);
      
        if($member){

            $rank = Rank::find($request->rankId); 
            
            if($rank){

                $member->rank_id = $rank->id; 
                $member->rank_expired = Carbon::today()->addDays(30)->format('Y-m-d'); 
                $member->save(); 

                return response()->json([
                   
                    'message' => 'ទិន្នន័យត្រូវបានធ្វើបច្ចុប្បន្នភាព។', 
                   
                ], 200);

            }else{
                return response()->json([
                   
                    'message' => 'Rank មិនត្រឹមត្រូវ', 
                   
                ], 400);
            }

           
        }else{
            return response()->json([
                'message' => 'Member មិនត្រឹមត្រូវ', 
            
            ], 400);
        }
    }

    function updateRank(Request $req,$id=0){

        $this->validate($req, [

            'icon'                  => 'required',
            'name'           => 'required|max:100',
        ], [
           

            'name.required'          => 'Please enter name in name.',
            'name.max'               => 'Name must not be more then 100 chanters.',

            'icon.required'            => 'Please input icon'

        ]);

        //========================================================>>>> Start to update
        

        /** update  Rank */
        $data                                   = Rank::find($id);
        
        $data->name                             = $req->input('name');
        $data->min_required_pv                  = $req->input('min_required_pv');
        // $data->activated_price                  = $req->input('activated_price');
        // $data->min_weak_direct_downward_pv      = $req->input('min_weak_direct_downward_pv');
        // $data->max_referral_daily_earn          = $req->input('max_referral_daily_earn');
        // $data->dual_team                        = $req->input('dual_team');


        //Need to create folder before storing images
        $date_today = Carbon::today()->format('d').'-'.Carbon::today()->format('M').'-'.Carbon::today()->format('Y');    
        if($req->icon){
            $image     = FileUpload::uploadFileV2( $req->icon, 'rank/'.$date_today , '');
            if($image['url']){
                $data->icon = $image['url'];
            }
            
        }
        //dd($image);
        $data->save();

            return response()->json([
                'status' => 'success',
                'message' => 'បានធ្វើបច្ចុប្បន្នភាពដោយជោគជ័យ',
                'data' => $data,
            ], 200);
    }
 

}
