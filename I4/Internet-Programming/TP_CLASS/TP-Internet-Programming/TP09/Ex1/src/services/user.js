const users = require('../models/user');

const register = async(parameter)=>{
    const { username,email,phone,password } = parameter;
    // console.log(parameter);
    try{
        var existing = await users.findOne({email});
        console.log(existing);
        if(existing!=null){
            throw "Email is already in used!";
        }
        existing = await users.findOne({username});
        if(existing!=null){
            throw "Username is already in used!";
        }

        const newUser = {
            username,
            email,
            phone,
            password
        }
        console.log(newUser);
        const createUser = await users.create(newUser);

        return {
            success: true,
            data: createUser
        }
    }catch(err){
        return {
            success: false,
            error: err
        }
    }
}
const login = async(email,password)=>{
    // console.log(email);
    const validEmail = await users.findOne({email});
    // console.log(validEmail);

    try{

        if(!validEmail){
            throw "Invalid email";
        }
        if(validEmail.password!=password){
            throw "Incorrect password!";
        }
        return {
            success: true,
            data: validEmail
        }
    }catch(err){
        return {
            success: false,
            error: err
        }

    }
    
}
module.exports = {register,login}