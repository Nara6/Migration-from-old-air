<?php

namespace App\Api\V1\Controllers\CP\Sale;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;
use App\BH\Bot\BotOrder;

use Carbon\Carbon;

use App\BH\Stock;
use App\BH\Commission; 
use App\BH\PV; 
use App\BH\Wallet; 

use App\Enum\TrxType; 
use App\Enum\TrxCategory; 
use App\Enum\Currency; 
use App\Enum\Status; 
use App\Enum\PaymentType; 

use App\Api\V1\Controllers\ApiController;

use App\Model\Member\Main as buyer;
use App\Model\Member\Stock as MemberStock;
use App\Model\Order\Order;
use App\Model\Package\Main as Package;


use App\Model\Product\Product;


class SaleController extends ApiController
{
    use Helpers;
   
    function listing(Request $req){
       
        $data           = Order::select('id',  'receipt_number','member_id','package_id', 'status_id',  'ordered_at', 'action_at', 'payment_type_id', 'total_price', 'total_pv')
        ->with([
            'status',
            'member',
            'package'
        ]);
                
       
        if($req->status){
            $data = $data->where('status_id', $req->status); 
        }
        // =========================== Search receipt number
        if( $req->key && $req->key !="" ){
            $data = $data->where('receipt_number', $req->key);
        }
       
        $data = $data->orderBy('id', 'desc')
        ->paginate( $req->limit ? $req->limit : 10);
        return response()->json($data, 200);

    }
    function view($invoiceNumber){
       
        $data           = Order::select('id',  'receipt_number','member_id','package_id', 'status_id',  'ordered_at', 'action_at', 'payment_type_id', 'total_price', 'total_pv')
        ->with([
            'status',
            'member',
            'package'
        ])
        ->where('receipt_number', $invoiceNumber)
        ->first();
        if($data){
           
            return [
                'data'      => $data,

            ];
        }else{
            return response()->json([
                'status'  => 'fail',
                'message' => 'Record not found. '.$invoiceNumber
            ], 400);
        }
    }


 
    function action(Request $req){

        // Request Validation
        $this->validate($req, [
            'action'            => 'required',
            'receipt_number'    => 'required|exists:order,receipt_number'
        ]);

        $user         = JWTAuth::parseToken()->authenticate();
        
        // Check if Order is valid. 
        $order = Order::where('receipt_number', $req->receipt_number)
        ->where('status_id', Status::Pending)
        ->first(); 

        if($order){

            //Update Order
            if($req->action == 'Accepted'){

                $order->status_id = Status::Accepted; 
                $order->action_at = now(); 
                $order->save(); 

                return response()->json([
                    'status'    => 'success',
                    'message'   => "ផលិតផលមិនត្រឹមត្រូវ",
                ], 400);
               

            }else{

                $order->status_id = Status::Rejected; 
                $order->action_at = now(); 
                $order->save(); 

                return response()->json([
                    'status'    => 'success',
                    'message'   => "លោកអ្នកបានបដិសេដការទិញនេះ", 
                ], 200);

            }
          
        }else{
            return response()->json([
                'status' => 'error',
                'message' => "ព័តមានមិនត្រឹមត្រូវ", 
            ], 400);
        }    
    }

    function getReceiptNumber(){
        $number = rand(1000000000, 99999999); 

        $check = Order::where('receipt_number', $number)->first(); 
        if($check){
            return $this->getReceiptNumber(); 
        }

        return $number; 
    }

    function getRebatePrice($type, $rebates){
        return [
            'type' => $type, 
            'rebates' => $rebates
        ];
    }

   
}
