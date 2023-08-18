const express = require('express')
const router = express.Router()
const {register,login,ensureLogin,logout} = require('../services/user.service')
router.post('/register', async (req, res)=>{
    const {name,email,password} = req.body
    const result = await register(name,email,password)
    res.json(result)
})
router.post('/login',ensureLogin, async (req, res)=>{
    const {email,password} = req.body
    const result = await login(email,password)
    res.json(result)
})
router.post('/logout', async (req, res) => {
    const session = req.session
    const result = await logout(session)
    res.json(result)
})
module.exports = router