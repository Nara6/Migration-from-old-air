<?php

use Illuminate\Database\Seeder;

class TrxTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('transaction') -> insert(
            [
                [
                    
                    'trx'                       => '4569787', 
                    'type_id'                   => 1, 
                    'category_id'               => 1, 
                    'currency_id'               => 1, 
                    'member_id'                 => 2,
                    'amount'                    => 1000,
                    'balance'                   => 1000,
                ],
                [
                    
                    'trx'                       => '4569756', 
                    'type_id'                   => 2, 
                    'category_id'               => 1, 
                    'currency_id'               => 1, 
                    'member_id'                 => 2,
                    'amount'                    => 500,
                    'balance'                   => 500,
                ],

            ]
        );
    }
}
