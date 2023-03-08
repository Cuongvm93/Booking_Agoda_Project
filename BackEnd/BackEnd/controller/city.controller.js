const {getAllCity} =require("../model/city.model")
const {getAllHotelbyCity,getAllHotel,getDistrictBycity,getoneHotel}=require('../model/Hotel.model')
module.exports.getAll=async(req,res)=>{
    try{
        let result=await Promise.all([getAllHotelbyCity(req.params.id),getDistrictBycity(req.params.id)])
        res.status(200).json(result)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.getAllcity=async(req,res)=>{
    try{
        let [result]=await getAllCity()
    res.status(200).json(result)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}