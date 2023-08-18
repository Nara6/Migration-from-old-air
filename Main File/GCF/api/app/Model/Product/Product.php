<?php

namespace App\Model\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{	
	use SoftDeletes;
    protected $table = 'product';

    public function package(){
        return $this->belongsTo('App\Model\Product\Package','package_id');
    }

    public function packageProduct(){
        return $this->hasMany('App\Model\Product\PackageProduct','product_id');
    }

}
