<?php

namespace App\Api\V1\Controllers\CP\Finance;

use Illuminate\Http\Request;
use App\Api\V1\Controllers\ApiController;
use Dingo\Api\Routing\Helpers;
use JWTAuth;
use App\Model\FinancialRequest\Main as FinancialRequest;

use App\BH\Wallet; 
use App\Enum\TrxCategory; 
use App\Enum\TrxType; 
use App\Enum\Currency; 
use App\Enum\FinancialRequestType; 
use App\Enum\Status; 

class FinanceActivationController extends ApiController
{
    use Helpers;
    function topups(Request $req){
        
        $data = FinancialRequest::select('id', 'member_id', 'type_id', 'bank_id', 'amount', 'bank_account', 'bank_number', 'status_id', 'created_at')
        ->where('type_id', FinancialRequestType::Topup)
        ->with(
            'member:id,user_id', 
            'type:id,name', 
            'bank:id,name,logo', 
            'status:id,name,color'
            )
        ;

         // key search API
         $key       =   isset($_GET['key']) ? $_GET['key'] : "";
         if ($key != "") {
             $data = $data->where(function ($query) use ($key) {
                 $query->where('name', 'like', '%' . $key . '%');
             });
         }

          // ==============================>> Keyword
          if( $req->key && $req->key !="" ){
            $data = $data->whereHas('user', function($q) use($req){
                $q->where('name', 'like', $req->key)->orWhere('phone', 'like', $req->key)->orWhere('email', 'like',  $req->key)->orWhere('uid', 'like', $req->key)->orWhere('ID', 'like', $req->key);
            });
        }

        if($req->status != ''){
            $data = $data->where('status_id',$req->status);
        }

           // ==============================>> Date Range
        if($req->from && $req->to && isValidDate($req->from) && isValidDate($req->to)){
            $data = $data->whereBetween('created_at', [$req->from." 00:00:00", $req->to." 23:59:59"]);
        }

        $data = $data->orderBy('id', 'desc')->paginate( $req->limit ? $req->limit : 10);
        return response()->json($data, 200);
    }

    function activateTopup(Request $req){

        //Check if user is Finance; 
        $user = JWTAuth::parseToken()->authenticate();

        $this->validate($req, [
            'trxId'         => 'required',
            'type'          => 'required'
            
        ]);


        $data           = FinancialRequest::select('*')
        ->where([
            'status_id' => Status::Pending, 
            'type_id'   => FinancialRequestType::Topup
        ])
        ->find($req->trxId);

        if($data){

            if($req->type == 'Accepted'){

                //Make Transfer to Member
                $trxs[] = Wallet::updateBalance([
                    'categoryId'    => TrxCategory::Topup,
                    'currencyId'    => Currency::EPOINT, 
                    'typeId'        => TrxType::Received,
                    'amount'        => $data->amount, 
                    'memberId'      => $data->member_id, 
                    'description'   => '', 
                    'adminId'       => $user->id

                ]);

              

                $data->status_id    = Status::Accepted; 
                $data->actioner_id  = $user->id; 
                $data->action_at    = Date('Y-m-d H:i:s'); 
                $data->save(); 

                $data           = FinancialRequest::select('*')
                ->with([
                    'status'
                ])
                ->find($req->trxId);

                return response()->json([
                    'status'            => 'success',
                    'message'           => 'លោកអ្នកបានអនុញ្ញាត ដាក់ប្រាក់ ដោយជោគជ័យ',
                    'data'              => $data,
                    'trxs'              => $trxs

                ], 200);

            }else{

                $data->status_id    = Status::Rejected; 
                $data->actioner_id  = $user->id; 
                $data->action_at    = Date('Y-m-d H:i:s'); 
                $data->save(); 

                $data           = FinancialRequest::select('*')
                ->with([
                    'status'
                ])
                ->find($req->trxId);

                return response()->json([
                    'status'            => 'success',
                    'message'           => 'លោកអ្នកបាន បដិសេដ ការស្នើរដាក់ប្រាក់ ដោយជោគជ័យ',
                    'data'              => $data

                ], 200);

            }

            
        }else{
            return response()->json([
                'message'           => 'ទិន្ន័យមិនត្រឹមត្រូវ'

            ], 400);
        }

       


    }



}
