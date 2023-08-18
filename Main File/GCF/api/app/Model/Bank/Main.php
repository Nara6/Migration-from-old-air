<?php

namespace App\Model\Bank;
use Illuminate\Database\Eloquent\Model;

class Main extends Model
{
   
    protected $table = 'bank';

    public function financialRequest(){
        return $this->hasMany('App\Model\FinancialRequest\FinancialRequest', 'user_id');
    }
}
