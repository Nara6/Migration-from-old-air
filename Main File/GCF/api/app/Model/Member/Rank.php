<?php

namespace App\Model\Member;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Rank extends Model
{
   	//use SoftDeletes;
    protected $table = 'rank';

    public function commissions(){ // 1-M
        return $this->hasMany('App\Model\Member\RankReferralCommission', 'rank_id')
        ->select('id', 'level_id as level', 'rank_id', 'commission')
        ;
    }

    public function matchings(){ // 1-M
        return $this->hasMany('App\Model\Member\RankMatchingCommission', 'rank_id')
        ->select('id', 'level_id as level', 'rank_id', 'commission')
        ;
    }
    public function members(){
        return $this->hasMany('App\Model\Member\Main', 'rank_id');
    }
    
}
