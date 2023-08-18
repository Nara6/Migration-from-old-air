<?php

namespace App\Api\V1\Controllers\CP\Dashboard;

use Dingo\Api\Routing\Helpers;
use JWTAuth;
use Carbon\Carbon;

use App\Enum\Currency; 

use App\Api\V1\Controllers\ApiController;
use App\Model\Member\Main as Member;
use App\Model\Member\Rank;
use App\Model\Purchase\Main as Purchase;
use App\Model\Order\Main as Order;
use App\Model\Transaction\Transaction as Transaction;


class DashboardController extends ApiController
{
    use Helpers;
    function getInfo(){

        // =================>> Investment Pool
        $investmentPool = Order::where('all_sales_return_at', null)
        ->select('id', 'total_pv')
        ->sum('total_pv')*0.03
        ;

        // =================>> Rebate
        $orderRebate = Order::where('rebated_at', null)
        ->select('id', 'total_rebate')
        ->sum('total_rebate')
        ;

        $purchaseRebate = Purchase::where('rebated_at', null)
        ->select('id', 'total_rebate')
        ->sum('total_rebate')
        ;

        // =================>> E-Cash
        $ecash = Member::select('id', 'ecash')
        ->where('ecash', '>', 0)
        ->sum('ecash');

        // =================>> E-Point
        $epoint = Member::select('id', 'epoint')
        ->where('epoint', '>', 0)
        ->sum('epoint');

        $rank = [
            'first'  => Rank::select('id', 'name', 'icon')->where('id', '<', 6)->withCount(['members as n_of_members'])->get(), 
            'second' => Rank::select('id', 'name', 'icon')->where('id', '>=', 6)->withCount(['members as n_of_members'])->get()
        ]; 


        return [
            'investment_pool'   => [ 'total' => $investmentPool, 'trend' => []], 
            'pending_rebate'    => [ 'total' => $purchaseRebate + $orderRebate, 'trend' => []], 
            'ecash'             => [ 'total' => $ecash, 'trend' => []], 
            'epoint'            => [ 'total' => $epoint, 'trend' => []],
            'rank'              => $rank
        ];
    }

   

}
