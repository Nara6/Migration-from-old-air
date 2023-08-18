<?php

namespace App\Api\V1\Controllers\CP\Setup;

use Illuminate\Http\Request;
use App\Api\V1\Controllers\ApiController;
use Dingo\Api\Routing\Helpers;
use JWTAuth;
use App\Model\Product\ProductType as main;

class ProductTypeController extends ApiController
{
    use Helpers;
    function listing(Request $req){
        $data = Main::select('id', 'name')
        ->withCount([
            'products as n_of_products',
        ]);

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

        $data = $data->orderBy('id', 'desc')->paginate( $req->limit ? $req->limit : 10);
        return response()->json($data, 200);
    }

    function view($id = 0){
        
        $data   = Main::select('id', 'name')
        ->find($id);

        if($data){
            return response()->json(['data' => $data], 200);
        }else{
            return response()->json([
                'status'  => 'fail',
                'message' => 'រកមិនឃើញកំណត់ត្រា។'
            ], 404);
        }
        
    }
    function create(Request $request, $id=0){

        $this->validate($request, [

            'name'          => 'required|max:60',
          
           
        ],[
            'name.required'     =>  'Please enter your name. ',
            
        ]);

        $data                       = new Main();
        $data->name                 = $request->name;
     
      
    
        $data->save();

        return response()->json([
            'status' => 'success',
            'message' => 'បានបង្កើតដោយជោគជ័យ', 
            'data' => $data, 
        ], 200);
    }
    function update(Request $request,$id=0){
        $admin_id = JWTAuth::parseToken()->authenticate()->id;
        $this->validate($request, [

            'name'          => 'required|max:60',
         
           
        ],[
            'name.required'     =>  'Please enter your name. ',
           
        ]);
        //================================================>> 
        $data = Main::find($id);
        $data->name = $request->input('name');
     
       
        $data->save();
        return response()->json([
            'status' => 'success',
            'message' => 'ទិន្នន័យត្រូវបានធ្វើបច្ចុប្បន្នភាព', 
            'data' => $data, 
        ], 200);
    }

    function delete($id=0){
        $data = Main::find($id);
        if(!$data){
            return response()->json([
                'message' => 'រកមិនឃើញទិន្នន័យ', 
            ], 404);
        }
        $data->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'ទិន្នន័យត្រូវបានលុបចោល។ ',
        ], 200);
    }

}
