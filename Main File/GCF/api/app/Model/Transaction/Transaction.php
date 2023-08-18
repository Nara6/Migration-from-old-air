<?php

namespace App\Model\Transaction;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
   	//use SoftDeletes;
    protected $table = 'transaction';

    public function member(){
        return $this->belongsTo('App\Model\Member\Main', 'member_id')
        ->with('user','rank','referral');
    }

    public function category(){
        return $this->belongsTo('App\Model\Transaction\Category', 'category_id');
    }

    public function currency(){
        return $this->belongsTo('App\Model\Transaction\Currency', 'currency_id');
    }

  
   
}
