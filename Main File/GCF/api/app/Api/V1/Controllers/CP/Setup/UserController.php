<?php

namespace App\Api\V1\Controllers\CP\Setup;

use Dingo\Api\Routing\Helpers;

use App\Api\V1\Controllers\ApiController;
use App\Model\User\Main as User;
use App\Model\Member\Main as Member;
use App\Model\Member\Node as Node;
use App\Model\Member\Position as Position;


class UserController extends ApiController
{
    use Helpers;

    function generateTopLeaders()
    {
        $g1 = [];
        $n = 0;

        for ($i = 0; $i < 10; $i++) {
            $n++;
            $g1[] = $this->create($n, 6, true, false);
        }


        foreach ($g1 as $u1) {

            $g2 = [];

            for ($j = 0; $j < 10; $j++) {

                $n++;
                $g2[] = $this->create($n, $u1->member->id, true, false);
            }
        }

        return ['g1' => $g1, 'g2' => $g2];
    }

    function generateLeaders()
    {
        $g1 = [];


        $members = Member::with(['node', 'node.childrenNodes'])->whereBetween('id', [7, 116])
        ->whereHas('node', function($query){
            $query->whereDoesntHave('childrenNodes'); 
        })
        ->orderByRaw("RAND()")->limit(40)
        ->get(); 

        $n = Member::count() + 1;
        //return $members; 

        foreach ($members as $member) {

            for ($i = 0; $i < 10; $i++) {
                $n++;
                $g1[] = $this->create($n, $member->id, false, true);
            }
        }

        return $g1;
    }

    function create($n = 0, $sponsorId = 1, $addPV = false, $leaderActivation = false)
    {

        $uid = $this->generateUid(2);


        //====================================>> Create New user
        $user = new User();
        $user->type_id      = 2; //For member
        $user->uid          = $uid;
        $user->username     = $uid;
        $user->name         = 'Partner #'.$sponsorId.$n;
        $user->phone        = $this->getPhone($n);
        $user->email        = null;
        $user->country_id   = 2; //Cambodia
        $user->is_active    = 1;

        $user->password     = bcrypt(uniqid());
        $user->avatar       = '{}';
        $user->save();

        //====================================>> Create New Member
        $member                           = new Member();
        $member->user_id                  = $user->id;
        $member->referral_id               = $sponsorId;
        $member->referral_id              = $sponsorId; 
        $member->position_id              = 3; //Partner Member
        
        if($leaderActivation){
            $member->is_leader_activation_required = 1; 
        }
        
        $member->save();

        //====================================>> Position
        $position = new Position();
        $position->member_id = $member->id;
        $position->position_id = 1; //Unconfirm Member
        $position->activated_at = now();
        $position->save();

        $position = new Position();
        $position->member_id = $member->id;
        $position->position_id = 2; //Member
        $position->package_purchased_completed_at = now();
        $position->package_purchased_note = 'Auto';
        $position->save();

        $position = new Position();
        $position->member_id = $member->id;
        $position->position_id = 3; //Partner
        $position->package_purchased_completed_at = now();
        $position->package_purchased_note = 'Auto';
        $position->save();

        $position = new Position(); 
        $position->member_id = $member->id; 
        $position->position_id = 4; //Qualified Partner
        $position->package_purchased_completed_at = now(); 
        $position->package_purchased_note = 'Auto'; 

        if($addPV){
            $position->network_structure_completed_at = now(); 
        }
        $position->save(); 

        //====================================>> Node
        $sponsorNode = Node::select('id', 'member_id')->where('member_id', $sponsorId)->first();
        if ($sponsorNode) {

            $node = new Node();
            $node->member_id = $member->id;
            $node->parent_id = $sponsorNode->id;
            $node->save();
        }

        if ($addPV) {

            $this->updateMemberTransaction([
                'typeId'        => 2, //Send
                'categoryId'    => 1, //
                'memberId'      => $member->id,
                'amount'        => 300,
                'description'   => 'Auto Generate'
            ], 'pv');
        }

        return $user;
    }

    function getPhone($n = 0)
    {
        $str = $n;
        if ($n < 10) {
            $str = '09654600' . $n;
        } elseif ($n < 100) {
            $str = '0965460' . $n;
        } elseif ($n < 100000) {
            $str = '096546' . $n;
        }
        return $str;
    }

    function changeLeaderReferral()
    {
        $members = Member::select('id', 'referral_id', 'referral_id')->whereBetween('id', [7, 1116])->get(); 
        foreach($members as $member){
            $member->referral_id = $member->referral_id; 
            $member->save(); 
        }
        return count($members); 
    }

    function makeLeaderActivative()
    {
        $members = Member::select('id', 'referral_id', 'referral_id')->whereBetween('id', [117, 1116])->get(); 

         foreach($members as $member){
            $member->is_leader_activation_required =  1; 
            $member->save(); 
        }
        return count($members); 
    }
}
