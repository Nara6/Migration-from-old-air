const express = require('express');
const router = express.Router();

const userService = require('../../services/user.service')
const validation = require('../../middlewares/joi.middleware')
const userSchema = require('../../joiSchema/user.schema')

//get all users
router.get('/', async (req, res, next) => {
    const filter = req.body
    const result = await userService.getAll(filter) 
    next(result)
})

//get user by id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    const result = await userService.getById(id)
    next(result)
})

//create user
router.post('/', validation(userSchema.create), async (req, res, next) => { //-------------------------------------------only admin can create
    const user = req?.body
    const profile = req.files['profile']
    const result = await userService.createUser(user, profile)
    next(result)
})

//update
router.patch('/:id', validation(userSchema.update), async (req, res, next) => {
    const {id} = req.params
    const user = req.body
    const profile = req.files['profile']
    const result = await userService.update(id, user, profile)
    next(result)
})

//delete user
router.delete('/:id', async(req, res, next) => {
    const {id} = req.params
    const result = await userService.removeUser(id)
    next(result)
})

module.exports = router