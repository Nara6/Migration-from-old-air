<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserTableSeeder::class);
        $this->call(SetupTableSeeder::class);
        $this->call(ProductTableSeeder::class);
        $this->call(RankTableSeeder::class);
        $this->call(MemberTableSeeder::class);
        $this->call(TrxTableSeeder::class);

    }
}