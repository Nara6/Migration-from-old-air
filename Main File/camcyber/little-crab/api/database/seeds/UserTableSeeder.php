<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
	{
	    DB::table('users_type')->insert(
            [
                [ 'name' =>'Admin'],
                [ 'name' =>'Manager'],
            ]);

        // =========================================================>> Add Admin
        $users =  [

                [ 
                    'type_id'=>2, 
                    'email'=>'sonimith7777@gmail.com', 
                    'phone' => '093822207', 
                    'password' => bcrypt('123456'), 
                    'is_active'=>1, 
                    'is_email_verified'=>1, 
                    'name' => 'Hang Sonimith', 
                    'avatar'=>'public/user/profile.png'
                ], 

 
                [
                    'type_id'=>2,
                    'email'=>'yinnara6@gmail.com',
                    'phone'=>'016838248',
                    'password'=> bcrypt('123456'),
                    'is_active'=>1,
                    'is_email_verified'=>1,
                    'name'=>'Yin SokNara',
                    'avatar'=> 'profile/user/profile.png'
                ],

                [
                    'type_id'=>1,
                    'email'=>'khouch.koeun@gmail.com',
                    'phone'=>'0965416704',
                    'password'=> bcrypt('123456'),
                    'is_active'=>1,
                    'is_email_verified'=>1,
                    'name'=>'Khouch Koeun',
                    'avatar'=>'profile/user/profile.png'
                ]


            ];

        DB::table('user')->insert($users); 

        DB::table('admin')->insert([
            [ 'user_id' =>1],
            [ 'user_id' =>2],
            [ 'user_id' =>3],
        ]);


      
	}
}
