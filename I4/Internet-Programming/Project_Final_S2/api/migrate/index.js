const mongoose = require('mongoose');

const { connectMongoDB } = require('../db/index');
const Category = require('../migrate/category');
const Product = require('../migrate/product')

async function insertData(){
    try{
        connectMongoDB();
        await Category.createCategory();
        await Product.createProduct();
    }catch (e){
        console.log(e.message);
    }
    
}

insertData();