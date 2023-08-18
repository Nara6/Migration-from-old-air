const joi = require('joi')

const createUpdate = joi.object({
    title: joi.string()
        .min(3)
        .required(),
    description: joi.string()
        .required(),
    category: joi.string()
        .required(),
    author: joi.string()
        .required(),
    language: joi.string()
        .required(),
    publisher: joi.string(),
    publishedDate: joi.date().max('now'),
})

module.exports = {
    createUpdate
}
