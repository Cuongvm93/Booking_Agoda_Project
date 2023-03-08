const mysql=require('mysql2')
const pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'agoda'
})
const db=pool.promise()
module.exports=db