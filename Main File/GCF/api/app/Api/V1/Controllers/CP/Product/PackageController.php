<?php

namespace App\Api\V1\Controllers\CP\Product;

use Illuminate\Http\Request;


use App\Api\V1\Controllers\ApiController;
use App\CamCyber\FileUpload;
use App\Model\Product\Product;
use Dingo\Api\Routing\Helpers;
use App\Model\Product\PackageProduct;
use App\Model\Product\Package;
// use App\Model\Product\Package;

use Carbon\Carbon;

class PackageController extends ApiController
{
    use Helpers;
    
    function listing(Request $req){
        $data = Package::select('id', 'kh_name', 'image', 'price', 'pv')
        ->with('product')
        ->withCount('product as n_of_product')
        ->get();
        // $data = $data->orderBy('id', 'desc')->paginate( $req->limit ?$req->limit:10);
        return response()->json($data, 200);
    }

    function create(Request $request) {
        
        $this->validate($request,[
            'name'  => 'required|max:100',
            'icon'  => 'required',
            'pv'    => 'required|max:100',
            'price' => 'required'
        ],[
            'name.required' => 'Please enter package name.',
            'icon.required' => 'Please upload your image.',
            'pv.required'   => 'Please input Pv.',
            'price.required' => 'Please input price.'
        ]);

        /** Save Product */
        $package                       = new PackageProduct();
        $package->name                 = $request->input('name');
        $package->icon                 = $request->input('icon');
        $package->pv                   = $request->input('pv');
        $package->price                = $request->input('price');

        $package->save();

        return response()->json([
            'status'            => 'success',
            'message'           => 'បានបង្កើតដោយជោគជ័យ',
            'package'           => $package,

        ], 200);
    }

    function addProduct(Request $request) {
        
        $this->validate($request,[
            'package_id'  => 'required|max:100',
            'product_id'  => 'required',
            'qty'         => 'required|max:100',
        ],[
            'package_id.required' => 'Please enter package name.',
            'product_id.required' => 'Please upload your image.',
            'qty.required'   => 'Please input Pv.',
        ]);

        /** Save Product */
        $package                       = new PackageProduct();
        $package->package_id           = $request->input('package_id');
        $package->product_id           = $request->input('product_id');
        $package->qty                  = $request->input('qty');

        $package->save();

        return response()->json([
            'status'            => 'success',
            'message'           => 'បានបង្កើតដោយជោគជ័យ',
            'package'           => $package,

        ], 200);
    }

    function view($id = 0){
        
        $data   = Package::select('id', 'kh_name', 'image', 'pv', 'price')
        ->with([
            'packageProduct:id,product_id,package_id',
            'packageProduct.product:id,name,image,price'
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
    function update(Request $request, $id=0){

        $this->validate($request,[
            'name'  => 'required|max:100',
            'icon'  => 'required',
            'pv'    => 'required|max:100',
            'price' => 'required'
        ],[
            'name.required' => 'Please enter package name.',
            'icon.required' => 'Please upload your image.',
            'pv.required'   => 'Please input Pv.',
            'price.required' => 'Please input price.'
        ]);

        //========================================================>>>> Start to update
        

        /** update  Product */
        $package                       = PackageProduct::find($id);
        $package->name                 = $request->input('name');
        $package->icon                 = $request->input('icon');
        $package->pv                   = $request->input('pv');
        $package->price                = $request->input('price');

        $package->save();

            return response()->json([
                'status' => 'success',
                'message' => 'បានធ្វើបច្ចុប្បន្នភាពដោយជោគជ័យ',
                'product' => $package,
            ], 200);
    }
    function delete($id=0){
        $data = PackageProduct::find($id);
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
