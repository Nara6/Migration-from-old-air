<?php

namespace App\Model\Setup;

use Illuminate\Database\Eloquent\Model;

class Rank extends Model
{	
    protected $table = 'rank';

    public function members(){
        return $this->hasMany('App\Model\Member\Main', 'rank_id');
    }
}
