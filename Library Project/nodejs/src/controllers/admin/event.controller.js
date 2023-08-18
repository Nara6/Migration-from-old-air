const express = require('express')

const router = express.Router()

const eventService = require('../../services/event.service')
const validation = require('../../middlewares/joi.middleware')
const eventSchema = require('../../joiSchema/event.schema')

router.get('/', eventService.fetchAllEvent)
router.get('/:id', eventService.fetchByID)
router.post('/', validation(eventSchema.createUpdate), eventService.createEvent )
router.patch('/:id', validation(eventSchema.createUpdate), eventService.updateEvent)
 router.delete('/:id', eventService.deleteEvent)

module.exports = router