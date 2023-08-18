const joi = require('joi')
//category: joi.string().required(),
const create = joi.object({
    username: joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),
    email: joi.string()
        .email({minDomainSegments:1, tlds: { allow: ['com'] }})
        .required(),
    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .min(8)
        .required(),
    role: joi.string()
})

const update = joi.object({
    username: joi.string()
        .alphanum()
        .min(3)
        .max(20),
    email: joi.string()
        .email({minDomainSegments:1, tlds: { allow: ['com'] }}),
    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .min(8),
    role: joi.string()
})

const updateUsername = joi.object({
    username: joi.string()
        .alphanum()
        .min(3)
        .max(25)
        .required(),
    currentPassword: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .min(8)
        .required(),
})

const updatePassword = joi.object({
    currentPassword: joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .min(8)
    .required(),
    newPassword: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .min(8)
        .required(),
})

module.exports = {
    create, 
    update,
    updateUsername,
    updatePassword
}