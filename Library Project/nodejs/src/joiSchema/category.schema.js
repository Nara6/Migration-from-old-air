const joi = require('joi')

const createUpdate = joi.object({
    category: joi.string()
        .pattern(/^[a-zA-Z]+$/)
        .max(20)
        .required(),
    decription: joi.string()
})

module.exports = {
    createUpdate
}