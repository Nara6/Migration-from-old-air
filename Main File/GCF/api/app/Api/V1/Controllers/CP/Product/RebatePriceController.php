<?php

namespace App\Api\V1\Controllers\CP\Product;

use Illuminate\Http\Request;


use Dingo\Api\Routing\Helpers;
use JWTAuth;

use App\Api\V1\Controllers\ApiController;
use App\Model\Product\ProductRebate;


class RebatePriceController extends ApiController
{
    use Helpers;
    function listing($id=0){

        $data = ProductRebate::select('id', 'distributor_type_id', 'rebate')
        ->with(['distributorType'])
        ->where('product_id', $id)
        ->where('distributor_type_id', '>', 1)
        ->orderBy( 'id', 'desc')
        ->get();

        return response()->json($data, 200);
    }

    function updateRebatePrice(Request $req){

        $this->validate($req, [
            
            'productId'     => 'required|exists:product,id',
            'rebates'       => 'required'

        ],[
            
            'rebate.required'                        => 'សូមបញ្ចូល Rebate Price',  
            'distributor_type_id.required'           => 'សូមបញ្ចូល Distributor ',  

        ]);


        $rebates         = json_decode($req->rebates, true);
        foreach($rebates as $rebateId => $price){
            $data = ProductRebate::where('product_id', $req->productId)->find($rebateId); 
            if($data){
                $data->rebate = $price; 
                $data->save(); 
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'តម្លៃត្រូវបានធ្វើបច្ចុប្បន្នភាព',
            'rebates' => $rebates
        ], 200);

       
    }

  
}
