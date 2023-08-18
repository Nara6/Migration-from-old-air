<?php

namespace App\Api\V1\Controllers\CP\Member;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\CamCyber\FileUpload;
use App\Api\V1\Controllers\ApiController;
use App\Model\Member\DistributorRequest;
use App\Model\Member\DistributorType;
use App\Model\Member\Main as Member;
use App\Enum\DistributorStatus;
use App\Enum\Status;

class DistributorActivationController extends ApiController
{
    use Helpers;

    function getStockType(Request $req){
        return DistributorType::get(); 
    }

    function listing(Request $req){

      

        $data   = DistributorRequest::select('*')

                ->with([
                    'member', 
                    'type', 
                    'status'
                ]);

        if($req->from && $req->to && isValidDate($req->from) && isValidDate($req->to)){
            $data = $data->whereBetween('created_at', [$req->from." 00:00:00", $req->to." 23:59:59"]);
        }
       

        // =========================== Search distribute id
        if( $req->status){
            $data = $data->where('status_id', $req->status);
        }

        if( $req->type){
            $data = $data->where('type_id', $req->type);
        }

        $data = $data->orderBy('id', 'desc')->paginate( $req->limit ? $req->limit : 10);
        return response()->json($data, 200);

    }


    function action(Request $req){

        /** To find distributorRequest valid or not */
        $data = distributorRequest::select('*')
        //->where('status_id', Status::Pending)
        ->find($req->id);

        if(!$data){

            return response()->json([
                'status'  => 'fail',
                'message' => 'រកមិនឃើញកំណត់ត្រា។'
            ], 404);
        }

        /** CHECK STATUS */
        if($req->status != 'ACCEPT' || $req->status != 'REJECT'){
            
             $user        = JWTAuth::parseToken()->authenticate();
          
             /** update record to approve or reject */
             $data->status_id =  $req->status == 'ACCEPT' ? Status::Accepted : Status::Rejected;
             $data->action_at = Date('Y-m-d H:i:s'); 
             $data->action_id = $user->id; 
             $data->save();
 
             /** If status Reject stop action */
             if($data->status_id == Status::Rejected){
                 return response()->json([
                     'status'  => 'success',
                     'message' => ' សំណើរត្រូវបានបដិសេដ '
                 ], 200);
             }else{
                 
                /** Update distributor By stock type and position */
                $member = Member::find($data->member_id);
                /** check if not distributor */
                if(!$member){
                    return response()->json([
                        'status'  => 'fail',
                        'message' => 'រកមិនឃើញកំណត់ត្រា។'
                    ], 400);
                }
            
                $member->distributor_type_id =  $data->distributor_type_id;
                $member->save();
                
                return response()->json([
                    'status'  => 'success',
                    'message' => ' សំណើរត្រូវបានអនុម័ត ', 
                    'member' => $member, 
                    'request' => $data
                ], 200);
             }
             
            

        }else{
            return response()->json([
                'status'  => 'fail',
                'message' => ' សូមបំពេញស្ថានភាព '
            ], 400);
        }

           
    }


 

}
