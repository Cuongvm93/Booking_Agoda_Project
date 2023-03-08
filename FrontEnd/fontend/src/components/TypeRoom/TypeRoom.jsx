import { WifiOutlined, CheckOutlined, TransactionOutlined, TeamOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import "./typeRoom.css"

function TypeRoom({bed,price,view,smoke,img,idroom,idhotel,hotel_name}) {
    const navigate=useNavigate()
    console.log(idroom);
    const dispatch=useDispatch()
    let data=JSON.parse(localStorage.getItem("tokelogin"))
    const handelbookroom=()=>{
        if (!data) {
            console.log(111);
            navigate('/login')
        }else{
            dispatch({type:"Book_Room", 
                      info:{
                        bed:bed,
                        price:price,
                        view:view,
                        img:img,
                        idroom:idroom,
                        idhotel:idhotel,
                        hotel_name:hotel_name
                      }
                    })
            navigate('/bookroom')
        }
    }
    return (
    <>
    <div className="type-room">
                        <div className="master-room-header">
                            Phòng  giường {bed} 
                        </div>
                        <div className="master-room-box">
                            <div className="box-left">
                                <h6>Loại phòng</h6>
                                <div >
                                    <img src={img} width={"100%"} />
                                </div>
                                <div className="room-icon wififree">
                                    <WifiOutlined />
                                    <p>Wifi miễn phí</p>
                                </div>
                                <div className="room-icon">
                                    <CheckOutlined />
                                    <p> giường {bed}</p>
                                </div>
                                <div className="room-icon">
                                    <CheckOutlined />
                                    <p>{view}</p>
                                </div>
                                <div className="room-icon">
                                    <CheckOutlined />
                                    <p>{smoke==1?"Có hút thuốc":"Không hút thuốc"}</p>
                                </div>
                            </div>
                            <div className="box-right">
                                <div className="box-right-header">
                                    <div className="header--1"><h6>Giá này đã gồm</h6></div>
                                    <div className="header--2"><h6>Sức chứa</h6></div>
                                    <div className="header--3"><h6>Giá phòng/đêm</h6></div>
                                    <div className="header--4"><h6>Đặt nhiều nhất</h6></div>
                                </div>
                                <div className="right-box-content">
                                    <div className="header--1 ">
                                        <h5>Giá thấp nhất!</h5>
                                        <div >
                                            <span style={{ color: 'black' }}>Lợi ích</span>
                                            <div className="loiich">
                                                <CheckOutlined />
                                                <p>Nhận phòng nhanh, WiFi miễn phí</p>
                                            </div>
                                            <div className="loiich">
                                                <CheckOutlined />
                                                <p>Giá cực thấp! (không hoàn tiền)</p>
                                            </div>
                                        </div>
                                        <div >
                                            <span style={{ color: 'black' }}>Tặng thưởng</span>
                                            <div className="loiich"><TransactionOutlined />
                                                <p>Thưởng hoàn tiền mặt: 101.482 ₫</p></div>
                                        </div>
                                    </div>
                                    <div className="header--2">
                                        <TeamOutlined />
                                    </div>
                                    <div className="header--3">
                                        <p>Tùy theo Điều khoản</p>
                                        <p>Hoàn tiền mặt</p>
                                        <div className="price-1-dem">
                                            {price}
                                        </div>
                                        <p>Giá mỗi đêm rẻ nhất từ</p>
                                    </div>
                                    <div className="header--4">
                                        <button onClick={handelbookroom} className="header-4-btn-1">
                                            Đặt ngay
                                        </button>
                                        <button className="add-to-cart">
                                            Thêm vào xe đẩy hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
    </> );
}

export default TypeRoom;