<?php

namespace App\Api\V1\Controllers\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use JWTAuth;
use TelegramBot;
use Carbon\Carbon;

use App\Api\V1\Controllers\ApiController;
use App\Model\User\Code;
use App\Model\User\Main as User;

//========================== Use Mail
use Illuminate\Support\Facades\Mail;
use App\Mail\Notification;
use App\BH\Bot\BotForgetPassword;
use App\CamCyber\SMS;

class ForgotPasswordController extends ApiController
{
    // public function getResetPasswordCode(Request $request) {   
    //     $this->validate($request, [
    //          'username' => [
    //                         'required'
    //                     ],
    //     ]);
        
    //     $username = $request->username; 
    //     if(filter_var($username, FILTER_VALIDATE_EMAIL)){
    //         $user = User::where(['email'=>$username,  'deleted_at'=>null])->first(); 
    //     }else{
    //         $user = User::where(['phone'=>$username,  'deleted_at'=>null])->first(); 
    //     }
    //     if($user){
            
    //         $code = new Code; 
    //         $code->user_id = $user->id; 
    //         $code->code = rand(10000000, 999999);
    //         $code->type = 'PASSWORD';
    //         $code->is_verified = 0; 
    //         $code->save(); 

    //         $notification = [
    //             'name'      => $user->name,
    //             'code'      => $code->code,
    //         ];

    //         if(filter_var($username, FILTER_VALIDATE_EMAIL)){
    //             Mail::to($user->email)->send(new Notification('កំណត់លេខកូដសំងាត់ឡើងវិញ', $notification, 'emails.member.account.reset-password-code'));
    //         }else{
                
    //             $sms = SMS::sendSMS($user->phone, 'សូមប្រើលេខកូដនេះ :'.$code->code.' ដើម្បីផ្ទៀងផ្ទាត់គណនីរបស់អ្នក។ សូមអរគុណ!');
    //           //  $sms = Code ::select($user->phone, 'សូមប្រើលេខកូដនេះ :'.$code->code.' ដើម្បីផ្ទៀងផ្ទាត់គណនីរបស់អ្នក។ សូមអរគុណ!');
    //            // $botRes = BotForgetPassword::newForgetPassword($user->member, $request->post('code'));
    //             $botRes = BotForgetPassword::newForgetPassword($user->member, 'Online', $code->code); 

    //         }

    //         return response()->json([
    //             'status'=> 'success',
    //             'message'=> 'លេខកូដត្រូវបានផ្ញើ',
    //             'botRes' => $botRes

    //         ], 200);
               
    //     }else{
    //         return response()->json([
    //             'status'=> 'error',
    //             'message'=> 'រកមិនឃើញអ្នកប្រើប្រាស់' 
    //         ], 400);
    //     }

    // }

    public function getResetPasswordCode(Request $request) {   
        $this->validate($request, [
             'phone' => [
                            'required'
                        ],
        ]);
        
        $phone = $request->phone; 
        $user = User::where(['phone'=>$phone,  'deleted_at'=>null])->first(); 
       
        if($user){
            
            $code = new Code; 
            $code->user_id = $user->id; 
            $code->code = rand(10000000, 999999);
            if($request->purpose == 'PASSWORD'){
                $code->type = 'PASSWORD';
            }else{
                $code->type = 'VERIFY';
            }
            $code->is_verified = 0; 
            $code->save(); 

            $notification = [
                'name'      => $user->name,
                'code'      => $code->code,
            ];
            
            $sms = SMS::sendSMS($user->phone, 'Please use this code :'.$code->code.' to verify your account. Thanks!');
            return response()->json([
                'status'=> 'success',
                'message'=> 'code-has-been-sent',
            ], 200);
               
        }else{
            return response()->json([
                'status'=> 'error',
                'message'=> 'user-not-found' 
            ], 200);
        }

    }

