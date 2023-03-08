const express=require("express")
const cookieParser=require("cookie-parser");
const bodyparser=require("body-parser")
const cors=require("cors")
const app=express()
const port=5000
const routerLogin=require('./routes/login.routes')
const routerHotel=require('./routes/Hotel.routes')
const routerCity=require('./routes/city.routes')
const {getAllCity}=require('./model/city.model')
const {getAllHotel}=require('./model/Hotel.model')
const routerUser=require('./routes/user.routes')
const routerReview=require('./routes/review.routes')
const routerBook=require('./routes/room.routes')
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use("/api/v1/login",routerLogin)
app.use("/api/v1/hotel",routerHotel)
app.use('/api/v1/city',routerCity)
app.use('/api/v1/user',routerUser)
app.use('/api/v1/review',routerReview)
app.use('/api/v1/book',routerBook)
app.get("/api/v1/searchAll",async (req,res)=>{
    try{
        let result=await Promise.all([getAllCity(),getAllHotel()])
    res.status(200).json(result)
    }
    catch(err){
        res.status(500).json(err)
    }
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost/${port}`);
})