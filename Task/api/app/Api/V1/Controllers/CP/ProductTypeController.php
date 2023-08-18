<?php

namespace App\Api\V1\Controllers\CP;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\Api\V1\Controllers\ApiController;
use App\Model\Product\Type; 

class ProductTypeController extends ApiController
{
    use Helpers;
   
    function listing(){
       
        $data           = Type::select('id', 'name')
        ->withCount(['products as n_of_products'])
        
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

        $product_type               =   New Type; 
        $product_type->name         =   $req->name;  

        $product_type  ->save(); 
    
        return response()->json([
            'product_type' => $product_type,
            'message' => 'ទិន្នន័យត្រូវបានបង្កើតដោយជោគជ័យ។'
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
        $product_type                         = Type::find($id);
        if( $product_type){

            $product_type->name              = $req->input('name');
            $product_type->save();

            return response()->json([
                'status' => 'success',
                'message' => 'ប្រភេទផលិតផលត្រូវបានកែប្រែជោគជ័យ!',
                'product_type' => $product_type,
            ], 200);

        }else{

            return response()->json([
                'message' => 'ទិន្នន័យមិនត្រឹមត្រូវ។',
            ], 400);

        }

       

    }

     function delete($id = 0){
        
        $data = Type::find($id);

        //==============================>> Start deleting data
        if($data){

            $data->delete();

            $data           = Type::select('*')
            ->get();
            return response()->json([
                'status' => 'success',
                'message' => 'ទិន្នន័យត្រូវបានលុប',
                'type'    => $data
            ], 200);

        }else{

            return response()->json([
                'message' => 'ទិន្នន័យមិនត្រឹមត្រូវ។',
            ], 400);

        }

        
    }
    
}
