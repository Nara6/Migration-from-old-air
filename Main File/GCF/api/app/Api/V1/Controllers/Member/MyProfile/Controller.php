<?php

namespace App\Api\V1\Controllers\Member\MyProfile;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use App\CamCyber\FileUpload;
use App\Api\V1\Controllers\ApiController;
use App\Model\User\Main;
use App\Model\User\Code as Code;

use App\Model\Admin\Admin as Model;
use App\Model\Member\Main as Customer;
use App\Model\Member\Document as Document;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

// Import Resource
use App\Api\V1\Resources\User\UserResource;
use App\Api\V1\Resources\USer\UsersCollection;

class Controller extends ApiController
{
    use Helpers;
    function get(Request $req){
        $auth = JWTAuth::parseToken()->authenticate(); 
        $profile = Main::select('*')->where('id', $auth->id)
        ->with([
            'member:id,user_id',
            
            ]);
      
        $profile = $profile->first();
        $profile = new UserResource($profile);
        return response()->json(['info'=>$profile], 200);
    }
    
    function put(Request $req){
         $user_id = JWTAuth::parseToken()->authenticate()->id;

        $this->validate($req, [
            'name' => 'required|max:60',
            'phone' =>  [
                            'required', 
                            Rule::unique('user')->ignore($user_id)
                        ],
            // 'email' =>  [
            //                 'required', 
            //                 'email', 
            //                 Rule::unique('user')->ignore($user_id)
            //             ], 
             //'country'   => 'required|exists:country,id',
        ]);


        //========================================================>>>> Start to update user
        $user = Main::find($user_id);
        $user->name = $req->input('name');
        $user->name_kh = $req->input('name_kh');
        $user->phone = $req->input('phone');
       // $user->country_id = $request->input('country');
        $user->email = $req->input('email');
        
        $user->updated_at = now();

        //Start to upload image to that director
        $avatar = FileUpload::image($req, 'avatar', ['uploads', '/user', '/'.$user_id], [['xs', 200, 200]]);
        if($avatar != ""){
            $user->avatar = $avatar;
        }
        $avatar = FileUpload::resize($req, 'avatar', ['uploads', '/user', '/'.$user_id], [['xs', 200, 200]]);
        if ($avatar != "") {
            $user->avatar = $avatar;
        }
        
        $user->save();

        //========================================================>>>> Start to update Member
        // $member = Member::where('user_id', $user->id)->first(); 
        // $member->save(); 

        return response()->json([
            'status' => 'success',
            'message' => 'ពត៌មានផ្ទាល់ខ្លួនរបស់អ្នកត្រូវបានកែដំរូវដោយជោគជ័យ!!', 
            'data' => $user
        ], 200);

    }
  
    function changePassword(Request $request){
        $old_password = $request->input('old_password');
        $user_id = JWTAuth::parseToken()->authenticate()->id;
        //dd($user_id);
       $current_password = Main::find($user_id)->password;
        
       if (password_verify($old_password, $current_password)){ 
            
            $this->validate($request, [
                            'password'         => 'required|min:6|max:20',
                            'confirm_password' => 'required|same:password',
            ],[

            'password.required'     => 'សូមបញ្ជាក់ពាក្យសម្ងាត់ថ្មីរបស់អ្នក។',
            'password.min'          => 'លេខសម្ងាត់ត្រូវតែមានយ៉ាងហោចណាស់ ៦ តួអក្សរ',
            'password.max'          => 'លេខសម្ងាត់ត្រូវតែមានច្រើនជាង ២០ តួអក្សរ។',
           
            'confirm_password.required'     => 'សូមបញ្ចូលពាក្យសម្ងាត់របស់អ្នកឡើងវិញ',
            'confirm_password.same'         => 'សូមបញ្ចូលពាក្យសម្ងាត់បញ្ជាក់របស់អ្នកឡើងវិញទៅពាក្យសម្ងាត់ថ្មីដដែល',


            ]
        );

            $id=0;
            //========================================================>>>> Start to update user
            $user = Main::findOrFail($user_id);
            $user->password = bcrypt($request->input('password'));
            $user->save();

            return response()->json([
                'status' => 'success',
                'message' => 'លេខសម្ងាត់ត្រូវបានកែប្រែថ្មីដោយជោគជ័យ'
            ], 200);
        }else{
         return response()->json([
                'status' => 'error',
                'message' => 'ពាក្យសម្ងាត់ចាស់របស់អ្នកមិនត្រឹមត្រូវ។ សូមបន្ថែមមួយផ្សេងទៀត'
            ], 200);   
        }
        

    }

}
