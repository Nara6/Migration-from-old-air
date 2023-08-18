<?php

namespace App\Model\User;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Main extends Authenticatable
{
    use Notifiable;
    //use SoftDeletes;
    protected $table = 'user';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'google2fa_secret', 'telegram_chat_id',
    ];

    public function creator() {
        return $this->belongsTo('App\Model\User', 'creator_id');
    }
    
    public function type(){
        return $this->belongsTo('App\Model\User\Type', 'type_id');
    }
    
    public function district(){
    return $this->belongsTo('App\Model\Setup\District', 'district_id');
    }

    public function logs() {
        return $this->hasMany('App\Model\User\Log', 'user_id');
    }

    public function admin() {
        return $this->hasOne('App\Model\Admin\Main', 'user_id');
    }
    // public function customer() {
    //     return $this->hasOne('App\Model\Member\Main', 'user_id')
    //     ->select('id', 'user_id');
    // }
    public function member() {
        return $this->hasOne('App\Model\Member\Main', 'user_id');
    }

    public function codes() {
        return $this->hasMany('App\Model\User\Code', 'user_id');
    }

     public function notifies() {
        return $this->hasMany('App\Model\User\Notify', 'user_id');
    }
   

}
