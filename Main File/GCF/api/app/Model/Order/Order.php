<?php

namespace App\Model\Order;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{	
	use SoftDeletes;
    protected $table = 'order';


    public function member(){
        return $this->belongsTo('App\Model\Member\Main','member_id')
        ->with([
            'user:id,uid,name,email,phone'
        ]);
    }

    public function package(){
        return $this->belongsTo('App\Model\Product\Package', 'package_id');
    }

    public function status(){
        return $this->belongsTo('App\Model\Setup\Status', 'status_id')
        ->select('id', 'name', 'color')
        ;
    }
    
}
