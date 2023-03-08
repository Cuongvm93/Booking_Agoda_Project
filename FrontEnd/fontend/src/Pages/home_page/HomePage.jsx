import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HotelRecommend from "../../components/hotel-recommend/HotelRecommend";
import SearchMainBody from "../../components/searchMain/searchMainBody";
import SearchMainHeader from "../../components/searchMain/searchMainHead";
import "./homePage.css"
import SlideTopPalace from "../../components/top-palace/TopPalace"
import Search from "../../components/search/search";
import { useState, useEffect } from "react";






function HomePage() {
    let [display, setDisplay] = useState("none")

   
    return (
        <div className="homePage" >
            <Header />
            <div className="home-cover">
                <img src="/images/bg-agoda-homepage.jpg" alt="background" className="bg-homePage" />
                <div className="wellcome-message">
                    <h4  >KHÁCH SẠN, KHU NGHỈ DƯỠNG, NHÀ TRỌ &amp; HƠN THẾ NỮA</h4>
                    <h5  >Nhận giá tốt nhất cho &gt;2.000.000 chỗ nghỉ, trên toàn cầu</h5>
                </div>
                <SearchMainHeader />
                <SearchMainBody />

            </div>

            <div className="slide-wrapper">
                <SlideTopPalace />
            </div>
            <HotelRecommend />
            <Footer />
        </div>
    );
}

export default HomePage;