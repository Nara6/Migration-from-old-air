const joi = require('joi')

const createUpdate = joi.object({
    language: joi.string()
        .required()
        .lowercase()
})

module.exports = {
    createUpdate
}