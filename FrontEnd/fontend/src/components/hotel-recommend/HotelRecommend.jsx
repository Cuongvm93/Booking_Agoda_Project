import "./hotelRecommend.css"
import { Rate } from "antd";
import { useState } from "react";


function HotelRecommend() {
    let [city,setCity]  = useState({
        city : 'Hồ Chí Minh'
    })
    return (
        <div className="hotel-recommend-wrapper">
            <div className="recommend-title">
                <h3>Những chỗ nghỉ nổi bật khuyến nghị cho bạn:</h3>
            </div>
            <div className="hotelRecommend-city">
                <div  className="city-guest"> </div>
                <div className="city-guest">Hà Nội</div>
                <div className="city-guest">Vũng Tàu</div>
                <div className="city-guest">Đà Lạt</div>
                <div className="city-guest">Đà Nẵng</div>
            </div>
            <div className="hotelRecommend-cards">
                <div className="card-hotel-item">
                    <div className="card-image">
                        <img src="/images/hotel-recommend-1.webp" alt="hotelrecommend" />
                    </div>
                    <div className="card-content">Nhà dân G9 - Nguyễn Trãi (The Art - G9 Homestay)</div>
                    <div className="card-location">Quận 1, Hồ Chí Minh, Việt NaM</div>
                    <div className="card-rating">
                        <button>9.5</button>
                        <Rate disabled defaultValue={5} />
                    </div>
                    <div className="card-price">VND <span>940,782</span> </div>
                </div>
                <div className="card-hotel-item">
                    <div className="card-image">
                        <img src="/images/hotel-recommend-1.webp" alt="hotelrecommend" />
                    </div>
                    <div className="card-content">Nhà dân G9 - Nguyễn Trãi (The Art - G9 Homestay)</div>
                    <div className="card-location">Quận 1, Hồ Chí Minh, Việt NaM</div>
                    <div className="card-rating">
                        <button>9.5</button>
                        <Rate disabled defaultValue={5} />
                    </div>
                    <div className="card-price">VND <span>940,782</span> </div>
                </div><div className="card-hotel-item">
                    <div className="card-image">
                        <img src="/images/hotel-recommend-1.webp" alt="hotelrecommend" />
                    </div>
                    <div className="card-content">Nhà dân G9 - Nguyễn Trãi (The Art - G9 Homestay)</div>
                    <div className="card-location">Quận 1, Hồ Chí Minh, Việt NaM</div>
                    <div className="card-rating">
                        <button>9.5</button>
                        <Rate disabled defaultValue={5} />
                    </div>
                    <div className="card-price">VND <span>940,782</span> </div>
                </div><div className="card-hotel-item">
                    <div className="card-image">
                        <img src="/images/hotel-recommend-1.webp" alt="hotelrecommend" />
                    </div>
                    <div className="card-content">Nhà dân G9 - Nguyễn Trãi (The Art - G9 Homestay)</div>
                    <div className="card-location">Quận 1, Hồ Chí Minh, Việt NaM</div>
                    <div className="card-rating">
                        <button>9.5</button>
                        <Rate disabled defaultValue={5} />
                    </div>
                    <div className="card-price">VND <span>940,782</span> </div>
                </div><div className="card-hotel-item">
                    <div className="card-image">
                        <img src="/images/hotel-recommend-1.webp" alt="hotelrecommend" />
                    </div>
                    <div className="card-content">Nhà dân G9 - Nguyễn Trãi (The Art - G9 Homestay)</div>
                    <div className="card-location">Quận 1, Hồ Chí Minh, Việt NaM</div>
                    <div className="card-rating">
                        <button>9.5</button>
                        <Rate disabled defaultValue={5} />
                    </div>
                    <div className="card-price">VND <span>940,782</span> </div>
                </div><div className="card-hotel-item">
                    <div className="card-image">
                        <img src="/images/hotel-recommend-1.webp" alt="hotelrecommend" />
                    </div>
                    <div className="card-content">Nhà dân G9 - Nguyễn Trãi (The Art - G9 Homestay)</div>
                    <div className="card-location">Quận 1, Hồ Chí Minh, Việt NaM</div>
                    <div className="card-rating">
                        <button>9.5</button>
                        <Rate disabled defaultValue={5} />
                    </div>
                    <div className="card-price">VND <span>940,782</span> </div>
                </div><div className="card-hotel-item">
                    <div className="card-image">
                        <img src="/images/hotel-recommend-1.webp" alt="hotelrecommend" />
                    </div>
                    <div className="card-content">Nhà dân G9 - Nguyễn Trãi (The Art - G9 Homestay)</div>
                    <div className="card-location">Quận 1, Hồ Chí Minh, Việt NaM</div>
                    <div className="card-rating">
                        <button>9.5</button>
                        <Rate disabled defaultValue={5} />
                    </div>
                    <div className="card-price">VND <span>940,782</span> </div>
                </div>
            </div>
            <div className="hotelRecommend-see-more">
                <button className="see-more-btn"> Xem thêm các chỗ nghỉ... </button>
            </div>
        </div>
    );
}

export default HotelRecommend;