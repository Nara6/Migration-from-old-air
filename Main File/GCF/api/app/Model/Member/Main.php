<?php

namespace App\Model\Member;

use Illuminate\Database\Eloquent\Model;

class Main extends Model
{
    //use SoftDeletes;
    protected $table = 'member';

    public function user() {
        return $this->belongsTo('App\Model\User\Main', 'user_id')
        ->select('id', 'name', 'phone', 'uid','email','address','created_at'); 
    }

    public function rank() {
        return $this->belongsTo('App\Model\Member\Rank', 'rank_id')
        ->select('id', 'name', 'icon'); 
    }


    public function referral(){
        return $this->belongsTo('App\Model\Member\Main', 'referral_id')
        ->select('id', 'user_id', 'rank_id')
        ->with([
            'user:id,uid,name,phone', 
            'rank'
        ]);
    }
   

   
    public function orders(){
        return $this->hasMany('App\Model\Order\Order', 'member_id');
    }
    
    public function purchases(){
        return $this->hasMany('App\Model\Purchase\Main', 'member_id')
        ->select('id', 'product')
        ->with([
           
            'product:id,kh_name,en_name','pv'
        ]);
    }
    
}
