<?php

namespace App\Api\V1\Controllers\Member\Order;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;
use Carbon\Carbon;

use App\BH\Bot\BotOrder;
use App\Enum\Status; 
use App\Enum\PaymentType; 

use App\BH\Stock;
use App\BH\Bonus; 

use App\Api\V1\Controllers\ApiController;

use App\Model\Member\Main as Member;
use App\Model\Member\Stock as MemberStock;
use App\Model\Order\Order;
use App\Model\Product\Package;
use App\Model\Setup\Status as Main;

class OrderController extends ApiController
{
    use Helpers;
   
    function listing(Request $req){
       
        $data           = Order::select('id', 'receipt_number', 'status_id', 'member_id', 'ordered_at', 'action_at', 'payment_type_id', 'total_price', 'total_pv')
        ->with([
            'status', 
          //  'seller',
         //   'details',
        ]);
        
        $user       = JWTAuth::parseToken()->authenticate();
        $data = $data->where('member_id', $user->id); 

       // ==============================>> Date Range
       if($req->from && $req->to && isValidDate($req->from) && isValidDate($req->to)){
            $data = $data->whereBetween('created_at', [$req->from." 00:00:00", $req->to." 23:59:59"]);
        }
      // =========================== Search receipt number
        if( $req->receipt_number && $req->receipt_number !="" ){
            $data = $data->where('receipt_number', $req->receipt_number);
        }
        //==========================Transaction ID
        if($req->trx && $req->trx != '' ){
            $data = $data->where('id', $req->trx);
        }
        //============================ Status
        if($req->status != ''){
            $data = $data->where('status_id',$req->status);
        }
        $data = $data->orderBy('id', 'desc')->paginate( $req->limit ? $req->limit : 10);
        return response()->json($data, 200);

    }

    function create(Request $req){

        $this->validate($req, [
            'package_id'              => 'required',
        ]);

        $user         = JWTAuth::parseToken()->authenticate();
        $package         = Package::select('*')->find($req->package_id);
         
        // check package is valid
        if($package){

            $now = now();
            $order                  =   New Order; 
            $order->status_id       =   Status::Pending; 
            $order->member_id       =   $user->member->id;  //Who we want to buy product from
            $order->package_id      =   $req->package_id;
            $order->ordered_at      =   $now; 
            $order->total_price     =   $package->pv; 
            $order->total_pv        =   $package->price; 
            $order->receipt_number  =   $this->getReceiptNumber(); 
            $order->save(); 

            return response()->json([
                'status' => 'success',
                'message' => 'ការបញ្ជាទិញជោគជ័យ', 
                'order' => $order
            ], 200);

        }else{
            return response()->json([
                'status' => 'error',
                'message' => "Package មិនត្រឹមត្រូវ", 
            ], 422);
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

    //========================= cancel purchase
    function cancelOrder($id=0){
            

        $data = Order::where('status_id', 1)->find($id);
        if(!$data){
        return response()->json([
                'status' => 'error',
                'message' => 'You are not able to delete this request.',
            ], 400);
        }

        $data->status_id = 4;
        $data->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Your request for order has been Cancelled. Successfully!',
        ], 200);

    }


     
}
