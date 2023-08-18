<?php

namespace App\Api\V1\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use JWTAuth;
use Carbon\Carbon;
use App\Api\V1\Controllers\ApiController;
use App\Model\User\Main as User;
use App\Model\Member\Main as Member;
use App\CamCyber\FileUpload;
use App\Model\User\Code;
// use App\Model\Setup\Province;
// use App\Model\Setup\District;
use App\CamCyber\SMS;
use App\BH\Account;
use App\BH\Bot\BotRegister;
use App\BH\PV; 

//========================== Use Mail
use Illuminate\Support\Facades\Mail;
use App\Mail\Notification;
use Illuminate\Support\Facades\DB;

class RegisterController extends ApiController
{

    public function register(Request $request) {
      
        $this->validate($request, [
         
            'name'      => 'required|max:60',
            'phone'     =>  [
                            'required',  
                             Rule::unique('user', 'phone')
                        ],
            'password'  => 'required|min:6|max:60',
            'ref'       => 'required'

        ], [

            'phone.unique'=>'លេខទូរស័ព្ទនេះត្រូវបានយករួចហើយ។ សូមព្យាយាមមួយផ្សេងទៀត។', 
            'phone.regex'=>'លេខទូរស័ព្ទមិនត្រឹមត្រូវ។ សូមព្យាយាមមួយផ្សេងទៀត។', 
            'phone.required'=>'លេខទូរស័ព្ទត្រូវបានទាមទារ។', 
            'email.unique'=>'អ៊ីមែលត្រូវបានយករួចហើយ។',
        ]);

        //Check for valid ref
        $ref = Member::whereHas('user', function($query) use ($request){
            $query->where('uid', $request->ref); 
        })
        //->where('rank_id', '>', 1)
        ->first(); 

        if($ref){

            DB::beginTransaction();

            try {


            //====================================>> Create New user
            $user = new User();
            $user->type_id      = 2;
            $user->uid          = Account::generateUid();
            $user->name_kh      = $request->input('name_kh');
            $user->name         = $request->input('name');
            $user->phone        = $request->input('phone');
            $user->email        = $request->input('email');
            $user->is_active    = 0;
            $user->password     = bcrypt($request->input('password'));
            $user->save();
            
            //====================================>> Create New Member
            $member                                 =   new Member;  
            $member->user_id                        =   $user->id; 
            $member->rank_id                        =   1;
            $member->referral_id                    =   $ref->id; 
            $member->chart_parent_id                =   $request->input('node');
            $member->chart_parent_prefer_direction  =   $request->input('direction');
            $member->save(); 

            // ====================================>> Create Node
            
            PV::createChartNode($member); 

            $notification = $this->getSMSCode($request->input('phone'));
            //====================================>> Send Email Verify Code
            // $notification = $this->getEmailCode($request->input('email'));
           $botRes = BotRegister::newRegister($member, 'Online', $notification['code']); 

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollback();
            throw $e;
        }

            return response()->json([
                'status'        => 'success',
                'message'       => 'គណនីត្រូវបានបង្កើតដោយជោគជ័យ។', 
                'data'          => $user,
                'member'        => $member,  
                'notification'  => $notification,
               'botRes' => $botRes
            
            ], 200); 

        }else{
            return response()->json([
                'message'       => 'ព័តមាន Referral មិនត្រឹមត្រូវ។ សូមពិនិត្យម្តងទៀត។'
            ], 400); 
        }
     
    }

