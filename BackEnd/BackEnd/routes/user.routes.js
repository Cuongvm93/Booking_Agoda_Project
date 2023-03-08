const {addUser}=require("../controller/user.controller")
const {checkReg}=require('../middelware/authRegister')
const express=require('express')
const router=express.Router()
router.post("/",checkReg,addUser)
module.exports=router