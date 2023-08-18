<?php

namespace App\Model\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
   	use SoftDeletes;

    protected $table = 'order';

   
    public function cashier() {
        return $this->belongsTo('App\Model\User\User', 'cashier_id')
        ->select('id', 'name');
    }


    public function details() {
        return $this->hasMany('App\Model\Order\Detail', 'order_id')
        ->select('id', 'order_id', 'qty', 'product_id', 'unit_price')
        ->with([
            'product:id,name,image'
        ])
        ;
    }

    public function status(){
        return $this->belongsTo('App\Model\Order\Status', 'status_id')->select('id', 'name', 'color');
    }

    public function customer() {  //M-1
        return $this->belongsTo('App\Model\Customer\Customer', 'customer_id')
        ;
    }

    public function incomes() {
        return $this->hasMany('App\Model\Income\Income', 'order_id');
    }

    public function debts() {
        return $this->hasMany('App\Model\Debt\Debt', 'order_id');
    }
    
}
