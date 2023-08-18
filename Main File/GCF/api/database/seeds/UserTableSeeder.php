<?php

use Illuminate\Database\Seeder;
use App\Enum\UserType as UserTypeEnum;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       
        // ============================================================ MGTB Admin
        $userId = DB::table('user')->insertGetId([ 
            'avatar'                =>  'statics/user/1.png',
            'email'                 =>  'bh_admin@gamil.com',                   
            'phone'                 =>  '020000001', 
            'password'              =>  bcrypt('123456'), 
            'is_active'             =>  1, 
            'is_email_verified'     =>  1, 
            'is_phone_verified'     =>  1,
            'name'                  =>  'GCF Admin',   
            'uid'                   =>  'GCF000000'
        ]);

       
    }
}
