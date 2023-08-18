const users = require('../models/user')
const jwt = require('jsonwebtoken')

const authToken = (userID, name) =>{
    return jwt.sign({userID,name},"Meow")
}
const register = async (name, email, password) =>{
    const user = await users.create({ name: name, email: email, password: password})
    if(!await users.findOne({ email: email})){
        return "Create fail"
    }
    return user
}
const ensureLogin = (req, res) => {
    if(req.session.authToken){
        return res.send("Already Signed in")
    }
    return "Invalid user"
}
const login = async (email,password) => {
    const user = await users.findOne({ email: email})
    if(!user){
        return "Invalid user"
    }
    if(!user.matchesPassword(password)){
        return "Incorrect password"
    }
    const token = authToken(user._id,user.name)
    return token
}
const logout = async (session) => {
    try{
        session.destroy()
        return "Log out Successed"
    }catch(e){
        return e.message
    }
}
module.exports = {register,login,ensureLogin,logout}