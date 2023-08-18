const express = require('express')
const router = express.Router()

const bookUnitService = require('../../services/bookUnit.service') 
const validation = require('../../middlewares/joi.middleware')
const bookUnitSchema = require('../../joiSchema/bookUnit.schema')

router.get('/', async (req, res, next) => {
    const filter = req.body
    const result = await bookUnitService.getAll(filter)
    next(result)
})

router.get('/details', async (req, res, next) => {
    const filter = req.body
    const result = await bookUnitService.getAll(filter, true)
    next(result)
})

router.get('/:id', async (req, res, next) => {
    const {id} = req.params
    const result = await bookUnitService.getById(id)
    next(result)
})

router.get('/:id/details', async (req, res, next) => {
    const {id} = req.params
    const result = await bookUnitService.getById(id, true)
    next(result)
})

router.post('/', validation(bookUnitSchema.create), async (req, res, next) => {
    const bookUnit = req.body
    const result = await bookUnitService.create(bookUnit)
    next(result)
})

router.patch('/:id',validation(bookUnitSchema.update), async (req, res, next) => {
    const {id} = req.params
    const bookUnit = req.body
    const result = await bookUnitService.update(id, bookUnit)
    next(result)
})

router.delete('/:id', async (req, res, next) => {
    const {id} = req.id
    const result = await bookUnitService.remove(id)
    next(result)
})

module.exports = router