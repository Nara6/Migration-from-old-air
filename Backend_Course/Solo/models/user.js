const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const {Schema} = mongoose

var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String
})

userSchema.pre('save', function (next) {
    if(this.isModified('password')) {
        var salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }
    next();
})
userSchema.methods.matchesPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}
const users = mongoose.model('users', userSchema)
module.exports = users