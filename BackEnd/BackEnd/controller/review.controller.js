const {allowReview,addreview,getAllreviewOfHotel}=require('../model/review.model')
const jwt = require("jsonwebtoken")
const jwtsecret = "the most secret string of text in history"
module.exports.getAllowReview=(req,res)=>{
    console.log(req.Authorization);
   jwt.verify(req.headers.token,jwtsecret, async function(err,decode) {
    if (err) {
        res.status(500).json(err)
    }else{
       try{
        let [result]= await allowReview(decode.id)
        res.status(200).json(result)
       }
       catch(err)
       {
        res.status(500).json(err)
       }
    }
   })
}
module.exports.addReview=(req,res)=>{
    jwt.verify(req.headers.token,jwtsecret,async function(err,decode) {
        if (err) {
            res.status(500).json(err)
        }else{
           try{
            console.log(req.body.title,req.body.content,decode.id,req.body.point,req.body.idHotel);
            await addreview(req.body.title,req.body.content,decode.id,req.body.point,req.body.idHotel)
            res.status(200).json({
                status:"success"
            })
        }
        catch(err){
            res.status(500).json(err)
        }
           }
       })

}
module.exports.getAllreview=async(req,res)=>{
    try{
        let [result]=await getAllreviewOfHotel(req.params.id)
        console.log(result);
        res.status(200).json(result)
    }
    catch (err)
    {
        res.status(500).json(err)
    }
}