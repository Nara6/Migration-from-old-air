<?php

namespace App\Api\V1\Controllers\CP\Finance;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\Api\V1\Controllers\ApiController;

use App\Model\Transaction\Transaction; 
use App\Model\Transaction\Category;

class TransactionController extends ApiController
{
    use Helpers;
   
    function eCash( Request $req){

        $data = Transaction::select('id','trx','type_id','category_id','currency_id','member_id','amount','balance','description','created_at')
        ->with([
            'member',
            'category'
        ])
        ->where('currency_id',1); 
          // key search 
        if($req->key && $req->key != "") {
            $data = $data->where(function ($query) use ($req) {
                $query->where('txr', 'like', '%' . $req->key . '%')
                ;
            });
        }

        if($req->category != ''){
            $data = $data->where('category_id',$req->category);
        }

        // ==============================>> Date Range
        if($req->from && $req->to && isValidDate($req->from) && isValidDate($req->to)){
            $data = $data->whereBetween('created_at', [$req->from." 00:00:00", $req->to." 23:59:59"]);
        }
        $data = $data->orderBy('id', 'desc')->paginate( $req->limit ? $req->limit : 10);
        return response()->json($data, 200);
    }

    function ePoint(Request $req){

        $data = Transaction::select('id','trx','type_id','category_id','currency_id','member_id','amount','balance','description','created_at')
        ->with([
            'member',
            'category'
        ])
        ->where('currency_id',2); 

         // key search API
         $key       =   isset($_GET['key']) ? $_GET['key'] : "";
         if ($key != "") {
             $data = $data->where(function ($query) use ($key) {
                 $query->where('trx', 'like', '%' . $key . '%');
             });
         }

         if($req->category != ''){
            $data = $data->where('category_id',$req->category);
        }

           // ==============================>> Date Range
        if($req->from && $req->to && isValidDate($req->from) && isValidDate($req->to)){
            $data = $data->whereBetween('created_at', [$req->from." 00:00:00", $req->to." 23:59:59"]);
        }

        $data = $data->orderBy('id', 'desc')->paginate( $req->limit ? $req->limit : 10);
        return response()->json($data, 200);
    }

    function pv(Request $req){

        $data = Transaction::select('id','trx','type_id','category_id','currency_id','member_id','amount','balance','description','created_at')
        ->with([
            'member',
            'category'
        ])
        ->where('currency_id', 3); 

         // key search API
         $key       =   isset($_GET['key']) ? $_GET['key'] : "";
         if ($key != "") {
             $data = $data->where(function ($query) use ($key) {
                 $query->where('trx', 'like', '%' . $key . '%');
             });
         }

         if($req->category != ''){
            $data = $data->where('category_id',$req->category);
        }

           // ==============================>> Date Range
        if($req->from && $req->to && isValidDate($req->from) && isValidDate($req->to)){
            $data = $data->whereBetween('created_at', [$req->from." 00:00:00", $req->to." 23:59:59"]);
        }

        $data = $data->orderBy('id', 'desc')->paginate( $req->limit ? $req->limit : 10);
        return response()->json($data, 200);
    }

    function listTransactionCategory() {

        $data = Category::select('id','name')
        ->get();

        return response()->json($data, 200);
    }

}
