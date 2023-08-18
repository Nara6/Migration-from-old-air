<?php

namespace App\CamCyber;

use App\Http\Controllers\Controller;
use Twilio\Rest\Client;

class SMS extends Controller

{
  
    public static function sendSMS($receivNumber = '085740500', $message = 'Hello'){

        if(preg_match("/(^[0][0-9].{7}$)|(^[0][0-9].{8}$)/", $receivNumber)){
            
            $client = new Client(env('TWILIO_SID'),env('TWILIO_TOKEN'));
           // $sms = $client->messages->create('+855'.substr($receivNumber, 1), ['from' => '+15182784350', 'body' => $message]);
           
            return ['status'=>'success', 'message'=>'Message has been sent']; 
        }else{
           return ['status'=>'error', 'message'=>'Invalid number']; 
        }
            
    }
 
 
}
