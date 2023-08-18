<?php

namespace App\Api\V1\Controllers\Member\Dashboard;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Dingo\Api\Routing\Helpers;
use JWTAuth;
use Carbon\Carbon;
use App\BH\Bot\BotDepot;

use App\Api\V1\Controllers\ApiController;
use App\Model\Member\Main as Member;
use App\Model\Order\Main as Order;

use App\BH\Wallet; 
use App\Enum\Currency; 

class DashboardController extends ApiController
{
    use Helpers;
    function info(){
        
        $user = JWTAuth::parseToken()->authenticate(); 

        // ==========================>> Stat
        $statistic = [
            'e_cash'            => Wallet::checkBalance($user->uid, Currency::ECASH), 
            'e_point'           => Wallet::checkBalance($user->uid, Currency::EPOINT), 
            'today_earning'     => Wallet::todayEarning($user->member->id), 
            'total_order'       => Order::where('member_id', $user->member->id)->sum('total_price')
        ]; 

        // ==========================>> Stat
        $account = [
        	'uid'                   => $user->uid, 
            'name'                  => $user->name,
            'register_date'         => $user->created_at,
            'phone'                 => $user->phone, 
            'is_phone_verified'     => $user->is_phone_verified, 
            'phone_verified_at'     => $user->phone_verified_at, 
            'bank_name'             => 'N/A', 
            'bank_account_name'     => 'N/A', 
            'bank_account_number'   => 'N/A', 
            'location'              => $user->member->province, 
            'sponsor'               => $user->member->referral, 
            'referral_link'         => env('REFERRAL_LINK').'/#/auth/register?ref='.$user->uid, 
            'rank'                  => [
                'name'      => $user->member->rank->name, 
                'icon'      => $user->member->rank->icon, 
                'expired'   => $user->member->rank_expired, 
            ]
        ]; 

        // ==========================>> Network
        $totalSponsor = Member::where('referral_id', $user->member->id)->count(); 
        $network = [
            'left_pv'           => $user->member->left_pv,
            'left_pv_today'     => $user->member->left_pv_today,
            'right_pv'          => $user->member->right_pv,
            'right_pv_today'    => $user->member->right_pv_today,

            'left_downline'             => $user->member->left_downline,
            'right_downline'            => $user->member->right_downline,
            'direct_sponsor'            => $totalSponsor,
            'total_signup'              => $user->member->left_downline + $user->member->right_downline
        ]; 

        // ==========================>> Bonus
        $bonus = [
            'referral'  => 0,
            'matching'  => 0, 
            'dual_team' => 0
        ];


        return response()->json([
            'statistic'     => $statistic, 
            'account'       => $account,
            'network'       => $network, 
            'bonus'         => $bonus
        ], 200);
    }

    
   
}
