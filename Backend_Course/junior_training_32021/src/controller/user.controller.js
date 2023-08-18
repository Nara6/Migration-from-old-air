const express = require("express")
const { login, register } = require("../services/user")

const router = express.Router()

router.post("/login", async (req, res) => {
    const {email, password} = req.body
    const result = await login(email, password)
    res.json(result)
})

router.post("/register", async (req, res) => {
    const {name, email, password} = req.body
    const result = await register(name, email, password)
    res.json(result)
})

module.exports = router