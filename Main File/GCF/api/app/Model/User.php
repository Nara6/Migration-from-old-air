<?php

namespace App\Model;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    protected $table = 'user';

    public function admin() {
        return $this->hasOne('App\Model\Admin\Main', 'user_id');
    }

    public function member() {
        return $this->hasOne('App\Model\Member\Main', 'user_id');
    }

    
}
