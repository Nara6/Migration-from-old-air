const mongoose = require('mongoose')

const {Schema} = mongoose

const userSchema = new Schema({
    name : String,
    email : {
        type: String,
        unique: true
    },
    password : String
})

const users = mongoose.model('users', userSchema)

module.exports = users