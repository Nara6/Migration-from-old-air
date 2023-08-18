const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hello World')
})
app.post('/', function(req, res){
    console.log("Got a POST request for the homepage");
    res.send('Hello Post')
})
app.get('/api', function(req, res){
    res.send('Bonjour API')
})
app.listen(3000, ()=> {console.log("http://localhost:3000");})