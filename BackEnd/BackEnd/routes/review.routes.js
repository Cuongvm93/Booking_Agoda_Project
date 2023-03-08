const { Router } = require('express')
const express=require('express')
const router=express.Router()
const {getAllowReview,addReview,getAllreview}=require("../controller/review.controller")
router.get('/',getAllowReview)
router.post('/',addReview)
router.get('/:id',getAllreview)
module.exports=router