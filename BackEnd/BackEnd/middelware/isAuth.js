const jwt = require("jsonwebtoken")
const jwtsecret = "the most secret string of text in history"
module.exports.isAuth=(req,res,next)=>{
    jwt.verify(req.headers.token,jwtsecret,function(err,decode) {
        if (err) {
            res.status(500).json(err)
        }else{
            req.user=decode
           next();
        }
       })
}