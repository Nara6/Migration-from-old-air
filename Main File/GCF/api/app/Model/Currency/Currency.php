<?php

namespace App\Model\Currency;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Currency extends Model
{	
	use SoftDeletes;
    protected $table = 'currency';


    public function member(){
        return $this->belongsTo('App\Model\Member\Main', 'member_id')
        ->with([
            'user:id,uid,name,email,phone'
        ]);
    }
    
}
