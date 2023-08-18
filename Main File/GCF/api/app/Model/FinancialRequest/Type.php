<?php

namespace App\Model\FinancialRequest;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
   	
    protected $table = 'financial_request_type';

    public function financialRequests(){
        return $this->hasMany('App\Model\FinancialRepuest\Main', 'type_id');
    }
   
}
