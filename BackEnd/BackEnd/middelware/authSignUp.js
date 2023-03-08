const {getAllUser}=require('../model/user')
const jwt=require('jsonwebtoken')
const jwtsecret = "the most secret string of text in history"
module.exports.checkLogin=async(req,res,next)=>{
    const {email,password}=req.body;
    console.log(password);
    let result=await getAllUser()
    let error={}
    let find=result[0].find(item=>{
        return item.customer_email==email
    })
    if (find) {
        if (find.password!==password) {
            error['errPass']="error pass"
        }else{
            res.status(200).json({
                status:"success",
                name:find.Name,
                token:jwt.sign({name:find.Name,id:find.idcustomer},jwtsecret),
            })
        }
    }else{
        error['errEmail']="error email"
    }
    console.log(error);
    if (error.errEmail || error.errPass) {
        console.log(1111);
        res.status(500).json(error)
    }
}
