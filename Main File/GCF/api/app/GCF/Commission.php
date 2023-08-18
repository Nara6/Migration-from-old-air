<?php

namespace App\GCF;

use Carbon\Carbon;

use App\Model\Member\Main as Member;
use App\Model\Package\Main as Package;

use App\Model\Member\Rank;

use App\BH\Wallet; 

use App\Enum\TrxType; 
use App\Enum\TrxCategory; 
use App\Enum\Currency; 

class Commission{
    
    // =========================================================================>> Order
    public static function order($order){

        
        $trxs = []; 
        // Find Referral
        $referral = $order->buyer->referral; 
        if($referral && $referral->rank){
           
                
            $rank = Rank::with(['commissions'])->find($referral->rank->id); 
            if($rank){
                //============>> Level 1

                $member = Member::where('rank_id', '>', 1)->find($order->buyer->referral_id); 
                

                if($member){

                    $trxs[] = Wallet::updateBalance([
                        'categoryId'    => TrxCategory::Referral,
                        'currencyId'    => Currency::ECASH, 
                        'typeId'        => TrxType::Received,
                        'amount'        => $order->total_pv*$rank->commissions[0]->commission*0.01, 
                        'memberId'      => $member->id, 
                        'orderId'       => $order->id,
                        'description'   => 'From '.$order->buyer->user->uid.  ' #'.$order->receipt_number. ' A:'.$order->total_pv. ' L:1 C:'.number_format($rank->commissions[0]->commission).'%'
                    ]);


                    //Check if Account is activated
                    if(Carbon::today()->lessThanOrEqualTo($member->rank_expired)){
                       
                    }else{
                        $trxs[] = ['err' => $member->user->uid.' is not active ']; 
                        //TODO: Send notification to the member
                    }
                   
                 
                }

                //============>> Level 2
                if(isset($rank->commissions[1])){
                    $member = Member::find($member->referral_id); 
                    if($member){

                        $trxs[] = Wallet::updateBalance([
                            'categoryId'    => TrxCategory::Referral,
                            'currencyId'    => Currency::ECASH, 
                            'typeId'        => TrxType::Received,
                            'amount'        => $order->total_pv*$rank->commissions[1]->commission*0.01, 
                            'memberId'      => $member->id, 
                            'orderId'       => $order->id,
                            'description'   => 'From '.$order->seller->user->uid.  ' #'.$order->receipt_number. ' A:'.$order->total_pv. ' L:2 C:'.number_format($rank->commissions[1]->commission).'%'
                        ]);

                        
                       
                       
                    }

                }
            
            }
        }

        return $trxs; 
  
    }

    public static function todayEarning(){
        
    }
  
}
