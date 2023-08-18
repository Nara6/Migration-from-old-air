const joi = require('joi')

const createUpdate = joi.object({
    userAccID: joi.string()
        .required(),
    firstName: joi.string()
        .pattern(/^[a-zA-Z]+$/)
        .max(15)
        .required(),
    lastName: joi.string()
        .pattern(/^[a-zA-Z]+$/)
        .max(15)
        .required(),
    dob: joi.date()
        .max('now')
        .required(),
    tel: joi.string()
        .pattern(/^[0-9]+$/)
        .min(9)
        .max(13)
        .required(),
    gender: joi.string()
        .uppercase()
        .required(),
    address: joi.string()
        .required(),
    occupation: joi.string()
        .required(),
    nationality: joi.string()
})

module.exports = {
    createUpdate
}



