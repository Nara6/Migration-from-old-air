const express = require("express")
const bodyParser = require("body-parser")

const connectDB = require('./src/config/db')

const app = express()

connectDB()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(require("./src/route"))

app.listen(3000, () => {console.log("Your app is running on http://localhost:3000");})