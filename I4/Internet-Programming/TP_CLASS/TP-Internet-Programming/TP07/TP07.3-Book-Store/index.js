const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static(__dirname + '/src'))

app.get('/', (req, res) => {
    // res.send("Hello from me!")
    fs.readFile('./src/index.html','utf8',(err,data)=>{
        if(err){
            console.log(err);
        }
        res.send(data);
    })
})
app.get('/detail', (req, res)=>{
    fs.readFile('./src/sub_index.html','utf8',(err,data)=>{
        if(err){
            console.log(err);
        }
        res.send(data);
    })
})

app.listen('3000',()=>{
    console.log("listening on http://localhost:3000");
});