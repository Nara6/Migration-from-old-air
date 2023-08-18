<?php

use Illuminate\Database\Seeder;
use App\BH\Account; 
use Carbon\Carbon;
use App\Model\Product\Product;

class MemberTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
	{
        
        

        // =========================>> Finance
        $user = [

            'uid'               =>  'GCF000001', 
            'avatar'                =>  'statics/user/1.png',
            'email'             =>  'hankimhak451@gmail.com',                   
            'phone'             =>  '030000001', 
            'password'          =>  bcrypt('123456'), 
            'is_active'         =>  1, 
            'is_email_verified' =>  1, 
            'is_phone_verified' =>  1,
            'name_kh' => 'ហាន គឹមហាក់',
            'name' => 'Han Kimhak',
        
        ]; 
        $userId = DB::table('user')->insertGetId($user);
        $memberId = DB::table('member')->insertGetId(['user_id' => $userId, 'rank_id' => 1, 'referral_id' => 0, 'parent_node_id' => 0]);

        // =========================>> Ambassador
        $user = [
 
            'uid'               =>  'GCF000002', 
            'avatar'                =>  'statics/user/1.png',
            'email'             =>  'bo_pisey@gmail.com',                   
            'phone'             =>  '030000002', 
            'password'          =>  bcrypt('123456'), 
            'is_active'         =>  1, 
            'is_email_verified' =>  1, 
            'is_phone_verified' =>  1,
            'name_kh'           => 'បូរ ពិសី',
            'name'              => 'Bo Pisey',
        
        ]; 
        $userId = DB::table('user')->insertGetId($user);
        $memberId = DB::table('member')->insertGetId(['user_id' => $userId, 'rank_id' => 1]);

        // =========================>> Crown Ambassador
        $user = [

            'uid'               =>  'GCF000003',
            'avatar'                =>  'statics/user/1.png', 
            'email'             =>  'heang_sopanga@gmail.com',                   
            'phone'             =>  '030000003', 
            'password'          =>  bcrypt('123456'), 
            'is_active'         =>  1, 
            'is_email_verified' =>  1, 
            'is_phone_verified' =>  1,
            'name_kh'           => 'ហ៊ាង សុបញ្ញា',
            'name'              => 'Heang Sopagna',
        
        ]; 
        $userId = DB::table('user')->insertGetId($user);
        $memberId = DB::table('member')->insertGetId(['user_id' => $userId, 'rank_id' => 1]);

        // =========================>> Royal Crown Ambassador
        $user = [

            
            'uid'               =>  'GCF000004', 
            'avatar'                =>  'statics/user/1.png',
            'email'             =>  'noun_pireak@gmail.com',                   
            'phone'             =>  '030000004', 
            'password'          =>  bcrypt('123456'), 
            'is_active'         =>  1, 
            'is_email_verified' =>  1, 
            'is_phone_verified' =>  1,
            'name_kh'           => 'នួន​ ភិរក្ស',
            'name'              => 'Noun Phireak',
        
        ]; 
        $userId = DB::table('user')->insertGetId($user);
        $memberId = DB::table('member')->insertGetId(['user_id' => $userId, 'rank_id' => 1]);
        // =========================>> User 
        $user = [

            
            'uid'               =>  'GCF000005', 
            'avatar'            =>  'statics/user/1.png',
            'email'             =>  'yun_sothearith@gmail.com',                   
            'phone'             =>  '030000005', 
            'password'          =>  bcrypt('123456'), 
            'is_active'         =>  1, 
            'is_email_verified' =>  1, 
            'is_phone_verified' =>  1,
            'name_kh'           => 'យន់ សុធារិត',
            'name'              => 'Yun Sothearith',
        
        ]; 
        $userId = DB::table('user')->insertGetId($user);
        $memberId = DB::table('member')->insertGetId(['user_id' => $userId, 'rank_id' => 1, 'referral_id' => 1, 'parent_node_id' => 2]);
        // =========================>> User 
        $user = [

            
            'uid'               =>  'GCF000006', 
            'avatar'                =>  'statics/user/1.png',
            'email'             =>  'yeoun_vitu@gmail.com',                   
            'phone'             =>  '030000006', 
            'password'          =>  bcrypt('123456'), 
            'is_active'         =>  1, 
            'is_email_verified' =>  1, 
            'is_phone_verified' =>  1,
            'name_kh'           => 'យឿន វិទូ',
            'name'              => 'Yeoun Vitu',
        
        ]; 
        $userId = DB::table('user')->insertGetId($user);
        $memberId = DB::table('member')->insertGetId(['user_id' => $userId, 'rank_id' => 1, 'referral_id' => 1, 'parent_node_id' => 2]);
        // =========================>> User 
        $user = [

            
            'uid'               =>  'GCF000007', 
            'avatar'            =>  'statics/user/1.png',
            'email'             =>  'kim_thonghor@gmail.com',                   
            'phone'             =>  '030000007', 
            'password'          =>  bcrypt('123456'), 
            'is_active'         =>  1, 
            'is_email_verified' =>  1, 
            'is_phone_verified' =>  1,
            'name_kh'           => 'គឹម ថុងហ័រ',
            'name'              => 'Kim Thonghor',
        
        ]; 
        $userId = DB::table('user')->insertGetId($user);
        $memberId = DB::table('member')->insertGetId(['user_id' => $userId, 'rank_id' => 1, 'referral_id' => 1, 'parent_node_id' => 2]);
        // =========================>> User 
        $user = [

            
            'uid'               =>  'GCF000008', 
            'avatar'                =>  'statics/user/1.png',
            'email'             =>  'ken_kimheang@gmail.com',                   
            'phone'             =>  '030000008', 
            'password'          =>  bcrypt('123456'), 
            'is_active'         =>  1, 
            'is_email_verified' =>  1, 
            'is_phone_verified' =>  1,
            'name_kh'           => 'កេន​ គឹមហៀង',
            'name'              => 'Ken Kimheang',
        
        ]; 
        $userId = DB::table('user')->insertGetId($user);
        $memberId = DB::table('member')->insertGetId(['user_id' => $userId, 'rank_id' => 1, 'referral_id' => 1, 'parent_node_id' => 3]);
        
        // =========================>> User 
        $user = [

            
            'uid'               =>  'GCF000009', 
            'avatar'            =>  'statics/user/1.png',
            'email'             =>  'em_hengly@gmail.com',                   
            'phone'             =>  '030000009', 
            'password'          =>  bcrypt('123456'), 
            'is_active'         =>  1, 
            'is_email_verified' =>  1, 
            'is_phone_verified' =>  1,
            'name_kh'           => 'អៀម ហេងលី',
            'name'              => 'Em Hengly',
        
        ]; 
        $userId = DB::table('user')->insertGetId($user);
        $memberId = DB::table('member')->insertGetId(['user_id' => $userId, 'rank_id' => 1, 'referral_id' => 1, 'parent_node_id' => 3]);
        
        // =========================>> User 
        $user = [

            
            'uid'               =>  'GCF000010', 
            'avatar'            =>  'statics/user/1.png',
            'email'             =>  'yam_virak@gmail.com',                   
            'phone'             =>  '030000010', 
            'password'          =>  bcrypt('123456'), 
            'is_active'         =>  1, 
            'is_email_verified' =>  1, 
            'is_phone_verified' =>  1,
            'name_kh'           => 'យុាំ វីរៈ',
            'name'              => 'Yam Virak',
        
        ]; 
        $userId = DB::table('user')->insertGetId($user);
        $memberId = DB::table('member')->insertGetId(['user_id' => $userId, 'rank_id' => 1, 'referral_id' => 1, 'parent_node_id' => 4]);
        // =========================>> User 
        $user = [

            
            'uid'               =>  'GCF000011', 
            'avatar'            =>  'statics/user/1.png',
            'email'             =>  'sokan_sovichea@gmail.com',                   
            'phone'             =>  '030000011', 
            'password'          =>  bcrypt('123456'), 
            'is_active'         =>  1, 
            'is_email_verified' =>  1, 
            'is_phone_verified' =>  1,
            'name_kh'           => 'សុវិជ្ជា',
            'name'              => 'Sovichea',
        
        ]; 
        $userId = DB::table('user')->insertGetId($user);
        $memberId = DB::table('member')->insertGetId(['user_id' => $userId, 'rank_id' => 1, 'referral_id' => 1, 'parent_node_id' => 4]);
        
	}
}
