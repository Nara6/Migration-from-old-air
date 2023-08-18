<?php

namespace App\Model\Order;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table = 'orders_status';
    
    public function orders(){
        return $this->hasMany('App\Model\Order\Order', 'status_id');
    }
    
}
