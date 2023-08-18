<?php

namespace App\GCF\Bot;

use TelegramBot;
use App\Http\Controllers\Controller;

class BotDepot extends Controller
{
    

    // Used by Member
    public static function new($depotRequest){
        if($depotRequest){

            $chatID = env('BRANCH_DEPOT_CHANNEL_CHAT_ID'); 


            $res = TelegramBot::sendMessage([
                'chat_id' => $chatID, 
                'text' => '
                
Branch: '.$depotRequest->branch_id.'
District: '.$depotRequest->district->name.'

By: MGTB

',               'parse_mode' => 'HTML'
            ]);

            return $res; 
        }
    }

    // Used by Master
    public static function action($depotRequest, $action = "Succefully Accepted"){
        if($depotRequest){

            $chatID = env('BRANCH_DEPOT_CHAT_ID'); 

            $res = TelegramBot::sendMessage([
'chat_id' => $chatID, 
'text' => '<b>'.$action.'</b>
Branch: '.$depotRequest->branch.' 
District: '.$depotRequest->district.' 
UID: '.$depotRequest->member->user.'

Name: <b>'.$depotRequest->member->user->name.'</b>
Phone: '.$depotRequest->member->user->phone.' 
By: MGTB

',               'parse_mode' => 'HTML'
            ]);

            return $res; 
        }
    }

  
 
}
