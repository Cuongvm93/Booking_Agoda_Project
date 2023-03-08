const {addUser}=require('../model/user')
module.exports.login=(req,res)=>{
    res.status(200).json({
        status:'success',
    })
}
module.exports.addUser=async(req,res)=>{
    try{
        await addUser(req.body.email,req.body.password,req.body.name)
        res.status(200).json({
            status:"success"
        })
    }
    catch(err){
        res.status(200).json(err)
    }
}