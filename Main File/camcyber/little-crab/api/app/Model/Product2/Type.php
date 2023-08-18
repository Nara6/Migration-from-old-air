<?php

namespace App\Model\Product2;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Type extends Model
{

    protected $table = 'products1_type';

   
    public function products() { //1:M
        return $this->hasMany('App\Model\Product2\Product', 'type_id')
        //->select('id', 'name')
        ;

    }

   
    
}
