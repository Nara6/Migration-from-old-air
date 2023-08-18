<?php

namespace App\GCF\Bot;

use TelegramBot;
use App\Http\Controllers\Controller;

class BotOrder extends Controller
{
    

    // Used by Member
    public static function new($order){
        if($order){

            $chatID = env('ORDER_CHANNEL_CHAT_ID'); 

            $res = TelegramBot::sendMessage([
                'chat_id' => $chatID, 
                'text' => '
UID: '.$order->member->user->uid.' 
Customer: '.$order->member->user->name.' 
Phone: '.$order->member->user->phone.'
Location: '.$order->member->user->location.'

Seller: '.$order->member->user->uid.' 
Role: '.$order->member->user->name.' 
Phone: '.$order->member->user->phone.'

Number: <b>'.$order->receipt_number.'</b>
$ T.Price: '.$order->total_price.' 


',               'parse_mode' => 'HTML'
            ]);

            return $res; 
        }
    }

    // Used by Master
    public static function action($purchase, $action = "Succefully Accepted"){
        if($purchase){

            $chatID = env('ORDER_CHANNEL_CHAT_ID'); 

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
