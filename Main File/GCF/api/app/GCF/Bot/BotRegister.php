<?php

namespace App\GCF\Bot;

use TelegramBot;
use App\Http\Controllers\Controller;

class BotRegister extends Controller
{
    

    // =========================================================================================>> Register
    public static function newRegister($member, $chanel = "Online", $code = ""){
        if($member){

            $chatID = env('REGISTER_CHANNEL_CHAT_ID'); 

            $res = TelegramBot::sendMessage([
                'chat_id' => $chatID, 
                'text' => ' <b>Account Registered</b>
UID: '.$member->user->uid.' 
Name: '.$member->user->name.'
✆ Phone: '.$member->user->phone.'
Channel: '.$chanel.'
Verify Code: '.$code.'

',               'parse_mode' => 'HTML'
            ]);

            return $res; 
        }
    }

    public static function registerVerify($member, $code = ""){
        if($member){

            $chatID = env('REGISTER_CHANNEL_CHAT_ID'); 

            $res = TelegramBot::sendMessage([
                'chat_id' => $chatID, 
                'text' => ' <b>Successfully Verified</b>
UID: '.$member->user->uid.' 
Name: '.$member->user->name.'
✆ Phone: '.$member->user->phone.'
 Verify Code: '.$code.'

',
'parse_mode' => 'HTML', 
'reply_to_message' => 14
            ]);

            return $res; 
        }
    }

    public static function registerRequestVerifyCode($user, $chanel = "Online", $code = ""){
        if($user){

            $chatID = env('REGISTER_CHANNEL_CHAT_ID');
            // $chatID = Telegram::where('slug', 'REGISTER_CHANNEL_CHAT_ID')->first()->chat_id;

            $res = TelegramBot::sendMessage([
                'chat_id' => $chatID, 
                'text' => ' <b>កូដផ្ទៀងផ្ទាត់ឡើងវិញដោយជោគជ័យ</b>
 - លេខសម្គាស់ខ្លួន: '.$user->uid.'
 - ឈ្មោះ: '.$user->name.'
 - លេខទូរស័ព្ទ: '.$user->phone.'
 - លេខកូដផ្ទៀងផ្ទាត់: '.$code.'

',               'parse_mode' => 'HTML'
            ]);

            return $res; 
        }
    }
    
 
}
