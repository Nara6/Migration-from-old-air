<?php

namespace App\GCF;
use Carbon\Carbon;
use App\Model\Member\Main as Member;
use App\Model\Member\Rank; 

class PV{
    
  public static function update($memberId = 0, $pv = 0){
    
    $member = Member::with(['rank' => function($query){
      $query->select('*'); 
    }])->find($memberId);

    $nextRank = []; 
    $condition = []; 

    if($member){

      //Update PV
      $member->personal_pv = $member->personal_pv + $pv;
      $member->save(); 

      //Update upline PV
      self::updateUplinePV($member, $pv); 

      //Check Rank Upgrade
      if($member->personal_pv >= 100 && $member->rank_id < 10){

        $nextRank = Rank::find($member->rank_id+1);
        
        //=======>> Min. PV
        $validPV = $member->personal_pv >= $nextRank->min_required_pv ? true : false; 
       

        //=======>> Min. weak direct downward pv
        $validWeakPV = false; 
        if($nextRank->min_weak_direct_downward_pv == 0){
          $validWeakPV = true; 
        }else{

          //$selectedComparedPV = $member->right_pv_total > $member->left_pv_total ? $member->left_pv_total : $member->right_pv_total; 
          $validWeakPV = $member->right_pv_total > $member->left_pv_total ? $member->left_pv_total : $member->right_pv_total >= $nextRank->min_weak_direct_downward_pv ? true : false; 

          // if($selectedComparedPV >= $nextRank->min_weak_direct_downward_pv){
          //   $validWeakPV = true; 
          // }

        }

        //=======>> Direct Downward Rank
        $validDirectDownward = false; 
        if($nextRank->direct_downward_rank == 0){
          $validDirectDownward = true; 
        }else{
          //$validDirectDownward = true; 
          //check left child

          $leftChild = Member::where('rank_id', $member->rank_id)->find($member->chart_left_child_id); 
          $rightChild = Member::where('rank_id', $member->rank_id)->find($member->chart_right_child_id); 
          if($leftChild && $rightChild){
            $validDirectDownward = true; 
          }
          
        }


        if($validPV && $validWeakPV && $validDirectDownward){
          //Already created when register; 
          // if($member->rank_id == 1){
          //   self::createChartNode($member);
          // }
          
          $member->rank_expired = Carbon::today()->addDays(30)->format('Y-m-d'); 
          $member->rank_id = $nextRank->id; 
          $member->save(); 
          //TODO: Send notification

          
          
        }

        $condition = [
          'validPV' => $validPV,
          'validWeakPV' => $validWeakPV,
          'validDirectDownward' => $validDirectDownward
        ];

      }

    } 

    return [
      'nextRank' => $nextRank, 
      'condition' =>  $condition, 
      'member' => $member
    ]; 
  }

  private static function updateUplineTeam($member){
    $upline = Member::find($member->chart_parent_id); 
    if($upline){
      if($upline->chart_left_child_id == $member->id){
        $upline->left_downline = $upline->left_downline + 1; 
      }else{
        $upline->right_downline = $upline->right_downline + 1; 
      }
      $upline->save(); 
      return self::updateUplineTeam($upline); 
    }
  }

  private static function updateUplinePV($member, $pv = 0){
    
    $upline = Member::find($member->chart_parent_id); 
    if($upline){
      if($upline->chart_left_child_id == $member->id){
        $upline->left_pv        = $upline->left_pv + $pv; 
        $upline->left_pv_total  = $upline->left_pv_total + $pv; 
        $upline->left_pv_today  = $upline->left_pv_today + $pv; 
      }else{
        $upline->right_pv       = $upline->right_pv + $pv; 
        $upline->right_pv_total = $upline->right_pv_total + $pv; 
        $upline->right_pv_today = $upline->right_pv_today + $pv; 
      }
      $upline->save(); 

      return self::updateUplinePV($upline, $pv); 
    }
  }

  public static function createChartNode($member){
    
     //Check if Parent Direction and Node are available. 
     $parent            = Member::find($member->chart_parent_id); 
     $parentPreferNode  = $member->chart_parent_prefer_direction ? $member->chart_parent_prefer_direction : 'L'; 

     FindParent://This event happen when saved direction when register has been occupied. 
     if(!$parent){ 
        //Find Referral
        $referral       = self::getReferral($member); 
        //Find Latest Node (Then, it would be parent of current member)
        $parent           = self::findLatestNode($referral, $referral->chart_prefer_direction); 
        $parentPreferNode = $referral->chart_prefer_direction; 
        
     }
     
     

     if($parent){

      // Make sure that Latest Node and Member are not the same. 
      if($parent->id != $member->id){

        if($parentPreferNode == 'L'){
          if(!$parent->chart_left_child_id){ //Only empty space can be connected with new node
            $parent->chart_left_child_id = $member->id; 
          }else{
            //Re-find Parent Again based on the exiting parent
            $parent = null; 
            goto FindParent; 
          }
        }else{
          if(!$parent->chart_right_child_id){ //Only empty space can be connected with new node
            $parent->chart_right_child_id = $member->id; 
          }else{
            //Re-find Parent Again based on the exiting parent
            $parent = null; 
            goto FindParent; 
          }
        }

        $parent->save();

        //Update Member's Parent Node
        $member->chart_parent_id = $parent->id; 
        $member->save();

        self::updateUplineTeam($member); 

      }else{
        return [
          'message' => 'Parent and member are the same.', 
          'data' => $parent
        ];
      }
      
     }

     return ['referral'=>$member->referral, 'parent'=>$parent, 'member'=>$member]; 

     //return $member; 

  }

  private static function getReferral($member){
    $referral = $member->referral()->select('id', 'user_id', 'rank_id', 'chart_prefer_direction', 'chart_parent_id', 'chart_left_child_id', 'chart_right_child_id')
    ->first();
    return $referral; 
  }

  private static function findLatestNode($node, $direction = 'L'){
    if($direction == 'L'){
      if($node->chart_left_child_id){
        return self::findLatestNode(Member::find($node->chart_left_child_id), $direction);
      }
    }else{
      if($node->chart_right_child_id){
        return self::findLatestNode(Member::find($node->chart_right_child_id), $direction);
      }
    }

    return $node; 


  }
  
  
}
