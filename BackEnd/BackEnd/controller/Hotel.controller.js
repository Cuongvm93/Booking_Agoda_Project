const {getAllHotelbyCity,getAllHotel,getDistrictBycity,getoneHotel,getAllRoom,getRoomBooked}=require('../model/Hotel.model')

module.exports.getAllHotel=async(req,res)=>{
    try{
        let [result]=await getAllHotelbyCity(req.params.id)
        res.status(200).json(result)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.getOneHotel=async(req,res)=>{
    try{
        let [result]=await getoneHotel(req.params.id)
        let [booked]=await getRoomBooked(req.params.id,req.body.checkin,req.body.checkout)
        let [allRoom]= await getAllRoom(req.params.id)
        res.status(200).json({
            hotel:result,
            book:booked,
            allroom:allRoom
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
// module.exports.getRoomAvailabel=async(req,res)=>{
//     try{
//         let [booked]=await getRoomBooked(req.body.id_hotel,req.body.checkin,req.body.checkout)
//         let [allRoom]= await getAllRoom(req.body.id_hotel)
//         res.send(booked)
//     }
//     catch(err)
//     {
//         res.statuS(5000).json(err)
//     }
// }