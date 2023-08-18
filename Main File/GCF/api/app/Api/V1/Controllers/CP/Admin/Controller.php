<?php

namespace App\Api\V1\Controllers\CP\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\CamCyber\FileUpload;
use App\Api\V1\Controllers\ApiController;
use App\Model\Admin\Main;
use App\Model\User\Main as User;
use Dingo\Api\Routing\Helpers;
use JWTAuth;

// Import Resource
use App\Api\V1\Resources\Admin\AdminResource;
use App\Api\V1\Resources\Admin\AdminsCollection;
class Controller extends ApiController
{
    use Helpers;

    function listing(){
       // $members = Member::get();
         $data       = Main::select('id', 'user_id')
         ->with([
              'user'
             ]);
             $key = isset($_GET['key'])?$_GET['key']:"";
             if($key){
                 $data = $data->whereHas('user', function($query) use($key){
                     $query->where('name', 'like', $key)->orWhere('phone', 'like', $key)->orWhere('email', 'like', $key);
                 });
             }
 
             $from=isset($_GET['from'])?$_GET['from']:"";
             $to=isset($_GET['to'])?$_GET['to']:"";
             if(isValidDate($from)){
                 if(isValidDate($to)){
                     $from .=" 00:00:00";
                     $to .=" 23:59:59";
                     $data = $data->whereBetween('created_at', [$from, $to]);
                 }
             }
     
             $limit      =   intval(isset($_GET['limit'])?$_GET['limit']:10); 
             $data= $data->orderBy('id', 'desc')->paginate($limit); 
         // return response()->json($data, 200);
         $data = new AdminsCollection( $data );
         return $data;
    }

    function view($id = 0){
        
       
        $data   = Main::select('id', 'user_id')
        ->with([
            'user:id,name,phone,email,is_active,avatar'
        ])
        ->find($id);

        if($data){
            $data = new AdminResource($data);
            return response()->json($data, 200);
        }else{
            return response()->json([
                'status'  => 'fail',
                'message' => 'រកមិនឃើញកំណត់ត្រា។'
            ], 404);
        }
        
    }

    function create(Request $request){
        $admin = JWTAuth::parseToken()->authenticate();

        $this->validate($request, [
            'name'      => 'required|max:150',
                'phone' =>  [
                                'required', 
                                'regex:/(^[0][0-9].{7}$)|(^[0][0-9].{8}$)/', 
                                Rule::unique('user', 'phone')
                            ],
                'email' =>   [
                                'sometimes', 
                                'required', 
                                'email', 
                                'max:100', 
                                Rule::unique('user', 'email')
                            ],
            'password'  =>      'required|max:20', 

           

            ],
            [

            'name.required'       =>   'Please enter your name.',
            'name.max'            =>   'Name has been digit  to 60.',

            'phone.required'      =>   'Please enter your phone number.',
            'phone.regex'         =>   'Phone number is required.',
            'phone.unique'        =>   'Phone number already exists.',

            'email.required'      =>   'Please enter your email.',
            'email.email'         =>   'Email is required.',
            'email.max'           =>   'email has been digit  to 100.',
            'email.unique'        =>   'Email already exists.',

            'password.required'   =>   'Please enter your password',
            'password.max'        =>   'Your Password must be greater than 20 digit.',

            ]);
   
        $user = new User();
        $user->type_id =1;
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->is_active = 1;
        $user->is_phone_verified = 1;
        $user->is_email_verified = 1;
        $user->password = bcrypt($request->password);
        $user->avatar = '{}';
        $user->creator_id = $admin->id;
        $user->updater_id = $admin->id;
        $user->save();

        $admin = new Main();
        $admin->user_id     = $user->id;
        $admin->creator_id  = $admin->id;
        $admin->updater_id  = $admin->id;
        $admin->save();
          //Need to create folder before storing images
        
        $last = Main::select('id')->orderBy('id', 'DESC')->first();
        $id = 0;
        if($last){
            $id = $last->id+1;
        }

        $avatar = FileUpload::image($request, 'avatar', ['uploads', '/admin', '/'.$id], [['xs', 200, 200]]);
        if($avatar != ""){
            $user->avatar = $avatar;
        }
        $user->save();   
        return response()->json([
            'status'    => 'success',
            'message'   => 'បានបង្កើតដោយជោគជ័យ', 
            'admin'     => $admin,
            'user'      => $user,
        ], 200);
    }
    
