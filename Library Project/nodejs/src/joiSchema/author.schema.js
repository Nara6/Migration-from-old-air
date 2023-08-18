const joi = require('joi')

const createUpdate = joi.object({
    name: joi.string()
        .pattern(/^[a-zA-Z ]+$/)
        .min(3)
        .max(30)
        .required(),
    dob: joi.date()
        .less('now'),
    bio: joi.string(),
})

module.exports = {
    createUpdate
}