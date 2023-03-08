const express=require('express')
const router=express.Router()
const {checkLogin}=require('../middelware/authSignUp')
const {login}=require('../controller/user.controller')
router.post('/',checkLogin,login)
module.exports=router