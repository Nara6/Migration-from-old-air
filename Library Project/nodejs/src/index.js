const express = require('express')
// const dotenv = require('dotenv').config()
require('dotenv').config()
const { connectMongoDB } = require('./configs/db')
const bodyPaser = require('body-parser')
const cors = require('cors')
const handler = require('./handler/apiHandler')

const app = express()
const port = process.env.API_PORT;
const adminUrl = process.env.ADMIN_URL
const userUrl = process.env.USER_URL

require('./configs/session')(app);
connectMongoDB()

app.use(cors({
    origin: [adminUrl, userUrl],
    credentials: true
}))
app.use(bodyPaser.urlencoded({extended: true}))
app.use(bodyPaser.json())
app.use(require('./utils/multer.utils'))

app.use(require('./routes'));
app.use(handler.routeHandler)
app.use(handler.apiHandler)


app.listen(port, () => console.log(`App on http://localhost:${port}`))