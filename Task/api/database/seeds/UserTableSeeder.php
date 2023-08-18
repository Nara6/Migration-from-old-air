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
	    // =========================================================>> Create User Type: Admin & Staff
        DB::table('users_type')->insert(
            [
                [ 'name' =>'Admin'],
                [ 'name' =>'Staff'],
            ]);

        // =========================================================>> Create User
        $users =  [

                [
                    'type_id'=>1,
                    'email'=>'admin@gmail.com',
                    'phone'=>'020000001',
                    'password'=> bcrypt('123456'),
                    'is_active'=>1,
                    'name'=>'Sim Rosza',
                    'avatar'=>'profile/user/profile.png'
                ],

                [
                    'type_id'=>2,
                    'email'=>'staff1@gmail.com',
                    'phone'=>'020000002',
                    'password'=> bcrypt('123456'),
                    'is_active'=>1,
                    'name'=>'Chen Bopha',
                    'avatar'=>'profile/user/profile.png'
                ],

                [
                    'type_id'=>2,
                    'email'=>'staff2@gmail.com',
                    'phone'=>'020000003',
                    'password'=> bcrypt('123456'),
                    'is_active'=>1,
                    'name'=>'Sok Sophavatey',
                    'avatar'=>'profile/user/profile.png'
                ]


            ];
        
        // ===>> Write To Database
        DB::table('user')->insert($users); 

      
	}
}
