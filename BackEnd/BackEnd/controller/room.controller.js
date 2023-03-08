const {bookedroom}=require('../model/room.model')
const jwt = require("jsonwebtoken")
const jwtsecret = "the most secret string of text in history"
module.exports.booked=async(req,res)=>{
    
            try{
                console.log(req.user);
                await bookedroom(decode.id, req.body.idroom ,req.body.idhotel,req.body.checkin,req.body.checkout)
                res.status(200).json({
                    status:"success"
                })
            }
            catch(err){
                res.status(500).json(err)
            }
        }