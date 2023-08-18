const express = require('express')
const router = express.Router()

const bookService = require('../../services/book.service') 
//get all books
router.get('/', async (req, res, next) => {
    const result = await bookService.getAll()
    next(result)
})

router.post('/', async (req, res, next) => {
    const filter = req.body
    const result = await bookService.getAll(filter)
    next(result)
})

router.get('/details', async (req, res, next) => {
    const result = await bookService.getAll({}, true)
    next(result)
})

router.post('/details', async (req, res, next) => {
    const filter = req.body
    const result = await bookService.getAll(filter, true)
    next(result)
})

//get book by id
router.get('/:id', async (req, res, next) => {
    const {id} = req.params
    const result = await bookService.getById(id)
    next(result)
})

router.get('/:id/details', async (req, res, next) => {
    const {id} = req.params
    const result = await bookService.getById(id, true)
    next(result)
})


module.exports = router