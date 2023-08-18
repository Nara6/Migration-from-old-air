<?php

use Illuminate\Database\Seeder;

class Product2TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // =========================================================>> Add Product
        DB::table('products1_type')->insert(
            [
                [ 'name' =>'មឹក'],
                [ 'name' =>'ព្រុយត្រី'],
                [ 'name' =>'បង្គា'],
                [ 'name' =>'ក្តាមសេះ'],
                [ 'name' =>'ក្តាមថ្ម'],
                [ 'name' =>'ងាវ/ខ្យងហូល'],
                [ 'name' =>'បបែល'],
            
            ]);
            DB::table('product1')->insert(
                [
                    ['name'=>'មឹកឆាម្រេចម៉ត់',
                     'image'=>'menu/មឹកឆាម្រេចម៉ត់.jpg',
                     'type_id'=> 1 ,'unit_price'=>30000,
                    ],
                    
                    ['name'=>'មឹកអាំងអំបិលម្ទេស',
                     'image'=>'menu/មឹកអាំងអំបិលម្ទេស.jpg',
                     'type_id'=> 1 ,'unit_price'=>30000,
                    ],
    
                    ['name'=>'មឹកឆាម្រេចខ្ចី',
                     'image'=>'menu/មឹកឆាម្រេចខ្ចី.jpg',
                     'type_id'=> 1 ,'unit_price'=>30000,
                    ],
    
                    ['name'=>'មឹកឆាពងទាប្រៃ',
                     'image'=>'menu/មឹកឆាពងទាប្រៃ.jpg',
                     'type_id'=> 1 ,'unit_price'=>30000,
                    ],
    
                    ['name'=>'មឹកឆាអំពិលទុំ',
                     'image'=>'menu/មឹកឆាអំពិលទុំ.jpg',
                     'type_id'=> 1 ,'unit_price'=>30000,
                    ],
    
                    ['name'=>'មឹកបំពងខ្ទឹមស',
                     'image'=>'menu/មឹកបំពងខ្ទឹមស.jpg',
                     'type_id'=> 1 ,'unit_price'=>30000,
                    ],
    
                ]
            );
    
            DB::table('product1')->insert(
                [
                    ['name'=>'ព្រុយត្រីអាំងអំបិលម្ទេស', 'type_id'=> 2 ,'unit_price'=>25000,'image'=>'menu/ព្រុយត្រីអាំងអំបិលម្ទេស.jpg'], 
                    ['name'=>'ព្រុយត្រីបំពងខ្ទឹមស', 'type_id'=> 2 ,'unit_price'=>25000,'image'=>'menu/ព្រុយត្រីបំពងខ្ទឹមស.jpg'], 
                ]
            );
            DB::table('product1')->insert(
                [
                    ['name'=>'បង្គាឆាប្រៃផ្អែម', 'type_id'=> 3 ,'unit_price'=>30000,'image'=>'menu/បង្គាឆាប្រៃផ្អែម.jpg'], 
                    ['name'=>'បង្គាអាំងអំបិលម្ទេស', 'type_id'=> 3 ,'unit_price'=>30000,'image'=>'menu/បង្គាអាំងអំបិលម្ទេស.jpg'], 
                    ['name'=>'បង្គាឆាពងទាប្រៃ', 'type_id'=> 3 ,'unit_price'=>30000,'image'=>'menu/បង្គាឆាពងទាប្រៃ.jpg'], 
                    ['name'=>'ភ្លាបង្គា', 'type_id'=> 3 ,'unit_price'=>30000,'image'=>'menu/ភ្លាបង្គា.jpg'], 
                    ['name'=>'បង្គាបំពងខ្ទឹមស', 'type_id'=> 3 ,'unit_price'=>30000,'image'=>'menu/បង្គាបំពងខ្ទឹមស.jpg'], 
                    ['name'=>'បង្គាស្រុះ', 'type_id'=> 3 ,'unit_price'=>30000,'image'=>'menu/បង្គាស្រុះ.jpg'], 
                    ['name'=>'បង្គាឆាអំពិលទុំ', 'type_id'=> 3 ,'unit_price'=>30000,'image'=>'menu/បង្គាឆាអំពិលទុំ.jpg'], 
                    ['name'=>'បង្គាឆាការី', 'type_id'=> 3 ,'unit_price'=>30000,'image'=>'menu/បង្គាឆាការី.jpeg']
                ]
            );
            DB::table('product1')->insert(
                [
                    ['name'=>'ក្តាមឆាប្រៃផ្អែម', 'type_id'=> 4 ,'unit_price'=>40000,'image'=>'menu/ក្តាមឆាប្រៃផ្អែម.jpg'], 
                    ['name'=>'ក្តាមអាំងអំបិលម្ទេស', 'type_id'=> 4 ,'unit_price'=>40000,'image'=>'menu/ក្តាមអាំងអំបិលម្ទេស.jpg'], 
                    ['name'=>'ក្តាមឆាអំពិលទុំ', 'type_id'=> 4 ,'unit_price'=>40000,'image'=>'menu/ក្តាមឆាអំពិលទុំ.jpg'], 
                    ['name'=>'ភ្លាក្តាមសេះ', 'type_id'=> 4 ,'unit_price'=>40000,'image'=>'menu/ភ្លាក្តាមសេះ.jpg'],
                    ['name'=>'ក្តាមឆាម្រេចខ្ចី', 'type_id'=> 4 ,'unit_price'=>40000,'image'=>'menu/ក្តាមឆាម្រេចខ្ចី.jpg'], 
                    ['name'=>'ក្តាមស្រុះ/ចំហុយ', 'type_id'=> 4 ,'unit_price'=>40000,'image'=>'menu/ក្តាមស្រុះ.jpg'], 
                    ['name'=>'ក្តាមឆាការី', 'type_id'=> 4 ,'unit_price'=>40000,'image'=>'menu/ក្តាមឆាការី.jpg'],
                    ['name'=>'ក្តាមអប់មីសួ', 'type_id'=> 4 ,'unit_price'=>40000,'image'=>'menu/ក្តាមអប់មីសួ.jpg'], 
                ]
            );
            DB::table('product1')->insert(
                [
                    ['name'=>'ក្តាមឆាប្រៃផ្អែម', 'type_id'=> 5 ,'unit_price'=>60000,'image'=>'menu/ក្តាមឆាប្រៃផ្អែម.jpg'], 
                    ['name'=>'ក្តាមអាំងអំបិលម្ទេស', 'type_id'=> 5 ,'unit_price'=>60000,'image'=>'menu/ក្តាមអាំងអំបិលម្ទេស.jpg'], 
                    ['name'=>'ក្តាមឆាអំពិលទុំ', 'type_id'=> 5 ,'unit_price'=>60000,'image'=>'menu/ក្តាមឆាអំពិលទុំ.jpg'], 
                    ['name'=>'ភ្លាក្តាមសេះ', 'type_id'=> 5 ,'unit_price'=>60000,'image'=>'menu/ភ្លាក្តាមសេះ.jpg'],
                    ['name'=>'ក្តាមឆាម្រេចខ្ចី', 'type_id'=> 5 ,'unit_price'=>60000,'image'=>'menu/ក្តាមឆាម្រេចខ្ចី.jpg'], 
                    ['name'=>'ក្តាមស្រុះ/ចំហុយ', 'type_id'=> 5 ,'unit_price'=>60000,'image'=>'menu/ក្តាមស្រុះ.jpg'], 
                    ['name'=>'ក្តាមឆាការី', 'type_id'=> 5 ,'unit_price'=>60000,'image'=>'menu/ក្តាមឆាការី.jpg'],
                    ['name'=>'ក្តាមអប់មីសួ', 'type_id'=> 5 ,'unit_price'=>60000,'image'=>'menu/ក្តាមអប់មីសួ.jpg'], 
                ]
            );
            DB::table('product1')->insert(
                [
                    ['name'=>'ងាវឆាអំពិលទុំ', 'type_id'=> 6 ,'unit_price'=>25000,'image'=>'menu/ងាវឆាអំពិលទុំ.jpg'], 
                    ['name'=>'ងាវអប់', 'type_id'=> 6 ,'unit_price'=>25000,'image'=>'menu/ងាវអប់.jpg'], 
                    ['name'=>'ងាវស្រុះទឹកម្រេច', 'type_id'=> 6 ,'unit_price'=>25000,'image'=>'menu/ងាវស្រុះទឹកម្រេច.jpg'], 
                    ['name'=>'ខ្យងហូលឆាអំបិលម្ទេស', 'type_id'=> 6 ,'unit_price'=>25000,'image'=>'menu/ខ្យងហូលឆាអំបិលម្ទេស.jpg'], 
                ]
            );
            DB::table('product1')->insert(
                [
                    ['name'=>'បបែលអាំង', 'type_id'=> 7 ,'unit_price'=>30000,'image'=>'menu/បបែលអាំង.jpg'], 
                    ['name'=>'បបែលបំពងខ្ទឹមស', 'type_id'=> 7 ,'unit_price'=>30000,'image'=>'menu/បបែលបំពងខ្ទឹមស.jpg'], 
                    ['name'=>'បបែលឆាក្តៅ', 'type_id'=> 7 ,'unit_price'=>30000,'image'=>'menu/បបែលឆាក្តៅ.jpg'], 
                ]
            );
    }
}
