<?php

namespace App\Api\V1\Controllers\Member\Transaction;

use Illuminate\Http\Request;
use Dingo\Api\Routing\Helpers;
use Illuminate\Support\Facades\DB;
use JWTAuth;
use Carbon\Carbon;

use App\CamCyber\FileUpload;

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


class FinancialRequestController extends ApiController
{
    use Helpers;


    function listing(Request $req, $typeId){

        $data           = FinancialRequest::select('*')
        ->with([
            'bank:id,name,logo', 
            'status:id,name,color'
        ])
        ->where('type_id', $typeId)
        ;
        
        $user       = JWTAuth::parseToken()->authenticate();
        $data       = $data->where('member_id', $user->member->id); 
        
        

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

    function requestTopup(Request $req){
        $this->validate($req, [
            'amount'        => 'required|numeric',
            'bank_id'       => 'required',
            'bank_trx'      => 'required'
            
        ], 
        [
            
            'bank_id.required'      => 'Please select bank .',
            'amount.required'       => 'Please enter amount.',
            'amount.numeric'        => 'Amount must be number.',
        ]);


        $user = JWTAuth::parseToken()->authenticate();
        //return $user; 
       

        $data                    = new FinancialRequest();
        $data->member_id         = $user->member->id;
        $data->bank_id           = $req->input('bank_id');
        $data->type_id           = FinancialRequestType::Topup; 
        $data->status_id         = Status::Pending; 
        $data->amount            = $req->input('amount');
        $data->bank_trx          = $req->input('bank_trx');
       
        $date_today = Carbon::today()->format('d').'-'.Carbon::today()->format('M').'-'.Carbon::today()->format('Y');    
        if($req->attachment){
            $image     = FileUpload::uploadFileV2( $req->attachment, 'attachment/'.$date_today , '');
            if($image['url']){
                $data->attachment = $image['url'];
            }
        }
        //dd($req->attachment);

        $data->save();

        $data           = FinancialRequest::select('*')
        ->with([
            'bank:id,name,logo', 
            'status:id,name,color'
        ])
        ->find($data->id);

        return response()->json([
            'status'            => 'success',
            'message'           => 'បានបង្កើតដោយជោគជ័យ',
            'data'              => $data,

        ], 200);


    }

    function cancelTopup(Request $req){
        $this->validate($req, [
            'trxId'      => 'required'
            
        ]);


        $user = JWTAuth::parseToken()->authenticate();

        $data           = FinancialRequest::select('*')
        ->where([
            'member_id' => $user->member->id, 
            'status_id' => Status::Pending, 
            'type_id'   => FinancialRequestType::Topup
        ])
        ->find($req->trxId);

        if($data){
            
            $data->status_id = Status::Cancelled;
            $data->action_at = Date('Y-m-d H:i:s'); 
            $data->save();


            $data           = FinancialRequest::select('*')
            ->with([
                'bank:id,name,logo', 
                'status:id,name,color'
            ])
            ->find($data->id);

            return response()->json([
                'message'           => 'លោកអ្នកបានបោះបង់ ការស្នើរដាក់ប្រាក់',
                'data'              => $data,

            ], 200);

        }else{
            return response()->json([
                'message'           => 'ទិន្ន័យមិនត្រឹមត្រូវ'

            ], 400);
        }

        

       


    }

    // ====================================================>> Withdraw

    function withdraws(Request $req){
        return $this->listing($req, FinancialRequestType::Withdraw); 
    }

    function getBalance(Request $red){

        $user = JWTAuth::parseToken()->authenticate();
        $balance = Wallet::checkBalance($user->uid, Currency::ECASH); 

        return $balance;

    }

    function requestWithdraw(Request $req){

        $this->validate($req, [
            'amount'        => 'required|numeric',
            'bank_id'       => 'required|exists:bank,id',
            'bank_number'   => 'required', 
            'bank_account'  => 'required'
            
        ], 
        [ 
            'bank_id.required'      => 'Please select bank .',
            'amount.required'       => 'Please enter amount.',
            'amount.numeric'        => 'Amount must be number.',
        ]);


        $user = JWTAuth::parseToken()->authenticate();

        //Check Balance
        $balance = Wallet::checkBalance($user->uid, Currency::ECASH); 
        
        //Check if having pending Request Withdraw Trx
        $pendingTrxs = FinancialRequest::where([
            'type_id'   => FinancialRequestType::Withdraw, 
            'member_id' => $user->member->id, 
            'status_id' => Status::Pending
        ])
        ->get(); 

        if(count($pendingTrxs) > 0){
            return response()->json([
                'message'           => 'លោកអ្នកមានការស្នើរដក់ប្រាក់មិនទាន់បានយល់ព្រម។ សូមធ្វើការបោះបង់សិន',
                'data'              => $pendingTrxs
            ], 200);
        }

       

        if($balance >= $req->amount){
            
            $data                    = new FinancialRequest();
            $data->member_id         = $user->member->id;
            $data->bank_id           = $req->input('bank_id');
            $data->type_id           = FinancialRequestType::Withdraw; 
            $data->status_id         = Status::Pending; 
            $data->amount            = $req->input('amount');
            $data->bank_number       = $req->input('bank_number');
            $data->bank_account      = $req->input('bank_account');
        
            $data->save();

            $data           = FinancialRequest::select('*')
            ->with([
                'bank:id,name,logo', 
                'status:id,name,color'
            ])
            ->find($data->id);

            //Make Pending Withdraw
            $trx = Wallet::updateBalance([
                'categoryId'    => TrxCategory::WithdrawBlock,
                'currencyId'    => Currency::ECASH, 
                'typeId'        => TrxType::Sent,
                'amount'        => $data->amount, 
                'memberId'      => $data->member_id, 
                'description'   => 'Request #'.$data->id
            ]);

            return response()->json([
                'message'           => 'បានបង្កើតដោយជោគជ័យ',
                'data'              => $data,
                'trx'               => $trx

            ], 200);

        }else{
            return response()->json([
                'status_code'   =>  400,
                'message'           => 'លោកអ្នកពុំមានទឹកប្រាក់គ្រប់គ្រាន់សម្រាប់ដកទេ',
            ], 400);
        }


    }

    function cancelWithdraw(Request $req){
        $this->validate($req, [
            'trxId'      => 'required'
            
        ]);


        $user = JWTAuth::parseToken()->authenticate();

        $data           = FinancialRequest::select('*')
        ->where([
            'member_id' => $user->member->id, 
            'status_id' => Status::Pending, 
            'type_id'   => FinancialRequestType::Withdraw
        ])
        ->find($req->trxId);

        if($data){
            
            $data->status_id = Status::Cancelled;
            $data->action_at = Date('Y-m-d H:i:s'); 
            $data->save();

            //Revert Money Back to Member
            $trx = Wallet::updateBalance([
                'categoryId'    => TrxCategory::WithdrawBlockReturn,
                'currencyId'    => Currency::ECASH,
                'typeId'        => TrxType::Received,
                'amount'        => $data->amount,
                'memberId'      => $data->member_id,
                'description'   => 'Return #'.$data->id
            ]);


            //Refresh Data
            $data           = FinancialRequest::select('*')
            ->with([
                'bank:id,name,logo', 
                'status:id,name,color'
            ])
            ->find($req->trxId);

            return response()->json([
                'message'           => 'លោកអ្នកបានបោះបង់ ការស្នើរដក់ប្រាក់',
                'data'              => $data,

            ], 200);

        }else{
            return response()->json([
                'message'           => 'ទិន្ន័យមិនត្រឹមត្រូវ'

            ], 400);
        }

        

       


    }
    
    


}
