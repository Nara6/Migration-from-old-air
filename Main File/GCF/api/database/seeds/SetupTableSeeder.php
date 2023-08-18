<?php

use Illuminate\Database\Seeder;

class SetupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       
        DB::table('status')->insert(
            [
                ['name' => 'Pending', 'color' => 'orange'],
                ['name' => 'Accepted', 'color' => 'green'],
                ['name' => 'Rejected', 'color' => 'red'],
                ['name' => 'Cancelled', 'color' => 'red'],
            ]
        );


        //=======================================

        DB::table('currency')->insert(
            [
                ['name' => 'USD'],
                ['name' => 'GCF'],
                ['name' => 'PV'],
               
            ]
        );

        DB::table('transactions_category')->insert(
            [
                ['type_id' => 2,  'name' => 'Referral'],
                ['type_id' => 2,  'name' => 'Deposit'],
                ['type_id' => 1,  'name' => 'Withdraw'], 
                ['type_id' => 1,  'name' => 'Approve Topup'], 
                ['type_id' => 2,  'name' => 'Approve Withdraw'], 

                //Stock
                ['type_id' => 1,  'name' => 'Sent'], 
                ['type_id' => 2,  'name' => 'Received'], 
            ]
        );

        DB::table('bank')->insert(
            [
                [
                    'name'        => 'ABA',
                    'account'     => 'Yoeun Vitu',
                    'number'      => '001 756 573',
                    'currency'    => 'USD',
                    'logo'        => '/image/bank/aba.png'],
                [
                    'name'        => 'ACLEDA', 
                    'account'     => 'Yoeun Vitu',
                    'number'      => '001 756 573',
                    'currency'    => 'USD',
                    'logo'        => '/image/bank/acleda.png'],
                [
                    'name'        => 'Wing', 
                    'account'     => 'Yoeun Vitu',
                    'number'      => '001 756 573',
                    'currency'    => 'USD',
                    'logo'        => '/image/bank/wing.png']
            ]
        );

        DB::table('financial_request_type')->insert(
            [
                ['name' => 'Topup'],
                ['name' => 'Withdraw'],
            ]
        );

        

    }
}
