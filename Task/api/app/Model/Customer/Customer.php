<?php

namespace App\Model\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Customer extends Model
{
   	use SoftDeletes;
    protected $table = 'customer';

    public function orders(){
        return $this->hasMany('App\Model\Order\Order', 'customer_id')->select('*')
        ;
    }

    public function creator() { //M:1
        return $this->belongsTo('App\Model\User\User', 'creator_id');
    }

}
