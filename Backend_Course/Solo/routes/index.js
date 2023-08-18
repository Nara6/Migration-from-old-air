const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Hello From ME!")
})
router.use('/user', require('../controller/user.controller'))
module.exports = router