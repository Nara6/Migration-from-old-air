const joi = require('joi')

const create = joi.object({
    isbn: joi.string()
        .max(13),
    isPrimary: joi.boolean(),
    isBusy: joi.boolean(),
    condition: joi.string()
        .uppercase(),
    bookRef: joi.string()
        .required(),
    location: joi.string()
        .required()
})

const update = joi.object({
    isPrimary: joi.boolean(),
    isBusy: joi.boolean(),
    condition: joi.string()
        .uppercase(),
    bookRef: joi.string()
        .required(),
    location: joi.string()
        .required()
})

module.exports = {
    create,
    update
}