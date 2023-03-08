const { Router } = require('express')
const {isAuth}=require('../middelware/isAuth')
const express=require('express')
const router=express.Router()
const {booked}=require('../controller/room.controller')
router.post('/',isAuth, booked)
module.exports=router