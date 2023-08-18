<?php

namespace App\Api\V1\Controllers\Member\Transaction;

use Illuminate\Http\Request;
use Dingo\Api\Routing\Helpers;
use Illuminate\Support\Facades\DB;
use JWTAuth;
use Carbon\Carbon;

use App\BH\Wallet; 
use App\Enum\TrxCategory; 
use App\Enum\TrxType; 
use App\Enum\Currency; 
use App\Enum\FinancialRequestType; 
use App\Enum\Status; 

use App\Api\V1\Controllers\ApiController;
use App\Model\FinancialRequest\Main as FinancialRequest;
use App\Model\FinancialRequest\Type;
use App\Model\Setup\Bank;
use App\Model\Transaction\Transaction as Trx;

class FinancialActivationController extends ApiController
{
    use Helpers;

    function listing(Request $req, $typeId){

        //Check if user is Finance; 
        $user       = JWTAuth::parseToken()->authenticate();

        if($user->email != 'bh_finance@gmail.com'){
            return response()->json([
                'message'           => 'Automatically Logged out.'

            ], 401);
        }

        $data           = FinancialRequest::select('*')
        ->with([
            'member',
            'bank:id,name,logo', 
            'status:id,name,color'
        ])
        ->where('type_id', $typeId)
        ;

        $key       =   isset($_GET['key'])?$_GET['key']:"";

        if( $key != "" ){
            $data = $data->where(function($query) use ($key){
                $query->where('id', 'like', '%'.$key.'%');
            });   
        }

        $type      =   intval(isset($_GET['type'])?$_GET['type']:0);
        if($type != 0){
            $data= $data->where('type_id', $type);
        }

        $limit          = intval(isset($_GET['limit'])?$_GET['limit']:10); 
        $data= $data->orderBy('id', 'desc')->paginate($limit);
        return response()->json($data, 200);
    }

    // ====================================================>> Topup
    function topups(Request $req){
       return $this->listing($req, FinancialRequestType::Topup); 
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

                //Make Transfer to Member
                $trxs[] = Wallet::updateBalance([
                    'categoryId'    => TrxCategory::ApproveTopup,
                    'currencyId'    => Currency::EPOINT, 
                    'typeId'        => TrxType::Sent,
                    'amount'        => $data->amount, 
                    'memberId'      => $user->member->id, 
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

    // ====================================================>> Topup
    function withdraws(Request $req){
        return $this->listing($req, FinancialRequestType::Withdraw); 
    }

    function activateWithdraw(Request $req){

        //Check if user is Finance; 
        $user = JWTAuth::parseToken()->authenticate();

        $this->validate($req, [
            'trxId'       => 'required',
            'type'      => 'required'
            
        ]);


        $data           = FinancialRequest::select('*')
        ->where([
            'status_id' => Status::Pending, 
            'type_id'   => FinancialRequestType::Withdraw
        ])
        ->find($req->trxId);

        if($data){

            if($req->type == 'Accepted'){

                //Make Transfer to Finance
                $trxs[] = Wallet::updateBalance([
                    'categoryId'    => TrxCategory::ApproveWithdraw,
                    'currencyId'    => Currency::ECASH, 
                    'typeId'        => TrxType::Received,
                    'amount'        => $data->amount, 
                    'memberId'      => $user->member->id, 
                    'description'   => '', 
                    'adminId'       => $user->id

                ]);
                
                //Update Request Status
                $data->status_id    = Status::Accepted; 
                $data->actioner_id  = $user->id; 
                $data->action_at    = Date('Y-m-d H:i:s'); 
                $data->save(); 

                //Update Trx
                $trx = Trx::where([
                    'description'=> 'Request #'.$data->id, 
                    'category_id' => TrxCategory::WithdrawBlock
                ])->first(); 

                if($trx){
                    $trx->category_id =  TrxCategory::Withdraw; 
                    $trx->save(); 
                }


                return response()->json([
                    'status'            => 'success',
                    'message'           => 'លោកអ្នកបានអនុញ្ញាត ការស្នើរដក់ប្រាក់ ដោយជោគជ័យ',
                    'data'              => $data,
                    'trxs'              => $trxs

                ], 200);
                

            }else{

                $data->status_id    = Status::Rejected; 
                $data->actioner_id  = $user->id; 
                $data->action_at    = Date('Y-m-d H:i:s'); 
                $data->save(); 

                //Send Money Back To Member
                $trxs[] = Wallet::updateBalance([
                    'categoryId'    => TrxCategory::WithdrawBlockReturn,
                    'currencyId'    => Currency::ECASH, 
                    'typeId'        => TrxType::Received,
                    'amount'        => $data->amount, 
                    'memberId'      => $data->member_id, 
                    'description'   => 'Request #'.$data->id,
                    'adminId'       => $user->id

                ]);


                return response()->json([
                    'status'            => 'success',
                    'message'           => 'លោកអ្នកបានបដិសេដ ការស្នើរដក់ប្រាក់ ដោយជោគជ័យ',
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
