<?php

namespace App\Api\V1\Controllers\Auth;

use Illuminate\Http\Request;
use App\Api\V1\Controllers\ApiController;
use JWTAuth;
use Illuminate\Support\Carbon;
use App\CamCyber\IpAddressController as IpAddress;
use App\Model\User\Main as User;

use App\Model\User\Log;

use App\Enum\UserType;  
use App\BH\Stock;
class LoginController extends ApiController
{

    public function login(Request $request) {
       
        $token = ''; 
        $username = intval($request->post('username'));
        
        if($request->input('socialType') && $request->input('socialId')){ //Determine if having any social information submitted.
            if($request->input('socialType') == 2 || $request->input('socialType') == 3){ //Facebook or Google
                
                // $user = User::where([
                //     'social_type_id'    =>  $request->input('socialType'), 
                //     'social_id'         =>  $request->input('socialId'), 
                //     'deleted_at'        =>  null, 
                //     'is_active'         =>  1
                // ])->first(); 

                if($user){
                    $token = JWTAuth::fromUser($user);
                }else{
                    
                    //Check if one of credentail information is provided
                    if($request->input('username')){
                        $newUser = new User;

                        //Additional Check if having valid email (format) provided from social
                        if(filter_var($request->post('email'), FILTER_VALIDATE_EMAIL)){
                            //Check if an user has this email
                            $user = User::where(['email'=>$request->post('email'), 'is_email_verified'=>1, 'is_active'=>1])->first(); 
                            //Update Social information
                            if($user){
                                $user->social_type_id   = $request->input('socialType'); 
                                $user->social_id        = $request->input('socialId');
                                $user->save(); 
                                $token = JWTAuth::fromUser($user);    
                            }else{
                                $newUser->email                = $request->post('email'); 
                                $newUser->is_email_verified    = 1; 
                            }
                        }else if(preg_match('/(^[0-9].{7}$)|(^[0-9].{8}$)/', $username)){
                            //Update Social ID & Type
                            $user = User::where(['phone'=>$username, 'is_phone_verified'=>1, 'is_active'=>1])->first(); 
                            if($user){
                                $user->social_type_id   = $request->input('socialType'); 
                                $user->social_id        = $request->input('socialId');
                                $user->save(); 

                                $token = JWTAuth::fromUser($user); 
                            }else{
                                $newUser->phone                = $username; 
                                $newUser->is_phone_verified    = 1; 
                            }
                        }

                        //Register new account via social information
                        if(  $token == "" ){

                            //Create New User
                            $newUser->name                 = $request->post('name'); 
                            // $newUser->type_id              = 5;//Role as Client 
                            $newUser->social_type_id       = $request->input('socialType'); 
                            $newUser->social_id            = $request->input('socialId');
                            $newUser->password             = bcrypt(rand(100000, 999999));
                            $newUser->avatar               = 'public/user/profile.png';
                            $newUser->save();

                            // //Create New RU
                            // $member                           = new Member();
                            // $member->user_id                  = $newUser->id;
                            // $member->save();

                            $token = JWTAuth::fromUser($newUser); 
                        }
                    }

                    if($token == ''){
                        return response()->json([
                            'status_code'   =>  401, 
                            'message'       => 'invalid social information', 
                            'errors'        =>  ['message'  =>  [__('login.socail-login-fail')]]
                        ], 401);
                    }     
                }

            }else{
                return response()->json([
                    'status_code'   =>  403,
                    'message'       => 'Invalid social type', 
                    'errors'        =>  ['message'  =>  [__('login.socail-login-invalid')]]
                ], 403);
            }

        }else{ //Then check on username (phone or email)
            $this->validate($request, [
                // 'phone' =>  [
                //                 'sometimes',
                //                 'required', 
                //                 'regex:/(^[0][0-9].{7}$)|(^[0][0-9].{8}$)/'
                //             ],
                // 'email'     =>   [
                //                 'sometimes', 
                //                 'required', 
                //                 'email', 
                //                 'max:100'
                //             ],
                'username' => 'required',
                'password' => 'required|min:6|max:60',
            ], [

                    'phone.required'        =>  __('login.phone-required'), 
                    'phone.regex'           =>  __('login.phone-regex'),

                    'email.required'        =>  __('login.phone-required'), 
                    'email.email'           =>  __('login.email-email'), 
                    'email.max'             =>  __('login.email-max'), 

                    'password.required'     =>  __('login.password-required'),
                    'password.min'          =>  __('login.password-min'),
                    'password.max'          =>  __('login.password-max'),
            ]);

            $credentials = [
                'password'=>$request->post('password'), 
                'is_active'=>1, 
                'deleted_at'=>null
            ];

          
            if(filter_var($username, FILTER_VALIDATE_EMAIL)){
                $credentials['email'] =  $username;
            }else{
                $credentials['phone'] = $username; 
            }

            try{
                if(!$token = JWTAuth::attempt($credentials)){
                    
                    return response()->json([
                        'status_code'   =>  401, 
                        'message'       => 'invalid username and password', 
                        'errors'        =>  ['message'  =>  [__('login.info-not-match')]]
                    ], 401);
                }

            } catch(JWTException $e){
                return response()->json([
                    'status_code'   =>  500, 
                    'message'       => 'token could not be generated.', 
                    'errors'        =>  ['message'  =>  [__('login.no-token')]]
                ], 500);
            }
        }

        // ===================================>> Existing User
        $user = JWTAuth::toUser($token);
        $existingUser = User::select('id', 'name', 'phone', 'is_phone_verified', 'avatar')
        ->find($user->id);
       
        // ===================================>> Find Subscription
        $ipAddress  = new IpAddress;
        $ip         = $ipAddress::getIP(); 

        //Save Logs
        // $log = new Log;
        // $log->user_id   = $user->id;
        // $log->ip        = $ip;
        // $log->save();

        $subData = []; 
        // ===================================>> For Mobile App
        if($request->panel == 'mobile'){

            // ===================================>> Check Device
            // check if this device is already listed. 
            if($request->app_token && $request->os){
                $checkedDeviceData = [
                    'user_id' => $user->id, 
                    'app_token' => $request->app_token, 
                    'device' => $request->os
                ]; 
                $existingDevice = Device::where($checkedDeviceData)
                ->first(); 

                if(!$existingDevice){
                    $checkedDeviceData['is_blocked'] = 0; 
                    $checkedDeviceData['created_at'] = now(); 
                    Device::insert($checkedDeviceData);
                }

                //Check number of Active Devices
                $activeDevices = Device::where([
                    'user_id'       => $user->id, 
                    'is_blocked'    => 0
                ])
                ->orderBy('id', 'DESC')
                ->get(); 

                if(count($activeDevices) > 3){
                    $toBeBlockedDevice = $activeDevices[3]; 
                    if(isset($activeDevices[3])){

                        $activeDevices[3]->is_blocked = 1; 
                        $activeDevices[3]->blocked_at = now();
                        $activeDevices[3]->ref_id = $activeDevices[0]->id; 
                        $activeDevices[3]->save(); 
                    } 
                }

            }else{
                return response()->json([
                    'message'           =>  'Please provide information of App Token & OS'
                ], 403);
            }

            // ===================================>> Find Subscription


            
           
        }

       

        // ===================================>> User Data
        $userData = [
            'name' => $user->name, 
            'uid' => $user->uid, 
            'phone' => $user->phone, 
            'avatar' => $user->avatar
        ]; 

        // ===================================>> Check Role
        $role = 'អភិបាល'; 
        $isMember = 0;
        $isAdmin = 0;
        $rank = 'no-rank';
        $slug = 'Admin';

        if($user->member){
            if($user->uid != 'GCF000001'){
                $role       = 'សមាជិក'; 
                $slug       = 'Member';
                $isMember  = 1;
            }

        }else{
            $isAdmin = 1;
            // $slug    = 'Admin';
        }

        // if($user->member->rank_id > 1){
        //     $rank =  'have-rank';
        // }else{
        //     $rank = 'no-rank';
        // }
        return response()->json([
            'token'             =>  $token, 
            'token_expired'     =>  Carbon::now()->addDays(10)->format('Y-m-d H:i:s'),
            'role'              =>  $role, 
            'slug'              =>  $slug,
            'rank'              => $rank,
            'user'              =>  $userData,
            'message'           =>  __('login.login-success')
        ], 200);
          
    }
}