    public function networkRegister(Request $request) {
      
        $this->validate($request, [
         
            'name'      => 'required|max:60',
            'phone'     =>  [
                            'required',  
                             Rule::unique('user', 'phone')
                        ],
            'password'  => 'required|min:6|max:60',
            'ref'       => 'required'

        ], [

            'phone.unique'=>'លេខទូរស័ព្ទនេះត្រូវបានយករួចហើយ។ សូមព្យាយាមមួយផ្សេងទៀត។', 
            'phone.regex'=>'លេខទូរស័ព្ទមិនត្រឹមត្រូវ។ សូមព្យាយាមមួយផ្សេងទៀត។', 
            'phone.required'=>'លេខទូរស័ព្ទត្រូវបានទាមទារ។', 
            'email.unique'=>'អ៊ីមែលត្រូវបានយករួចហើយ។',
        ]);

        //Check for valid ref
        $ref = Member::whereHas('user', function($query) use ($request){
            $query->where('uid', $request->ref); 
        })
        //->where('rank_id', '>', 1)
        ->first(); 

        if($ref){

            DB::beginTransaction();

            try {


            //====================================>> Create New user
            $user = new User();
            $user->type_id      = 3;
            $user->uid          = Account::generateUid();
            $user->name_kh      = $request->input('name_kh');
            $user->name         = $request->input('name');
            $user->phone        = $request->input('phone');
            $user->email        = $request->input('email');
            $user->is_active    = 1;
            $user->is_phone_verified    = 1;
            $user->phone_verified_at = now();
            $user->password     = bcrypt($request->input('password'));
            $user->save();
            
            //====================================>> Create New Member
            $member                                 =   new Member;  
            $member->user_id                        =   $user->id; 
            $member->rank_id                        =   1; //
            $member->referral_id                    =   $ref->id; 
            $member->chart_parent_id                =   $request->input('node');
            $member->chart_parent_prefer_direction  =   $request->input('direction');
            $member->save(); 

            // ====================================>> Create Node
            
            PV::createChartNode($member); 

            $notification = $this->getSMSCode($request->input('phone'));
            //====================================>> Send Email Verify Code
            // $notification = $this->getEmailCode($request->input('email'));
           $botRes = BotRegister::newRegister($member, 'Online', $notification['code']); 

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollback();
            throw $e;
        }

            return response()->json([
                'status'        => 'success',
                'message'       => 'គណនីត្រូវបានបង្កើតដោយជោគជ័យ។', 
                'data'          => $user,
                'member'        => $member,  
                'notification'  => $notification,
               'botRes' => $botRes
            
            ], 200); 

        }else{
            return response()->json([
                'message'       => 'ព័តមាន Referral មិនត្រឹមត្រូវ។ សូមពិនិត្យម្តងទៀត។'
            ], 400); 
        }
     
    }

    public function getSMSCode($phone) {
        
        $user = User::where(['phone'=>$phone,'deleted_at'=>null])->first(); 
        if($user){
            $code = new Code; 
            $code->user_id = $user->id; 
            $code->code = rand(100000, 999999);
            $code->type = 'VERIFY';
            $code->is_verified = 0; 
            $code->save(); 

            $notification = [
                'name'      => $user->name,
                'code'      => $code->code,
            ];
            
            $sms = SMS::sendSMS($user->phone, 'សូមប្រើលេខកូដនេះ :'.$code->code.' ដើម្បីផ្ទៀងផ្ទាត់សំណើរបស់អ្នក។ សូមអរគុណ!');

            $sms = Code ::select($user->phone, 'សូមប្រើលេខកូដនេះ :'.$code.' ដើម្បីផ្ទៀងផ្ទាត់សំណើរបស់អ្នក។ សូមអរគុណ!');

            return $notification;
        }   

    }

    public function getEmailCode($email) {
        
        $user = User::where(['email'=>$email, 'deleted_at'=>null])->first(); 
       
        if($user){

            $code = new Code; 
            $code->user_id = $user->id; 
            $code->code = rand(10000000, 999999);
            $code->type = 'VERIFY';
            $code->is_verified = 0; 
            $code->save(); 

            $notification = [
                'name'      => $user->name,
                'code'      => $code->code,
            ];
            // $notification       = [
            //     'username'      => $user->username,
            //     'member'        => $user->name,
            //     'email'         => $user->email,
            //     'phone'         => $user->phone,
            //     'country'       => $user->country->name
            // ];
            Mail::to($user->email)->send(new Notification('Welcome New Member', $notification, 'emails.member.account.verify-email'));

            return $notification;
        }   

    }
    
