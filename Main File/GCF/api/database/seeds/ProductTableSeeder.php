<?php

use Illuminate\ Database\ Seeder;

class ProductTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public
    function run() {

        DB::table('package') -> insert(
            [
                [
                    
                    'kh_name'                   => 'Package A', 
                    'en_name'                   => 'Package A', 
                    'image'                     => 'statics/package/1.jpg', 
                    'price'                     => 150, 
                    'pv'                        => 45
                ]

            ]
        );
        
        DB::table('product') -> insert(
            [
                [
                    'package_id'               => 1,
                    'name'                     => 'Detox & Cleanse', 
                    'image'                    => 'statics/product/detox.jpg',
                    'price'                    => 10,
                ],

                [
                    'package_id'               => 1,
                    'name'                     => 'Teatox Cleanse', 
                    'image'                    => 'statics/product/teatox.jpg',
                    'price'                    => 10,
                ],

            ]
        );


        DB::table('package_products') -> insert(
            [
                [
                    
                    'package_id'                  => 1, 
                    'product_id'                  => 1, 
                    'qty'                         => 1
                ], 
                [
                    
                    'package_id'                  => 1, 
                    'product_id'                  => 2, 
                    'qty'                         => 1
                ]

            ]
        );

       
        
    }
}