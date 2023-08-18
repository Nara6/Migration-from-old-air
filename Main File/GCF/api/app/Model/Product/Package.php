<?php

namespace App\Model\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Package extends Model
{	
	use SoftDeletes;
    protected $table = 'package';

    public function orders(){
        return $this->hasMany('App\Model\Order\Detail', 'product_id');
    }

    public function product(){
        return $this->hasMany('App\Model\Product\Product', 'package_id');
    }

    public function packageProduct(){
        return $this->hasMany('App\Model\Product\PackageProduct', 'package_id')
        ->with('product');
    }


   
}