    public function verifyResetPasswordCode(Request $request) {
        
        $this->validate($request, [
            'username' => 'required',
            'code' => 'required|min:6',
        ]);
        
        $code = $request->post('code'); 

        $data = Code::where(['code'=>$code, 'type'=>'PASSWORD'])->orderBy('id', 'DESC')->first(); 
        $totalMinutesDifferent = 0;
        if($data){
            //Check if expired
            $created_at = Carbon::parse($data->created_at);
            $now = Carbon::now(env('APP_TIMEZONE')); 
            $totalMinutesDifferent = $now->diffInMinutes($created_at);

            if($totalMinutesDifferent < 30){
                $user = User::findOrFail($data->user_id);
                if($user){
                    
                    //Updated Code
                    $code = Code::find($data->id); 
                    if($code->is_verified == 0){
                        $code->is_verified = 1; 
                        $code->verified_at = now(); 
                        $code->save(); 

                        $user->is_active = 1; 
                        $user->is_phone_verified = 1; 
                        
                        if(filter_var($request->post('username'), FILTER_VALIDATE_EMAIL)){
                           
                            if($user->email){
                                $user->is_email_verified = 1; 
                                $user->email_verified_at = now();
                            }
                        } else{
                            if($user->phone){    
                                $user->is_phone_verified = 1; 
                                $user->phone_verified_at = now();
                                //Send Notification
                                //$sms = SMS::sendSMS($user->phone, 'Thanks for your registration. Your user ID is '.$user->uid.'. Enjoy Investing!');
                                $sms = Code ::select($user->phone, 'Thanks for your registration. Your user ID is '.$user->uid.'. Enjoy Investing!');
                                $botRes = BotForgetPassword::verifyResetPasswordCode($user->member); 

                            }
                        }
                        $user->save(); 
                        //Crate token
                        $token = JWTAuth::fromUser($user);
                        return response()->json([
                            'status'=> 'success',
                            'token'=> $token ,
                            'botres'=> $botRes
                        ], 200);
                    }else{
                         return response()->json([
                            'status'=> 'error',
                            'message'=> 'លេខកូដបានបញ្ជាក់រួចហើយ' 
                        ], 401);
                    }
                        
                }else{
                     return response()->json([
                        'status'=> 'error',
                        'message'=> 'រកមិនឃើញអ្នកប្រើប្រាស់' 
                    ], 401);
                }
            }else{
                return response()->json([
                    'status'=> 'error',
                    'message'=> 'លេខកូដផុតកំណត់'
                ], 401);
            }
                
        }else{
            return response()->json([
                'status'=> 'error',
                'message'=> 'លេខកូដមិនត្រឹមត្រូវ' 
            ], 400);
        } 
    }

    public function changePassword(Request $request) {
        
        $this->validate($request, [
            'password' => 'required|min:6|max:20|confirmed',
            'password_confirmation' => 'required|min:6'
        ],
        [
            'password.required'     => 'សូម​បញ្ចូល​ពាក្យ​សម្ងាត់​របស់​អ្នក។',
            'password.min'          => 'លេខសម្ងាត់ត្រូវតែមានយ៉ាងហោចណាស់ ៦ តួអក្សរ។',
            'password.max'          => 'លេខសម្ងាត់ត្រូវតែមានច្រើនជាង ២០ តួអក្សរ។',
            'password.confirmed'    => 'សូមបញ្ជាក់ពាក្យសម្ងាត់ថ្មីរបស់អ្នក។',
        ]);
        
        $user = JWTAuth::toUser($request->token);
        if($user){

            $user->password_last_updated_at = now();
            $user->password = bcrypt($request->input('password'));
            $user->save(); 

            return response()->json([
                'status'=> 'success',
                'message'=>'ពាក្យសម្ងាត់ត្រូវបានផ្លាស់ប្ដូរដោយជោគជ័យ។'
            ], 200);

        }else{
            return response()->json([
                'status'=> 'fail',
                'message'=>'សញ្ញា​សម្ងាត់​មិន​ត្រឹមត្រូវ'
            ], 401);
        }   

    }

}
