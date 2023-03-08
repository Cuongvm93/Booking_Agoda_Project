const db= require('../utils/databse')
module.exports.getAllCity=()=>{
    return db.query('select * from city')
}