<?php

namespace App\Api\V1\Controllers\CP\Finance;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Dingo\Api\Routing\Helpers;
use JWTAuth;
use App\CamCyber\FileUpload;
use App\Api\V1\Controllers\ApiController;
use App\Model\Setup\Bank; 

use Carbon\Carbon;


class BankController extends ApiController
{
    use Helpers;
   
    function getBank(){

        $data = Bank::select('id', 'name', 'logo', 'number',  'account', 'created_at')->get();

        return response()->json($data, 200);
    }

    function viewBank($id = 0){
        $data =  Bank::select('id', 'name', 'logo', 'number',  'account', 'created_at')
        ->find($id);

        if($data){
            return response()->json($data, 200);
        }else{
            return response()->json([
                'status'  => 'fail',
                'message' => 'Record not found. '
            ], 404);
        }
    }

    function createBank(Request $req){
        $this->validate($req, [
            
            'name'     => 'required|max:50',

        ],[
            
            'name.required'                        => 'សូមបញ្ចូលឈ្មោះ​',

        ]);

        /** Create Bank */
        $data               = new Bank();
        $data->name         = $req->input('name');
        $data->logo         = $req->input('logo');
        $data->created_at   = now();

        $date_today = Carbon::today()->format('d').'-'.Carbon::today()->format('M').'-'.Carbon::today()->format('Y');    
        if($req->logo){
            $image     = FileUpload::uploadFileV2( $req->logo, 'product/'.$date_today , '');
            if($image['url']){
                $data->logo = $req->logo;
            }
        }

        $data->save();

        return response()->json([
            'status'            => 'success',
            'message'           => 'បានបង្កើតដោយជោគជ័យ',
            'bank'           => $data,

        ], 200);

    }

    function updateBank(Request $req, $id = 0){
        $this->validate($req, [
            
            'name'     => 'required|max:50',

        ],[
            
            'name.required'                        => 'សូមបញ្ចូលឈ្មោះ​',

        ]);
 
        $bank               = Bank::find($id);
        $bank->name         = $req->input('name');
        $bank->created_at   = now();

        $date_today = Carbon::today()->format('d').'-'.Carbon::today()->format('M').'-'.Carbon::today()->format('Y');    
        if($req->logo){
            $image     = FileUpload::uploadFileV2( $req->logo, 'product/'.$date_today , '');
            if($image['url']){
                $data->logo = $req->logo;
            }
        }

        $bank->save();

        return response()->json([
            'status'            => 'success',
            'message'           => 'បានបង្កើតដោយជោគជ័យ',
            'bank'              => $bank,

        ], 200);
    
    }

    function deleteBank($id=0){
        $data = Bank::find($id);
        if(!$data){
            return response()->json([
                'message' => 'រកមិនឃើញទិន្នន័យ', 
            ], 500);
        }
        $data->delete();

        return response()->json([
            'status'    => 'success',
            'message'   => 'ទិន្នន័យត្រូវបានលុបចោល។ ',
        ], 200);
    }
}
