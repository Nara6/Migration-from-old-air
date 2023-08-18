<?php

namespace App\Model\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PackageProduct extends Model
{	
	use SoftDeletes;
    protected $table = 'package_products';

    public function package(){
        return $this->belongsTo('App\Model\Product\Package', 'package_id');
    }

    public function product(){
        return $this->belongsTo('App\Model\Product\Product', 'product_id');
    }

}
