const users = require("../model/user")

const login = async (email, passwd) => {
    const user = await users.findOne({email: email, password: passwd})
    if(!user){
        return "invalid user account"
    }
    return user
}

const register = async (name, email, passwd) => {
    const user = await users.create({name: name, email:email, password: passwd})
    if(!await users.findOne({email: email})){
        return "create fail"
    }
    return user
}


module.exports = {
    login,
    register
}