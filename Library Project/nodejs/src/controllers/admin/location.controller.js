const express = require('express')
const router = express.Router()

const locationService = require('../../services/location.service')
const validation = require('../../middlewares/joi.middleware')
const locationSchema = require('../../joiSchema/location.schema')

router.get('/', async (req, res, next) => {
    const filter = req.body
    const result = await locationService.getAll(filter)
    next(result)
})

router.get('/:id', async (req, res, next) => {
    const {id} = req.params
    const result = await locationService.getById(id)
    next(result)
})

router.post('/', validation(locationSchema.createUpdate), async (req, res, next) => {
    const location = req.body
    const result = await locationService.create(location)
    next(result) 
})

router.patch('/:id', validation(locationSchema.createUpdate), async (req, res, next) => {
    const {id} = req.params
    const location = req.body
    const result = await locationService.update(id, location)
    next(result)
})

router.delete('/:id', async (req, res, next) => {
    const {id} = req.params
    const result = await locationService.remove(id)
    next(result)
})

module.exports = router