<?php

namespace App\Api\V1\Controllers\CP\User;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\CamCyber\FileUpload;
use App\Api\V1\Controllers\ApiController;
use App\Model\User\Main;
use Dingo\Api\Routing\Helpers;
use JWTAuth;
//use App\Model\User as Model;
use Carbon\Carbon;

class UserController extends ApiController
{
    use Helpers;
   function get($id = 0){
        //return $id;
        if($id!=0){
            $data = Main::select('*')->findOrFail($id);
            if($data){
                return response()->json(['data'=>$data], 200);
            }else{
                return response()->json(['status_code'=>404], 404);
            }
        }

        $data       = Main::select('*');
        $limit      =   intval(isset($_GET['limit'])?$_GET['limit']:10); 
        $key        =   isset($_GET['key'])?$_GET['key']:"";
        $appends=array('limit'=>$limit);
        if( $key != "" ){
            $data = $data->where(function($query) use ($key){
                $query->where('name', 'like', '%'.$key.'%')->OrWhere('phone', 'like', '%'.$key.'%');
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
        
        $data= $data->orderBy('id', 'desc')->paginate($limit);
        return response()->json($data, 200);
    }
    function post(Request $request){
        $admin_id = JWTAuth::parseToken()->authenticate()->id;

        $this->validate($request, [
           //========================================>> Validation for User
            'name' => 'required|max:60',
            'phone' =>  [
                            'required', 
                            'regex:/(^[0][0-9].{7}$)|(^[0][0-9].{8}$)/', 
                            Rule::unique('user', 'phone')
                        ],
            'email'=>   [
                            'required', 
                            'email', 
                            'max:100', 
                            Rule::unique('user', 'email')
                        ],
        ]);


        //========================================================>>>> Start to update
        $data = new Main();
        // $data->type_id = 1;
        $data->name = $request->input('name');
        $data->phone = $request->input('phone');
        $data->email = $request->input('email');
        $data->password = $request->input('password');
        $data->telegram_chat_id = $request->input('telegram_chat_id');
        $data->is_active = $request->input('is_active');
        //Need to create folder before storing images
        
        $last = Main::select('id')->orderBy('id', 'DESC')->first();
        $id = 0;
        if($last){
            $id = $last->id+1;
        }

        $date_today = Carbon::today()->format('d').'-'.Carbon::today()->format('M').'-'.Carbon::today()->format('Y');    
        if($request->avatar){
            $image     = FileUpload::uploadFileV2( $request->avatar, 'user/'.$date_today , '');
            if($image['url']){
                $data->avatar = $image['url'];
            }
        }

        $data->save();

        return response()->json([
            'status' => 'success',
            'message' => 'កាលបរិច្ឆេទត្រូវបានបង្កើតដោយជោគជ័យ!', 
            'data' => $data
        ], 200);
    }
    function put(Request $request, $id=0){
        $this->validate($request, [
            
           //========================================>> Validation for User
            'name' => 'required|max:60',
            'phone' =>  [
                            'required', 
                            'regex:/(^[0][0-9].{7}$)|(^[0][0-9].{8}$)/', 
                            Rule::unique('user', 'phone')->ignore($id)
                        ],
            'email'=>   [
                            'sometimes',
                            'required', 
                            'email', 
                            'max:100', 
                            Rule::unique('user', 'email')->ignore($id)
                        ], 
        ]);


        //========================================================>>>> Start to update
        $data = Main::findOrFail($id);
        $data->name = $request->input('name');
        $data->phone = $request->input('phone');
        $data->email = $request->input('email');
        $data->telegram_chat_id = $request->input('telegram_chat_id');
        $data->is_active = $request->input('is_active');

        $date_today = Carbon::today()->format('d').'-'.Carbon::today()->format('M').'-'.Carbon::today()->format('Y');    
        if($request->avatar){
            $image     = FileUpload::uploadFileV2( $request->avatar, 'user/'.$date_today , '');
            if($image['url']){
                $data->avatar = $image['url'];
            }
        }
        
        $data->save();

        return response()->json([
            'status' => 'success',
            'message' => 'ការកែបានជោគជ័យ!', 
            'data' => $data
        ], 200);
    }

    function updatePassword(Request $request, $id=0){
        $this->validate($request, [
            'password' => 'required|min:6|max:60',
        ]);

        //========================================================>>>> Start to update
        $data = Main::findOrFail($id);
        $data->password = bcrypt($request->input('password'));
        $data->save();

        return response()->json([
            'status' => 'success',
            'message' => 'ការកែប្រែបានជោគជ័យ!', 
            'data' => $data
        ], 200);
    }

   


}
