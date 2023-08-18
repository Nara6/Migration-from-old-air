<?php

namespace App\Model\Setup;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{	
    protected $table = 'status';

    public function financialRequests(){
        return $this->hasMany('App\Model\FinancialRequest\Main', 'status_id');
    }

}
