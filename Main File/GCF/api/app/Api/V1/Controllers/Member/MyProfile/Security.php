<?php

namespace App\Api\V1\Controllers\Member\MyProfile;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use App\MGTB\Account;

use App\CamCyber\FileUpload;

use App\Api\V1\Controllers\ApiController;
use App\Model\User\Main;
use App\Model\User\Code as Code;

use App\Model\Admin\Admin as Model;
use App\Model\Member\Main as Member;

use Dingo\Api\Routing\Helpers;
use JWTAuth;

//========================== Use Mail
use Illuminate\Support\Facades\Mail;
use App\Mail\Notification;
use App\CamCyber\SMS;

class Security extends ApiController
{
    use Helpers;
    
    //======================================================================================>> Email Verification
    // function sendEmailVerifyCode(){
    //     $user = JWTAuth::parseToken()->authenticate();
    //     //===================================================>> Create Verify Code
    //     $data = New Code;
    //     $data->user_id      = $user->id;
    //     $data->type         = "Email-Verify"; 
    //     $data->code         = Account::generateVerificationCode();
    //     $data->is_verified  = 0;
    //     $data->save(); 

    //     //===================================================>> Send Email Notification to member
    //     $notification = [
    //         'name'      => $user->name, 
    //         'code'      => $data->code
    //     ];
    //     Mail::to($user->email)->send(new Notification('Email Verification', $notification, 'emails.member.account.verify-email'));

    //     return response()->json([
    //             'status' => 'success',
    //             'message' => 'Please check your email address for verification. Thanks!!!'
    //         ], 200);   
    // }

    // function verifyEmail(Request $request){
    //     $code = $request->input('code');
    //     $data = Code::where(['code'=>$code, 'type'=>'Email-Verify'])->first(); 


    //     if($data){ //Check if it valid. 
    //         $now    = date_create(now());
    //         $date   = date_create($data->created_at);
    //         $interval = date_diff($now, $date);
            
    //         if($interval->i < 30){ //Check if code has been verified
    //             if($data->is_verified == 0){ //Check if code has been verified

    //                 $data->is_verified = 1; 
    //                 $data->verified_at = now(); 
    //                 $data->save(); 

    //                 //Update email to be verify. 
    //                 $user = Main::findOrFail($data->user_id); 
    //                 $user->is_email_verified = 1; 
    //                 $user->email_verified_code = $code; 
    //                 $user->email_verified_at = now(); 
    //                 $user->save(); 

    //                 //Send Notification
    //                 $notification = [
    //                     'name'      => $user->name
    //                 ];
                    
    //                 Mail::to($user->email)->send(new Notification('Email Verification', $notification, 'emails.member.account.verify-email-success'));
                    
    //                 return response()->json([
    //                     'status' => 'success',
    //                     'message' => 'Your email has been verified. ',
    //                 ], 200);   

    //             }else{
    //                 return response()->json([
    //                     'status' => 'code-already-used',
    //                     'message' => 'Your has already been used.',
    //                 ], 200);   
    //             }
    //         }else{
    //             return response()->json([
    //                 'status' => 'code-expired',
    //                 'message' => 'You code has expired. Please try again.',
    //             ], 200);   
    //         }
    //     }else{
    //         return response()->json([
    //             'status' => 'code-valid',
    //             'message' => 'You code is not valid. Please try again. ',
    //         ], 200);   
    //     }
    // }

    //======================================================================================>> Email Verification
    function sendPhoneVerifyCode(){
        $user = JWTAuth::parseToken()->authenticate();
        //===================================================>> Create Verify Code
        $data = New Code;
        $data->user_id      = $user->id;
        $data->type         = "Phone-Verify"; 
        $data->code         = Account::generateVerificationCode();
        $data->is_verified  = 0;
        
        $data->save(); 

        //===================================================>> Send Phone Notification to member
        $notification = [
            'name'      => $user->name, 
            'code'      => $data->code
        ];

       // $sms = SMS::sendSMS($user->phone, 'Please use this code :'.$data->code.' to verify your account. Thanks!');

        return response()->json([
                'status' => 'success',
                'message' => 'សូមពិនិត្យទូរស័ព្ទហើយទទួលយកការផ្ទៀងផ្ទាត់លេខកូដ។ សូមអរគុណ !!!'
            ], 200);   
    }

    function verifyPhone(Request $request){
        $code = $request->input('code');
        $data = Code::where(['code'=>$code, 'type'=>'Phone-Verify'])->first(); 


        if($data){ //Check if it valid. 
            $now    = date_create(now());
            $date   = date_create($data->created_at);
            $interval = date_diff($now, $date);
            
            if($interval->i < 30){ //Check if code has been verified
                if($data->is_verified == 0){ //Check if code has been verified

                    $data->is_verified = 1; 
                    $data->verified_at = now(); 
                    $data->save(); 

                    //Update email to be verify. 
                    $user = Main::findOrFail($data->user_id); 
                    $user->is_phone_verified = 1; 
                    $user->phone_verified_code = $code; 
                    $user->phone_verified_at = now(); 
                    $user->save(); 

                 
                    return response()->json([
                        'status' => 'success',
                        'message' => 'លេខទូរស័ព្ទរបស់អ្នកត្រូវបានផ្ទៀងផ្ទាត់. ',
                    ], 200);   

                }else{
                    return response()->json([
                        'status' => 'code-already-used',
                        'message' => 'Your has already been used.',
                    ], 200);   
                }
            }else{
                return response()->json([
                    'status' => 'code-expired',
                    'message' => 'លេខកូដរបស់អ្នកបានផុតកំណត់។ សូម​ព្យាយាម​ម្តង​ទៀត។',
                ], 200);   
            }
        }else{
            return response()->json([
                'status' => 'code-valid',
                'message' => 'អ្នកមិនត្រឹមត្រូវ។ សូម​ព្យាយាម​ម្តង​ទៀត។ ',
            ], 200);   
        }
    }
   
   
}
