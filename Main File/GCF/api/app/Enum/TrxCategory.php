<?php
namespace App\Enum; 

class TrxCategory {

    const Referral           = 1; // + E-Cash: When referral order product and distributor approves. 
    const DualTeam           = 2; // + E-Cash: When Left PV & Right PV has value and this event happen at 12:00
    const Matching           = 3; // + E-Cash: When referral has DualTeam Commission. 
    const Topup              = 4; // + E-Point: When Finance approves Member's topup requests. 
    const Withdraw           = 5; // - E-Cash: When Finance approves Member's withdrawal requests. 
    const ApproveTopup       = 6; // - E-Point: When Finance approves Member's topup requests. 
    const ApproveWithdraw    = 7; // - E-Cash: When Finance approves Member's withdrawal requests. 
    const Activate           = 8; // - PV: When Distributor Activate Member's Order
    const Purchase           = 9; // + PV: When Upline distributor approve downline distributor's purchase requests.
    const Sale               = 10; // - PV: When Upline distributor approve downline distributor's purchase requests.
    const Rebate             = 11; // + E-Cash: Commission for Distributor from Member Activation and Downline Distributor Purchase Approval
    const InvestmentPoolMainSharing     = 12;
    const InvestmentPoolSubSharing      = 13;
    const InvestmentPool                = 14;
    const WithdrawBlock                 = 15;
    const WithdrawBlockReturn           = 16;
}
