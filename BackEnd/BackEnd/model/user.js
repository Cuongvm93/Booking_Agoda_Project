const db=require("../utils/databse")
module.exports.getAllUser= async()=>{
    return db.query('select * from customer')
}
module.exports.addUser=(email,password,name)=>{
    return db.query('insert into customer set customer_email=?, password=?, Name=?',[email,password,name])
}
