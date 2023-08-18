<?php

namespace App\Api\V1\Controllers\CP\Product;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;

use App\CamCyber\FileUpload;
use App\Api\V1\Controllers\ApiController;

use App\Model\Product\Product;
use App\Model\Product\ProductPackage;

use App\Model\Product\ProductRebate;

use App\Model\Event\Request as VenueRequest;
use Dingo\Api\Routing\Helpers;
use JWTAuth;

// Import Resource
use App\Api\V1\Resources\Product\ProductResource;
use App\Api\V1\Resources\Product\ProductCollection;


use Carbon\Carbon;

class Controller extends ApiController
{
    use Helpers;
    
    function listing(Request $req){
        
        $data = Product::select('id', 'package_id', 'name', 'kh_name', 'en_name', 'image', 'price')
        ->get();
        return $data;
    }

    function view($id = 0){
        
        $data   = Product::select('id', 'package_id', 'name', 'kh_name', 'en_name', 'image', 'price')
        ->with([
            'package:id,en_name,pv,price'
        ])
        ->find($id);

        if($data){
           
            return response()->json($data, 200);
        }else{
            return response()->json([
                'status'  => 'fail',
                'message' => 'Record not found. '.$id
            ], 404);
        }
    }

    function create(Request $req ,$productId=0) {
        $admin_id = JWTAuth::parseToken()->authenticate()->id;

        $this->validate($req, [
           
           
            'package_id'            => 'required',
            'name'                  => 'required|max:100',
            'price'                 => 'required|numeric',
            // 'image'                 => 'required',
        ], 
        [
            
            'package_id.required'      => 'Please select category .',
        
            'name.required'          => 'Please enter name in english.',
            'name.max'               => 'Name must not be more then 100 characters.',

            'price.required'       => 'Please enter cost price.',
            'price.numeric'        => 'Cost price must be number.',
            
            // 'image.required'            => 'Please input image'
        ]);

        /** Save Product */
        $product                       = new Product();
        $product->package_id           = $req->input('package_id');
        $product->name                 = $req->input('name');
        $product->price                = $req->input('price');

        $date_today = Carbon::today()->format('d').'-'.Carbon::today()->format('M').'-'.Carbon::today()->format('Y');    
        if($req->image){
            $image     = FileUpload::uploadFileV2( $req->image, 'product/'.$date_today , '');
            if($image['url']){
                $product->image = $image['url'];
            }
        }
        $product->save();
        return response()->json([
            'status'            => 'success',
            'message'           => 'បានបង្កើតដោយជោគជ័យ',
            'product'           => $product,

        ], 200);
    }
   

    function update(Request $req, $id=0){

        $this->validate($req, [

            'name'           => 'required|max:100',
            'price'        => 'required|numeric',
            'package_id'       => 'required',
            'image'             => 'required',

        ], [
            'package_id.required'      => 'Please select category .',

            'name.required'          => 'Please enter name in name.',
            'name.max'               => 'Name must not be more then 100 chanters.',

            'price.required'       => 'Please enter cost price.',
            'price.numeric'        => 'Cost price must be number.',

            'image.required'            => 'Please input image'

        ]);

        //========================================================>>>> Start to update
        

        /** update  Product */
        $product                       = Product::find($id);
        $product->package_id          = $req->input('package_id');
        $product->name                 = $req->input('name');
        $product->price           = $req->input('price');

        //Need to create folder before storing images
        $date_today = Carbon::today()->format('d').'-'.Carbon::today()->format('M').'-'.Carbon::today()->format('Y');    
        if($req->image){
            $image     = FileUpload::uploadFileV2( $req->image, 'product/'.$date_today , '');
            if($image['url']){
                $product->image = $image['url'];
            }
        }

        $product->save();

            return response()->json([
                'status' => 'success',
                'message' => 'បានធ្វើបច្ចុប្បន្នភាពដោយជោគជ័យ',
                'product' => $product,
            ], 200);
    }

    function delete($id=0){
        $data = Product::find($id);
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