    public function getTelegramCode($phone) {
        
        $user = User::where(['phone'=>$phone, 'deleted_at'=>null])->first(); 

        if ($user) {
        
           $token   = getenv( "TELEGRAM_BOT_TOKEN" );
           $chatID  = getenv( "REGISTER_CHANNEL_CHAT_ID" );

           $code = new Code; 
           $code->user_id = $user->id; 
           $code->code = rand(100000, 999999);
           $code->type = 'VERIFY';
           $code->is_verified = 0; 
           $code->save(); 

           $data = [
            
            // 'message'    => $message,  
               'code'     => $code->code,                           
           ];
        
        //  $file = file_get_contents( "http://api.telegram.org/bot$token/sendMessage?" . http_build_query( $data ) );
        };

    }
  
    public function verifyAccount(Request $request) {
        
        $this->validate($request, [
            'phone'  => 'required',
            'code'      => 'required|min:6',
        ]);
        
        $code = $request->post('code'); 

        $data = Code::where(['code'=>$code, 'type'=>'VERIFY'])->orderBy('id', 'DESC')->first(); 
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
                                $sms = SMS::sendSMS($user->phone, 'សូមអរគុណសម្រាប់ការចុះឈ្មោះរបស់អ្នក។ លេខសម្គាល់អ្នកប្រើរបស់អ្នកគឺ '.$user->uid.'. សូមរីករាយជាមួយការវិនិយោគ!');

                                 $sms = Code::select($user->phone, 'សូមអរគុណសម្រាប់ការចុះឈ្មោះរបស់អ្នក។ លេខសម្គាល់អ្នកប្រើរបស់អ្នកគឺ '.$user->uid.'. សូមរីករាយជាមួយការវិនិយោគ!');
                                //$sms = SMS::sendSMS($user->phone, 'Please use this code :'.$code->code.' to verify your request. Thanks!');

                            }
                        }
                        $user->save();
                        //Crate token
                        $token = JWTAuth::fromUser($user);

                       $botRes = BotRegister::registerVerify($user->member, $request->post('code')); 
                        
                        return response()->json([
                            'status'=> 'success',
                            'token'=> $token, 
                            'botRes' => $botRes
                        ], 200);
                    }else{
                         return response()->json([
                            'status'=> 'error',
                            'message'=> 'លេខកូដបានបញ្ជាក់រួចហើយ' 
                        ], 200);
                    }
                        


                }else{
                     return response()->json([
                        'status'=> 'error',
                        'message'=> 'រកមិនឃើញអ្នកប្រើប្រាស់' 
                    ], 200);
                }
            }else{
                return response()->json([
                    'status'=> 'error',
                    'message'=> 'លេខកូដផុតកំណត់'
                ], 200);
            }
                
        }else{
            return response()->json([
                'status'=> 'error',
                'message'=> 'លេខកូដមិនត្រឹមត្រូវ' 
            ], 200);
        }
    }

    public function requestverifyCode(Request $request){
        $user = User::where('phone',$request->username)->orWhere('email', $request->username)->first();
        if($user){

            if(filter_var($request->post('username'), FILTER_VALIDATE_EMAIL)){
                $notification = $this->getEmailCode($request->input('username'));  
                return response()->json([
                    'status'        => 'success',
                    'message'       => 'លេខកូដត្រូវបានផ្ញើឡើងវិញ', 
                    // 'notification'  => $notification,
                ], 200);     
              
            } else{
               $notification = $this->getSMSCode($request->input('username'));
               //====================================>> Send Phone Request Verify Code
                $botRes = BotRegister::registerRequestVerifyCode($user, 'Online', $notification['code']); 
               return response()->json([
                'status'        => 'success',
                'message'       => 'លេខកូដត្រូវបានផ្ញើឡើងវិញ', 
                // 'notification'  => $notification,
            ], 200);   
            }
        }else{
            return response()->json([
                'status'=> 'error',
                'message'=> 'ឈ្មោះអ្នកប្រើមិនត្រឹមត្រូវ' 
            ], 404);
        }
        

    }

}
