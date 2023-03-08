const db=require('../utils/databse')
module.exports.allowReview=(iduser)=>{
  return  db.query(`select hotel.Name,hotel.image,room.Bed,a.id_hotel, a.date_checkin, a.date_checkout from hotel, room, (select * from room_booked_tbl where id_customer=${iduser} and date_checkout< curdate() and review=0) as a where a.id_hotel=idHotel and a.id_room=idroom `)
}
module.exports.addreview=(title,content,iduser,point, idHotel)=>{
    return db.query(`insert into review set review_title=?, review_content=?, id_user=?, point=?, id_hotel=?`,[title,content,iduser,point, idHotel])
}
module.exports.getAllreviewOfHotel=(id_hotel)=>{
  return db.query(`select review.review_title, review.review_content, review.point,customer.Name from review, customer where review.id_hotel=${id_hotel} and review.id_user=customer.idcustomer  `)
}