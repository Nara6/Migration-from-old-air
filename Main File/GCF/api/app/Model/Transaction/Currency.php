<?php

namespace App\Model\Transaction;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
   
    protected $table = 'currency';

    public function transactions(){
        return $this->hasMany('App\Model\Transaction\Transaction', 'currency_id');
    }
   
}
