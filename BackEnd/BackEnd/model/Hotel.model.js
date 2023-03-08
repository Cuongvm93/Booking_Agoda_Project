const db=require('../utils/databse')
module.exports.getAllHotelbyCity=(id_hotel,)=>{
    return db.query(`select * from hotel where city_name='${id_hotel}' `)
}
module.exports.getAllHotel=()=>{
    return db.query('select * from hotel')
}
module.exports.getDistrictBycity=(id_hotel)=>{
    return db.query(`select district, count(district) as counts from hotel where city_name='${id_hotel}' group by district`)
}
module.exports.getoneHotel=(id)=>{
    return db.query(`select * from hotel where idHotel=${id}`)
}
module.exports.getRoomBooked=(idhotel,checkin,checkout)=>{
    return db.query(`select id_room from room_booked_tbl where id_hotel=${idhotel} and (("${checkin}"  in ( date_checkin, date_sub(date_checkout,interval 1 day))) or ("${checkout}" in (date_add(date_checkin,interval 1 day), date_checkout)) or ("${checkin}" <= date_checkin and "${checkout}" >= date_checkout)) group by id_room
`)
}
module.exports.getAllRoom=(idHotel)=>{
    return db.query(`select * from room where id_hotel="${idHotel}"`)
}
module.exports.getRoomAvailable=(idHotel,checkin, checkout)=>{
    return db.query(`SELECT * FROM agoda.room where id_hotel=${idHotel} and idroom not in (select id_room from room_booked_tbl where id_hotel=${idHotel} and (("${checkin}  in ( date_checkin, date_sub(date_checkout,interval 1 day))) or ("${checkout}" in (date_add(date_checkin,interval 1 day), date_checkout)) or ("${checkin}" <= date_checkin and "${checkout}" >= date_checkout)) group by id_room
    ) `)
}