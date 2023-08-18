<?php

namespace App\Api\V1\Controllers\CP;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\Api\V1\Controllers\ApiController;
use App\Model\Product2\Type; 

class ProductType2Controller extends ApiController
{
    use Helpers;
   
    function listing(){
       
        $data           = Type::select('id', 'name')
        //->with(['products'])
        
        ->orderBy('name', 'ASC')
        ->get();
        
        return $data; 
    }


    function create(Request $req){

        //==============================>> Check validation
        $this->validate($req, [
            
            'name'             => 'required|max:20',
        ], 
        [
            'name.required'    => 'Please enter the name.', 
            'name.max'         => 'Total cannot be more than 20 characters.',
        ]);

        //==============================>> Start Adding data

        $product1_type               =   New Type; 
        $product1_type->name         =   $req->name;  

        $product1_type  ->save(); 
    
        return response()->json([
            'product_type' => $product1_type,
            'message' => 'Product has been successfully created.'
        ], 200);
        
    }
  
    function update(Request $req, $id=0){

         //==============================>> Check validation
         $this->validate($req, [
            
            'name'             =>  'required|max:20',

        ], 
        [
            'name.required' => 'Please enter the name.', 
            'name.max' => 'Name cannot be more than 20 characters.',
        ]);
        
        //==============================>> Start Updating data
        $product1_type                         = Type::find($id);
        if( $product1_type){

            $product1_type->name              = $req->input('name');
            $product1_type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Product has been updated Successfully',
                'product_type' => $product1_type,
            ], 200);

        }else{

            return response()->json([
                'message' => 'Invalid data.',
            ], 400);

        }

       

    }

     function delete($id = 0){
        
        $data = Type::find($id);

        //==============================>> Start deleting data
        if($data){

            $data->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Data has been deleted',
            ], 200);

        }else{

            return response()->json([
                'message' => 'Invalid data.',
            ], 400);

        }

        
    }
    
}
