const joi = require('joi')

const createUpdate = joi.object({
    title: joi.string(),
    description: joi.string()
})

module.exports = {
    createUpdate

}