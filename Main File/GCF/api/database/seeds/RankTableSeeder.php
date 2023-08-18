<?php

use Illuminate\Database\Seeder;

class RankTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       

       
        DB::table('rank')->insert(
            [
                // =============================================>> Star I
                [
                   
                    'name'          => 'Star I', 
                    'icon'          => 'statics/rank/star1.jpg', 

                    'min_downline'                       => 0, 
                    'commission_shared'                  => 0
                ],

                // =============================================>> Star II
                [
                   
                    'name'          => 'Star II', 
                    'icon'          => 'statics/rank/star2.jpg', 

                    'min_downline'                       => 5, 
                    'commission_shared'                  => 80
                ],

                // =============================================>> Star III
                [
                   
                    'name'          => 'Star III', 
                    'icon'          => 'statics/rank/star3.jpg', 

                    'min_downline'                       => 25, 
                    'commission_shared'                  => 40
                ],

                // =============================================>> Star IV
                [
                   
                    'name'          => 'Star IV', 
                    'icon'          => 'statics/rank/star4.jpg',

                    'min_downline'                       => 125, 
                    'commission_shared'                  => 20
                ],

                // =============================================>> Star V
                [
                   
                    'name'          => 'Star V', 
                    'icon'          => 'statics/rank/star5.jpg',

                    'min_downline'                       => 625, 
                    'commission_shared'                  => 100
                ],
            ]
        );


        
    }
}
