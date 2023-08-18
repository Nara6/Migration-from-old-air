const Users = require("../models/user")
const messageHandler = require('../handler/messageHandler')
const cloudinary = require('../configs/cloudinary')
const { tokenTranslate } = require("../utils/jwt.util")

//find all users
const getAll = async (filter) => {
    try{
        const users = await Users.find(filter)
        return messageHandler.ok(users)
    }catch(e){
        return e.message
    }
}

//find user by id
const getById = async (id) => {
    try{
        const user = await Users.findById(id)
        if(!user){
            return messageHandler.notFound("User Not Found")
        }
        return messageHandler.ok(user)
    }catch(e){
        return e.message
    }
}

// create user
const createUser = async (_user, _profile) => {
    try{
        if(!await Users.doesntExist({email:_user.email})){
            return messageHandler.conflict("User Email Already Exist")
        }
        if(!await Users.doesntExist({username:_user.username})){
            return messageHandler.conflict("User Username Already Exist")
        }
        if(_profile){
            const profile = await cloudinary.uploader.upload(_profile[0].path, {upload_preset: 'profile'})
            _user.profile = profile.secure_url
            _user.profilePID = profile.public_id
        }
        const user = await Users.create(_user)
        return messageHandler.created(user)
    }catch(e){
        return e.message
    }
}

//update (for admin)
const update = async (id, _user, _profile) => {
    try{
        var user = await Users.findById(id)
        if(!user){
            return messageHandler.notFound("User Not Found")
        }
        if(_profile){
            if(user.profilePID){
                await cloudinary.uploader.destroy(user.profilePID)
            }
            const profile = await cloudinary.uploader.upload(_profile[0].path, {upload_preset: 'profile'})
            user.profile = profile.secure_url
            user.profilePID = profile.public_id
        }
        user.email = _user.email ? _user.email:user.email
        user.username = _user.username ? _user.username:user.username
        user.password = _user.password ? _user.password:user.password
        user.role = _user.role ? _user.role:user.role
        await user.save()
        return messageHandler.ok(user)
    }catch(e){
        return e.message
    }
}

//update username
const updateUsername = async (token, _user) => {
    try{
        const temp = tokenTranslate(token)
        const id = temp.id
        const user = await Users.findById(id)
        if(!user.matchesPassword(_user.currentPassword)){
            return messageHandler.forbidden("Incorrect Password")
        }
        user.username = _user.username
        await user.save()
        return messageHandler.ok(user)
    }catch(e){
        return e.message
    }
}

//update password
const updatePassword = async (token, _user) => {
    try{
        const temp = tokenTranslate(token)
        const id = temp.id
        var user = await Users.findById(id)
        if(!user.matchesPassword(_user.currentPassword)){
            return messageHandler.forbidden("Incorrect Password")
        }
        user.password = _user.newPassword
        await user.save()
        return messageHandler.ok(user)
    }catch(e){
        return e.message
    }
}

//update profile
const updateProfile = async (token, _profile) => {
    try{
        const temp = tokenTranslate(token)
        const id = temp.id
        if(!_profile){
            return messageHandler.badRequest("Need Profile Input")
        }
        var user = await Users.findById(id)
        if(!user.matchesPassword(_profile.currentPassword)){
            return messageHandler.forbidden("Incorrect Password")
        }
        if(user.profile){
            await cloudinary.uploader.destroy(user.profilePID)
        }
        const profile = await cloudinary.uploader.upload(_profile[0].path, {upload_preset: 'profile'})
        user.profile = profile.secure_url
        user.profilePID = profile.public_id
        await user.save()
        return messageHandler.ok("Update Profile Successful")
    }catch(e){
        return e.message
    }
}

//delete user
const removeUser = async (id) => {
    try{
        const user = await Users.findById(id)
        if(!user){
            return messageHandler.notFound("Author Not Exist")
        }
        if(user.profilePID){
            await cloudinary.uploader.destroy(user.profilePID)
        }
        await user.remove()
        if(!await Users.doesntExist({_id:id})){
            return messageHandler.conflict("Delete Fail")
        }
        return messageHandler.ok("Delete Successful")
    }catch(e){
        return e.message
    }
}

const userGetById = async (token) => {
    try{
        const temp = tokenTranslate(token)
        const id = temp.id
        const user = await Users.findById(id)
        if(!user){
            return messageHandler.notFound("User Not Found")
        }
        return messageHandler.ok(user)
    }catch(e){
        return e.message
    }
}

module.exports = {
    getAll,
    getById,
    createUser,
    update,
    updateUsername,
    updatePassword,
    updateProfile,
    removeUser,
    userGetById
}