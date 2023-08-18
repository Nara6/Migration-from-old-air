const express = require('express')
const app = express()
const connectMongoDB = require('./config/db')
const bodyParser = require('body-parser')
const multer = require('multer')
require('./config/session')(app);
connectMongoDB()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(require('./routes'))
app.use(multer)
app.listen(3000,()=> {
    console.log('http://localhost:3000')
})