    function update(Request $request, $id=0){

     
        $admin     = JWTAuth::parseToken()->authenticate();

        $admin    = Main::select('*')
                    ->with([
                        'user:id,name,phone,email,is_active,avatar'
                    ])
                    ->find($id);
      // return $id;
        if($admin){

            $user = $admin->user; 

            $this->validate($request,[

                'name' => 'required|max:150',
                'phone' =>  [
                                'required', 
                                'regex:/(^[0][0-9].{7}$)|(^[0][0-9].{8}$)/', 
                                Rule::unique('user', 'phone')->ignore($user->id)
                            ],
                'email'=>   [
                                'sometimes', 
                                'required', 
                                'email', 
                                'max:100', 
                                Rule::unique('user', 'email')->ignore($user->id)
                            ],
                        ],[
                'name.required'       =>   'Please enter your name.',
                'name.max'            =>   'Name has been digit  to 60.',

                'phone.required'      =>   'Please enter your phone number.',
                'phone.regex'         =>   'Phone number is required.',
                'phone.unique'        =>   'Phone number already exists.',

                'email.required'      =>   'Please enter your email.',
                'email.email'         =>   'Email is required.',
                'email.unique'        =>  'Email already exists.',
                'email.max'           =>  'Email has been digit to 100.',

              
            ]);

            $user->name = $request->name;
            $user->phone = $request->phone;
            $user->email = $request->email;
            $user->updater_id = $admin->id;
            $user->save();
            $avatar = FileUpload::image($request, 'avatar', ['uploads', '/admin', '/'.$id], [['xs', 200, 200]]);
                if($avatar != ""){
                    $user->avatar = $avatar;
                }
                $user->save();
        
            return response()->json([
                'status' => 'success',
                'message' => 'ទិន្នន័យត្រូវបានធ្វើបច្ចុប្បន្នភាព។', 
                'admin' => $admin,
                'user'  => $user
            ], 200);

        }else{
            return response()->json([
                'status' => 'fail',
                'message' => 'កំណត់ត្រារដ្ឋបាលមិនត្រឹមត្រូវ។', 
            
            ], 404);
        }
    }

    function delete($id=0){
        $data = Main::find($id);
        if(!$data){
            return response()->json([
                'message' => 'Data not found', 
            ], 404);
        }
        $data->delete();

        $User = User::find($data->user_id)->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'ទិន្នន័យត្រូវបានលុបចោល។ ',
        ], 200);
    }

    /** Function To change Password */
    function changePassword(Request $request, $id=0){
        $admin     = JWTAuth::parseToken()->authenticate();
        $admin    = Main::select('*')
                    ->with([
                        'user:id,name,phone,email,is_active,avatar'
                    ])
                    ->find($id);
        if($admin){
            $user = $admin->user; 
            $this->validate($request,[
                'password' => 'required|min:6',
            ]);

            $user->password = bcrypt($request->password);
            $user->updater_id = $admin->id;
            $user->save();
        
            return response()->json([
                'status' => 'success',
                'message' => 'ទិន្នន័យត្រូវបានធ្វើបច្ចុប្បន្នភាព។', 
                'admin' => $admin
            ], 200);

        }else{
            return response()->json([
                'status' => 'fail',
                'message' => 'កំណត់ត្រារដ្ឋបាលមិនត្រឹមត្រូវ។', 
            ], 404);
        }
    }

}
