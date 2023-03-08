import React from "react";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "./topPalace.css"

function City({src,city,handlclick}) {
    return (
        <>
            <div className="sun-slide dau" onClick={handlclick}>
                <img
                    src={src}
                    alt={city}
                />
                <span>{city}</span>
            </div>
        </>)    
}
function SlideTopPalace() {
    const [runslide, setRunslide] = useState(0);
    let arr = [{
        id: 1,
        city: "Hồ Chí Minh",
    }, {
        id: 2,
        city: "Vũng Tàu",
    }, {
        id: 3,
        city: "Đà Lạt",
    }, {
        id: 4,
        city: "Hà Nội",
    }, {
        id: 5,
        city: "Đà Nẵng",
    }, {
        id: 6,
        city: "Nha Trang",
    }, {
        id: 7,
        city: "Phan Thiết",
    }, {
        id: 8,
        city: "Phú Quốc",
    }, {
        id: 9,
        city: "Huế",
    }, {
        id: 10,
        city: "Cần Thơ",
    }, {
        id: 11,
        city: "Quy Nhơn",
    }, {
        id: 12,
        city: "Hội An",
    },]
    function handleRunslide() {

        setRunslide(0)
    }
    function handleLuislide() {

        setRunslide(1135)
    }
    const navigate=useNavigate()
    function handelClick(params) {
    // window.location.href=`http://localhost:3000/result?city=${params}`
    navigate(`/result?city=${params}`)
    
}
    return (
        <>
        <div className="top-palace-title">
            <h3>Các điểm đến thu hút nhất Việt Nam</h3>
        </div>
        <div className="top-palace-slide-show">
            <div onClick={() => { handleRunslide() }} style={runslide === 1135 ? {opacity:1} : {opacity:0}} className="blur1">
                <div className="btn-first">
                    <i className="fa-solid fa-angle-left" />
                </div>
            </div>

            <div onClick={() => { handleLuislide() }} style={runslide === 1135 ? {opacity:0} : {opacity:1}} className="blur2">
                <div className="btn-last">
                    <i className="fa-solid fa-angle-right" />
                </div>
            </div>
            <div id="run-slide" style={{ transform: `translateX(-${runslide}px)` }}>
                {arr.map((e,i)=>{
                    return <City handlclick={()=>handelClick(e.city)}  src={`./images/hot-vn-${e.id}.jpg`} city={e.city}/>
                })}
            </div>
        </div>
        </>
    );
}

export default SlideTopPalace;