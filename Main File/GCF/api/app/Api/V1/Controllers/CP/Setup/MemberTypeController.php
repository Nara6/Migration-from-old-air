<?php

namespace App\Api\V1\Controllers\CP\Setup;

use Illuminate\Http\Request;
use App\Api\V1\Controllers\ApiController;
use Dingo\Api\Routing\Helpers;
use JWTAuth;
use App\Model\Member\Type as main;

class MemberTypeController extends ApiController
{
    use Helpers;
    function listing(){
        $data = Main::select('*');
        $limit      =   intval(isset($_GET['limit'])?$_GET['limit']:10); 
        $key       =   isset($_GET['key'])?$_GET['key']:"";
        $appends=array('limit'=>$limit);
        if( $key != "" ){
            $data = $data->where(function($query) use ($key){
                $query->where('name', 'like', '%'.$key.'%');
            });
            $appends['key'] = $key;
               
        }

        $from=isset($_GET['from'])?$_GET['from']:"";
        $to=isset($_GET['to'])?$_GET['to']:"";
        if(isValidDate($from)){
            if(isValidDate($to)){
                
                $appends['from'] = $from;
                $appends['to'] = $to;

                $from .=" 00:00:00";
                $to .=" 23:59:59";

                $data = $data->whereBetween('created_at', [$from, $to]);
            }
        }

        $data= $data->orderBy('name', 'asc')->paginate($limit);
        return response()->json($data, 200);
    }

    function view($id = 0){
        
        $data   = Main::select('id', 'name','discount')
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
            'discount'      => 'required|numeric',
           
        ],[
            'name.required'     =>  'Please enter your name. ',
            'discount.required' =>  'Please enter your discount. ',
            'discount.numeric ' =>  'Please enter your discount is number. ',
        ]);
        /** Save Product category*/
        $data                       = new Main();
        $data->name                 = $request->name;
        $data->discount             = $request->discount;
      
    
        $data->save();

        return response()->json([
            'status' => 'success',
            'message' => 'បានបង្កើតដោយជោគជ័យ', 
            'data' => $data, 
        ], 200);
    }
    function update(Request $request){

        $this->validate($request, [

            'name'          => 'required|max:60',
            'discount'      => 'required|numeric',
           
        ],[
            'name.required'     =>  'Please enter your name. ',
            'discount.required' =>  'Please enter your discount. ',
            'discount.numeric ' =>  'Please enter your discount is number. ',
        ]);
        /** Save Product */
        $data                       = new Main();
        $data->name                 = $request->name;
        $data->discount             = $request->discount;

        $data->save();

        return response()->json([
            'status' => 'success',
            'message' => 'បានបង្កើតដោយជោគជ័យ', 
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
