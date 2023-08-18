<?php

namespace App\Api\V1\Controllers\Member\Transaction;

use Illuminate\Http\Request;
use Dingo\Api\Routing\Helpers;
use Illuminate\Support\Facades\DB;
use JWTAuth;
use Carbon\Carbon;

use App\Api\V1\Controllers\ApiController;
use App\Model\Transaction\Transaction;
use App\Model\Transaction\Currency;
use App\Model\Transaction\Category;
use App\Model\Transaction\USDCategory;
use App\Model\Setup\Bank;

//========================== Use Mail
use App\BH\Wallet; 

class TransactionController extends ApiController
{
    use Helpers;

    function categories(){
        $data = Category::select('id', 'name')->get(); 
        return $data; 
    }

    function banks(){
        $data = Bank::select('id', 'name', 'logo')->get(); 
        return $data; 
    }

    function create(Request $request ,$bank=0){

       
        $this->validate($request, [

            'name'           => 'required|max:100',
            'account'        => 'required',
            'number'         => 'required',
            'currency'       =>'required',
            'logo'          => 'required',
         

        ], 
        [
            'name.required'          => 'Please enter name in name.',
            'name.max'               => 'Name must not be more then 100 chanters.',

            'account.required'       =>'Please enter account name.',
            'number.required'        =>'Please input account number.',
            'currency.required'     =>'Please input type of curryency',
            'logo.required'         => 'Please input image',


        ]);

        //========================================================>>>> Start to update
        
     
            $bank                       = new Bank();
            $bank->name                 = $request->input('name');
            $bank->account              = $request ->input('account');
            $bank->number               = $request->input('number');
            $bank->currency             = $request->input('currency');
            $bank->logo                 = $request ->input('logo');

            $bank->save();

                return response()->json([
                    'status' => 'success',
                    'message' => 'បានបង្កើតដោយជោគជ័យ',
                    'bank' => $bank,
                ], 200);

    }
    function update(Request $request){

       
        $this->validate($request, [
            
            'name'           => 'required|max:100',
            'account'        => 'required',
            'number'         => 'required',
            'currency'       =>'required',
            'logo'          => 'required',

        ], 
        [

            'name.required'          => 'Please enter name in name.',
            'name.max'               => 'Name must not be more then 100 chanters.',

            'account.required'       =>'Please enter account name.',
            'number.required'        =>'Please input account number.',
            'currency.required'     =>'Please input type of curryency',
            'logo.required'         => 'Please input image',

        ]);

        //========================================================>>>> Start to update
        
        $bank    = Bank::select('*')->find($request->id);
        if($bank){

            $bank                       = new Bank();
            $bank->name                 = $request->input('name');
            $bank->account              = $request ->input('account');
            $bank->number               = $request->input('number');
            $bank->currency             = $request->input('currency');
            $bank->logo                 = $request ->input('logo');

            $bank->save();

                return response()->json([
                    'status' => 'success',
                    'message' => 'បានធ្វើបច្ចុប្បន្នភាពដោយជោគជ័យ',
                    'bank' => $bank,
                ], 200);
        }else{
            return response()->json([
                'message' => 'ព័តមានមិនត្រិមត្រូវ',
            ], 400);
        };
    }
    function usd(){
        $data = Transaction::select('id', 'trx', 'currency_id', 'category_id', 'type_id', 'member_id', 'amount', 'balance', 'description', 'created_at')
        ->with('category')
        ->orderBy('id', 'DESC')
        ->get(); 
        return response()->json($data, 200);
    }

    function transactions(Request $req){

        $currencyId = 3; 
        if($req->currency == 'ECASH'){
            $currencyId = 1; 
        }elseif($req->currency == 'EPOINT'){
            $currencyId = 2; 
        }

        $data           = Transaction::select('id', 'trx', 'currency_id', 'category_id', 'type_id', 'member_id', 'amount', 'balance', 'description', 'created_at')
        ->where('currency_id', $currencyId)
        ->with([
            'category:id,name'
        ]);
        
        $user       = JWTAuth::parseToken()->authenticate();
        $data       = $data->where('member_id', $user->member->id); 
        
        // ==============================>> Date Range
        if($req->from && $req->to && isValidDate($req->from) && isValidDate($req->to)){
            $data = $data->whereBetween('created_at', [$req->from." 00:00:00", $req->to." 23:59:59"]);
        }

        $key       =   isset($_GET['key'])?$_GET['key']:"";

        if( $key != "" ){
            $data = $data->where(function($query) use ($key){
                $query->where('id', 'like', '%'.$key.'%');
            });   
        }

        $category      =   intval(isset($_GET['category'])?$_GET['category']:0);
        if($category != 0){
            $data= $data->where('category_id', $category);
        }

        $type      =   intval(isset($_GET['type'])?$_GET['type']:0);
        if($type != 0){
            $data= $data->where('type_id', $type);
        }

        $limit          = intval(isset($_GET['limit'])?$_GET['limit']:10); 
        $data= $data->orderBy('id', 'desc')->paginate($limit);
        return response()->json($data, 200);
    }

    function balance(){

        $user       = JWTAuth::parseToken()->authenticate();
        $balance = Wallet::checkBalance($user->uid, 'usd'); 
        return $balance; 
    }

    function summary(){
        $user       = JWTAuth::parseToken()->authenticate();
      
        return [
            'balance' => $this->balance(), 
            'date_range' => $this->dateRange($user), 
            'life_time' => $this->lifeTime($user)
        ]; 
        
    
    }

    function dateRange($user){

        $start =  Carbon::parse('today')->subMonths(1)->format('Y-m-d 00:00:00');
        $end = Carbon::parse('today')->format('Y-m-d 23:59:59:00'); 
        //return $end; 

        $categories = USDCategory::select('id', 'name')
        ->withCount([
            'transactions as total_amount' => function($query) use ($user, $start, $end){
                $query->select(DB::raw('sum(amount)'))
                ->where('member_id', $user->member->id)
                ->whereBetween('created_at', [$start, $end])
                ;
            }
        ])
        ->get(); 
        return $categories; 
    }

    function lifeTime($user){
        $categories = USDCategory::select('id', 'name')
        ->withCount([
            'transactions as total_amount' => function($query) use ($user){
                $query->select(DB::raw('sum(amount)'))
                ->where('member_id', $user->member->id)
                ;
            }
        ])
        ->get(); 
        return $categories; 
    }


   

}
