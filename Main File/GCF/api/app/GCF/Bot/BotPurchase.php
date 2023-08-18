<?php

namespace App\GCF\Bot;

use TelegramBot;
use App\Http\Controllers\Controller;

class BotPurchase extends Controller
{
    

    // Used by Member
    public static function new($purchase){
        if($purchase){

            $chatID = env('PURCHASE_CHANNEL_CHAT_ID'); 

            $subscription = $purchase->subscription ? $purchase->subscription->name : 'N/A'; 

            $res = TelegramBot::sendMessage([
                'chat_id' => $chatID, 
                'text' => '
☆ UID: '.$purchase->member->user->uid.' 
 Member: '.$purchase->member->user->name.' 
✆ Phone: '.$purchase->member->user->phone.'

✆ #: <b>'.$purchase->receipt_number.'</b>
$ T.Price: '.$purchase->total_price.' 
$ Subscription: '.$subscription.' 

',               'parse_mode' => 'HTML'
            ]);  

            return $res; 
        }
    }

    // Used by Master
    public static function action($purchase, $action = "Succefully Accepted"){
        if($purchase){

            $chatID = env('PURCHASE_CHANNEL_CHAT_ID'); 

            $subscription = $purchase->subscription ? $purchase->subscription->name : 'N/A'; 

            $res = TelegramBot::sendMessage([
                'chat_id' => $chatID, 
                'text' => '<b>'.$action.'</b>
☆ UID: '.$purchase->member->user->uid.' 
 Member: '.$purchase->member->user->name.' 
✆ Phone: '.$purchase->member->user->phone.'
✆ #: <b>'.$purchase->receipt_number.'</b>
$ T.Price: '.$purchase->total_price.' 
$ Subscription: '.$subscription.' 

',               'parse_mode' => 'HTML'
            ]);

            return $res; 
        }
    }

  
 
}
