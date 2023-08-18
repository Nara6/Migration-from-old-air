<?php

namespace App\Model\Transaction;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
   
    protected $table = 'transactions_category';

    public function type(){
        return $this->belongsTo('App\Model\Transaction\Type', 'type_id');
    }

    public function transactions(){
        return $this->hasMany('App\Model\Transaction\Transaction', 'category_id');
    }
   
}
