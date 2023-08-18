<?php

namespace App\GCF;

use Carbon\Carbon;

use App\Model\Member\Main as Member;
use App\Model\User;
use App\Model\Transaction\Transaction as Trx;

use App\Enum\TrxCategory; 
use App\Enum\Currency; 

class Wallet{
    
  
    public static function updateBalance(array $params = [], $currency = '', $type = 'active'){
        
        //Get member current wallet; 
        $wallet = Self::checkBalance($params['memberId'], $params['currencyId']); 
        $balance = 0; 
        if($params['typeId'] == 1){
            $balance = $wallet-$params['amount'];
        }else{
            $balance = $wallet; 

            if( $type == 'active' ){
                $balance += $params['amount'];
            }
        }; 
        
        $trx                = new Trx; 
        $trx->type_id       = $params['typeId'];
        $trx->category_id   = $params['categoryId'];
        $trx->currency_id   = $params['currencyId'];
        $trx->member_id     = $params['memberId'];
        $trx->trx           = self::generateTrxNumber(); 
        
        if(isset($params['adminId'])){
            $trx->admin_id      = $params['adminId']; 
        }

        if(isset($params['orderId'])){
            $trx->order_id      = $params['orderId']; 
        }

        if(isset($params['purchaseId'])){
            $trx->purchase_id  = $params['purchaseId']; 
        }

        $trx->amount        = $params['amount'];
        $trx->balance       = $balance;
        $trx->description   = $params['description'];
        $trx->save();

        if(Currency::ECASH == $trx->currency_id){
            $trx->member->ecash = $balance;
            $trx->member->save(); 
        }elseif(Currency::EPOINT == $trx->currency_id){
            $trx->member->epoint = $balance;
            $trx->member->save(); 
        }
       

        return $trx; 

    }

    public static function checkBalance($uid = 0, $currencyId = 0){
        $member = Member::whereHas('user', function($query) use ($uid){
            $query->where('uid', $uid); 
        })
        ->first(); 

        if(!$member){
            $member = Member::find($uid); 
        }

        if($member){
            $trx = Trx::select('balance')
            ->where('member_id', $member->id)
            ->where('currency_id', $currencyId)
            ->orderBy('id', 'DESC')->first(); 
            if($trx) return $trx->balance; else  return 0; 
        }else{
            return 0; 
        }
       

    }

    public static function todayEarning($memberId = 0){

        $totalAmount = Trx::where('created_at', '>=', Date('Y-m-d 00:00:00'))
        ->where([
            'currency_id' => Currency::ECASH, 
            'category_id' => TrxCategory::Referral, 
            'member_id'     => $memberId
        ])
        ->sum('amount'); 

        return $totalAmount; 
        
    }

    private static function generateTrxNumber(){
        $number = rand(10000000000000, 999999999999); 

        $check = Trx::where('trx', $number)->first(); 
        if($check){
            return $this->getReceiptNumber(); 
        }

        return $number; 
    }

   
}
