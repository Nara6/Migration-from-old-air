const joi = require('joi')

const createUpdate = joi.object({
    block: joi.string()
        .uppercase()
        .required(),
    shelf: joi.string()
        .uppercase()
        .required(),
})

module.exports={
    createUpdate
}

