<?php

namespace App\GCF\Bot;

use TelegramBot;
use App\Http\Controllers\Controller;

class BotForgetPassword extends Controller
{
    

    // =========================================================================================>> Register
    public static function newForgetPassword($member, $chanel = "Online", $code = ""){
        if($member){

            $chatID = env('FORGET_PASSWORD_CHANNEL_CHAT_ID'); 

            $res = TelegramBot::sendMessage([
                'chat_id' => $chatID, 
                'text' => ' <b>សូមប្រើលេខកូដនេះដើម្បីផ្ទៀងផ្ទាត់គណនីរបស់អ្នក។ សូមអរគុណ!</b>
Name: '.$member->user->name.'
✆ Phone: '.$member->user->phone.'
Channel: '.$chanel.'
Verify Code: '.$code.'

',               'parse_mode' => 'HTML'
            ]);

            return $res; 
        }
    }
     // =========================================================================================>> Register
     public static function verifyResetPasswordCode($member, $chanel = "Online", $code = ""){
        if($member){

            $chatID = env('FORGET_PASSWORD_CHANNEL_CHAT_ID'); 

            $res = TelegramBot::sendMessage([
                'chat_id' => $chatID, 
                'text' => ' <b>Thanks for your registration.</b>
Name: '.$member->user->name.'
✆ Phone: '.$member->user->phone.'
Verify Code: '.$code.'

',               'parse_mode' => 'HTML'
            ]);

            return $res; 
        }
    }
 
}
