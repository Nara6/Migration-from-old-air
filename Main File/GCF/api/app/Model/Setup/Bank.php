<?php

namespace App\Model\Setup;

use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{	
    protected $table = 'bank';

    public function financialRequests(){
        return $this->hasMany('App\Model\FinancialRequest\Main', 'bank_id');
    }
}