const express = require('express')
const router = express.Router()

const borrowService = require('../../services/borrow.service')
const validation = require('../../middlewares/joi.middleware')
const borrowSchema = require('../../joiSchema/borrow.schema')

router.get('/', async (req, res, next) => {
    const token = req.session.authToken
    const result = await borrowService.userGetAll(token)
    next(result)
})

router.get('/details', async (req, res, next) => {
    const token = req.session.authToken
    const result = await borrowService.userGetAll(token, true)
    next(result)
})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    const result = await borrowService.getById(id)
    next(result)
})

router.get('/:id/details', async (req, res, next) => {
    const id = req.params.id
    const result = await borrowService.getById(id, true)
    next(result)
})

router.post('/', validation(borrowSchema.userCreate), async (req, res, next) => {
    const borrow = req.body
    const token = req.session.authToken
    const result = await borrowService.userCreate(borrow, token)
    next(result)
})

router.patch('/:id', validation(borrowSchema.userCancel), async (req, res, next) => {
    const id = req.params.id
    const {isCancel} = req.body
    const result = await borrowService.userCancelRequest(id, isCancel) //isCancel true mean reject
    next(result)
})

module.exports = router