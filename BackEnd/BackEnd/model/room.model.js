const db=require("../utils/databse")
module.exports.bookedroom=(iduser,idroom,idhotel,checkin,checkout)=>{
    return db.query(`insert into room_booked_tbl set id_room=?, id_hotel=?, date_checkin=?, date_checkout=?, id_customer=?, review=0`,[idroom,idhotel,checkin,checkout,iduser])
}