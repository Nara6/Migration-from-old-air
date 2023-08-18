<?php

namespace App\Model\FinancialRequest;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FinancialRequest extends Model
{
   	use SoftDeletes;
    protected $table = 'financial_request';

    public function member(){
        return $this->belongsTo('App\Model\Member\Member', 'member_id')
        ->select('id', 'user_id', 'rank_id')
        ->with([
            'user',
            'rank'
        ])
        ;
    }

    public function type(){
        return $this->belongsTo('App\Model\FinancialRequest\Type', 'type_id');
    }  

    public function bank(){
        return $this->belongsTo('App\Model\Setup\Bank', 'bank_id');
    }

    public function status(){
        return $this->belongsTo('App\Model\Setup\Status', 'status_id');
    }
   
}