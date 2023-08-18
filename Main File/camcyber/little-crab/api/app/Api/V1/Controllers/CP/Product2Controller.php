<?php

namespace App\Api\V1\Controllers\CP;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\Api\V1\Controllers\ApiController;
use App\Model\Product2\Product; 
use App\Model\Product\Category; 

use App\CamCyber\FileUpload; 

class Product2Controller extends ApiController
{
    use Helpers;
   
    function listing(Request $req){
       
        $data           = Product::select('*')
        ->with([
            'type',
            //'details.product'
        ]); 

        //Filter
        if($req->key && $req->key != ''){
            $data = $data->where('name', 'LIKE', '%'.$req->key.'%'); 
        }

        if($req->type && $req->type != 0){
            $data = $data->where('type_id', $req->type); 
        }

        $data = $data->limit(100)
        ->orderBy('id', 'DESC')
        ->get();
        
        return $data; 
    }

    function create(Request $req){

        //==============================>> Check validation
        $this->validate($req, [
            
            'name'              => 'required|max:20',
            'type_id'           => 'required|exists:products_type,id',
            'unit_price'        => 'required|max:20',
            'discount'          => 'required|max:20'
        ], 
        [
            'name.required'         => 'Please enter the name.',
            'name.max'              => 'Name cannot be more than 20 characters.',
            'type_id.exists'        => 'Please select correct type.',
            'discount'              => 'Please enter discount.'


        ]);

        //==============================>> Start Adding data

        $product1                  =   New Product; 
        $product1->name            =   $req->name;  
        $product1->type_id         =   $req->type_id; 
        $product1->unit_price      =   $req->unit_price;
        $product1->discount        =   $req->discount;  

        $product1  ->save(); 
    
        return response()->json([
            'product' => $product1,
            'message' => 'Product has been successfully created.'
        ], 200);
        
    }
  
    function update(Request $req, $id=0){

         //==============================>> Check validation
         $this->validate($req, [
            
            'name'              => 'required|max:20',
            'type_id'           => 'required|exists:products_type,id',
            'unit_price'        => 'required|max:20',
            'discount'          => 'required|max:20'

        ], 
        [
            'name.required'         => 'Please enter the name.', 
            'name.max'              => 'Name cannot be more than 20 characters.',
            'type_id.exists'        => 'Please select correct type.',
            'discount'              => 'Please enter discount.'
        ]);
        
        //==============================>> Start Updating data
        $product1                         = Product::find($id);
        if($product1){

            $product1->name               = $req->input('name');
            $product1->type_id            = $req->input('type_id');
            $product1->unit_price         = $req->input('unit_price');
            $product1->discount           = $req->input('discount');

            $product2->save();

            // Start Uploading Image; 
            if($req->image && $req->image != ''){

                $uri = FileUpload::upload64base($req->image, 'uploads/product1');
                
                if($uri != ''){
                    $product1->image = $uri; 
                    $product1->save();
                }
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Product has been updated Successfully',
                'product' => $product1,
            ], 200);

        }else{

            return response()->json([
                'message' => 'Invalid data.',
            ], 400);

        }

       

    }

    function delete($id = 0){
        
        $data = Product::find($id);

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
