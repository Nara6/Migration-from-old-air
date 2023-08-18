const express = require('express')

const router = express.Router()

const eventService = require('../../services/event.service')


router.get('/',eventService.fetchAllEvent)
router.get('/:id',  eventService.fetchByID)


module.exports = router