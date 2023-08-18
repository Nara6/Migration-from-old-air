const joi = require('joi')

const create = joi.object({
    userId: joi.string()
        .required(),
    bookUnit: joi.string()
        .required(),
    reason: joi.string()
        .required(),
    pickUpDate: joi.date()
        .required(),
    duration: joi.number()
})

const update = joi.object({
    userId: joi.string()
        .required(),
    bookUnit: joi.string()
        .required(),
    reason: joi.string()
        .required(),
    pickUpDate: joi.date()
        .required(),
    duration: joi.number(),
    status: joi.string(),
    returnDate: joi.date()
})

const userCreate = joi.object({
    book: joi.string()
        .required(),
    reason: joi.string()
        .required(),
    pickUpDate: joi.date()
        .required(),
    duration: joi.number()
})

const userCancel = joi.object({
    isCancel: joi.boolean()
        .required()
})

module.exports = {
    create,
    update,
    userCreate,
    userCancel
}