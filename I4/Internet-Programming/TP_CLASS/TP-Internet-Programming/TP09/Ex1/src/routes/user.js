const express = require('express');
const {register,login}=require('../services/user')
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hello world");
})
router.post("/register",async (req,res)=>{
    const parameter = req.body
    const result = await register(parameter);
    res.json(result);
})
router.post("/login", async (req,res)=>{
    const parameter = req.body
    const { email,password } = parameter;
    const result = await login(email,password);
    res.json(result);

})
module.exports = router;
