const {getAllUser}=require('../model/user')
module.exports.checkReg=async(req,res,next)=>{
  try{
    const {email,password}=req.body
    let [result]=await getAllUser()
    let find=result.find(e=>e.customer_email==email)
    if (find) {
        res.status(200).json({
            status:"fail"
        })
    }else{
        next()
    }
  }
  catch(err)
  {
    res.status(500).json(err)
  }
}