import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import CardReview from "../../components/review/Cardhotelreview.jsx";
import './reviewPage.css'
export default function Reviewpage(){
    const [dataRender,setDataRender]=useState([])
    let data=localStorage.getItem("tokelogin")
    console.log(JSON.parse(data))
    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/review',{
            headers:{
                token:JSON.parse(data).token
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setDataRender(data)
        })
    },[])
    return (
       <>
        <div className="reviewPage_header">
        <Header/>
        </div>
        <div className="reviewPage_body">
        {dataRender.map(e=>{
        return   <CardReview id_hotel={e.id_hotel} checkin={e.date_checkin} bed={e.Bed} title={e.Name} img={e.image[0]} checkout={e.date_checkout}/>
        })}
        </div>

       </>
    )
}