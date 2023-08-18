const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    // res.send("Hello from me!")
    fs.readFile('./index.html','utf-8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.send(data);
    })
})

app.listen('3000',()=>{
    console.log("listening on http://localhost:3000");
});