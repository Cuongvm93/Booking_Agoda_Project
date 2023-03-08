const {getAllHotel,getOneHotel,getRoomAvailabel}=require('../controller/Hotel.controller')
const express=require('express')
const router=express.Router()
router.get("/",getAllHotel)
router.post("/:id",getOneHotel)
module.exports=router