<?php

namespace App\Model\Product2;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Product extends Model
{
   	use SoftDeletes;
    

    protected $table = 'product1';

   
    public function type() { //M:1
        return $this->belongsTo('App\Model\Product2\Type', 'type_id')
        ->select('id', 'name');
    }

   
    
}
