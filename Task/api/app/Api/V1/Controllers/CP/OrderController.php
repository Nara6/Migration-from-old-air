<?php

namespace App\Api\V1\Controllers\CP;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\Api\V1\Controllers\ApiController;
use App\Model\Order\Order; 

class OrderController extends ApiController
{
    use Helpers;
  
    function isValidDate($date){
        //echo $date; die;
        if (false === strtotime($date)) {
            return false;
        }else {
            return true;
        }
    }

    function listing(Request $req){
   
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
    
        $data = $data->orderBy('id', 'desc')
        ->paginate( $req->limit ? $req->limit : 10);
        return response()->json($data, 200);
    }
    

    function delete($id = 0){
        
        $data = Order::find($id);

        //==============================>> Start deleting data
        if($data){

            $data->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'ទិន្នន័យត្រូវបានលុប',
                'order'   => $data
            ], 200);

        }else{

            return response()->json([
                'message' => 'ទិន្នន័យមិនត្រឹមត្រូវ។',
            ], 400);

        }

        
    }
    
}
