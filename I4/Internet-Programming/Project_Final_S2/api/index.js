const express = require('express');
const app = express();
const products = require('./model/product')
const categories = require('./model/category')
const cors = require('cors')

const {connectMongoDB} = require('./db/index');
app.use(cors({
    origin: '*'
}))
app.get("/",(req,res)=>{
    res.send("Hi From API");
})

app.get("/product/listing", async (req,res)=>{
    const productList = await products.find();
    res.status(200).json(productList);
})
app.get("/category/listing", async (req,res)=>{
    const categoryList = await categories.find();
    res.status(200).json(categoryList);
})
connectMongoDB();
app.use(express.json())
app.listen(3001, ()=>{
    console.log("App is running in http://localhost:3001");
})