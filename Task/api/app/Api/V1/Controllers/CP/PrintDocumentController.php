<?php

namespace App\Api\V1\Controllers\CP;
use Illuminate\Http\Request;

use App\Api\V1\Controllers\ApiController;
use Dingo\Api\Routing\Helpers;
use App\Model\Income\Income;
use App\Model\Order\Order;
use Carbon\Carbon;
use Tymon\JWTAuth\Facades\JWTAuth;

class PrintDocumentController extends ApiController 
{
    use Helpers;

    function printSale(Request $req){
   
        $data           = Order::select('*')
        ->with([
            'cashier',
            'details'
        ]);

       // ==============================>> Date Range
       if($req->from && $req->to && $this->isValidDate($req->from) && $this->isValidDate($req->to)){
            $data = $data->whereBetween('created_at', [$req->from." 00:00:00", $req->to." 23:59:59"]);
        }
        
        // =========================== Search receipt number
        if( $req->receipt_number && $req->receipt_number !="" ){
            $data = $data->where('receipt_number', $req->receipt_number);
        }

        // ========================== search filter status
        if ($req->status_id) {
            $data = $data->where('status_id', $req->status_id);
        }

        // ========================== search filter status
        if ($req->receipt_number) {
            $data = $data->where('receipt_number', $req->receipt_number);
        }

        // ===========================>> If Not admin, get only record that this user make order
        $user         = JWTAuth::parseToken()->authenticate();
        if($user->type_id == 2){ //Manager
            $data = $data->where('cashier_id', $user->id); 
        }

        // get query date range
        $from   = $req->from;
        $to     = $req->to;

        // get query status

        $status_id = $req->status_id;
    
        $data = $data->orderBy('id', 'desc')
        ->paginate( $req->limit ? $req->limit : 10);
        
        $payload = [
            'applications'  => $data,
            'from'          => $from,
            'to'            => $to,
            'status_id'     => $status_id,
        ];

        return $payload;
        //return view('printing.sale.sale', $payload);
    }

    function isValidDate($date){
        //echo $date; die;
        if (false === strtotime($date)) {
            return false;
        }else {
            return true;
        }
    }

    function printTotal(){
        
   
        return $payload;
        //return view('printing.total.total');
    }

}