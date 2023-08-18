const express = require('express');
const router = express.Router();

const userService = require('../../services/user.service')
const validation = require('../../middlewares/joi.middleware')
const userSchema = require('../../joiSchema/user.schema')

//get user by id
router.get('/', async (req, res, next) => {
    const token = req.session.authToken
    const result = await userService.userGetById(token)
    next(result)
})

//update user
router.patch('/username', validation(userSchema.updateUsername), async (req, res, next) => {
    const token = req.session.authToken
    const user = req.body
    const result = await userService.updateUsername(token, user)
    next(result)
})

//update password
router.patch('/password', validation(userSchema.updatePassword), async (req, res, next) => {
    const token = req.session.authToken
    const {currentPassword, newPassword} = req.body
    const result = await userService.updatePassword(token, {currentPassword, newPassword})
    next(result)
})

router.patch('/profile', async (req, res) => {
    const token = req.session.authToken
    const profile = req.files['profile']
    const result = await userService.updatePassword(token, profile)
    res.json(result)
})



module.exports = router