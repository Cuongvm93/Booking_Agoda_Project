import { Link } from "react-router-dom";
import { Steps, Avatar, Space, Dropdown, Rate,message } from 'antd';
import "./bookPage.css"
import { UserOutlined, DownOutlined, PhoneOutlined, StarOutlined, CreditCardOutlined } from '@ant-design/icons'
import { MailOutlined, SendOutlined, CalendarOutlined, BookOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";




function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const item = [
    getItem('Đơn đặt chỗ của tôi', 'sub1', <CreditCardOutlined />),
    getItem('Hộp thư', 'sub2', <MailOutlined />),
    getItem('Nhận xét', 'sub3', <StarOutlined />),
    { type: 'divider' },
    getItem('Hồ sơ', 'sub4', <UserOutlined />,),
];
const items2 = [
    getItem('Lấy xác nhận đặt phòng', 'sub1', <SendOutlined />),
    getItem('Đổi ngày', 'sub2', <CalendarOutlined />),
    getItem('Yêu cầu đặc biệt', 'sub3', <BookOutlined />),

];



function BookPage() {
    const {searchValue}=useSelector(state=>state.search)
    const checkIn=useSelector(state=>state.date.checkin)
    const checkOut=useSelector(state=>state.date.checkout)
    const {id}=useSelector(state=>state.search)
    const info=useSelector(state=>state.roomInfo)
    let data=JSON.parse(localStorage.getItem("tokelogin"))
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));    
    const description = 'This is a description.';
    const onClick = (e) => {
        console.log('click ', e);
    };
    console.log(info);
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Book room success!',
        className: 'custom-class',
        style: {
          fontSize:"20px",
          marginTop: '50vh',
          marginRight:'2vw'
        },
        duration:2
      });
    };
    const handelbook=()=>{
        fetch('http://localhost:5000/api/v1/book',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                token:data.token
            },
            body:JSON.stringify({
                idhotel:info.idhotel,
                idroom:info.idroom,
                checkin:checkIn,
                checkout:checkOut
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.status=="success") {
                console.log(1111);
                success()
            }
        })
    }
    return (
        <>
            <header className="book-page-header">
                <div className="book-page-wrapper">
                    <div className='book-page-logo'>
                        <Link to="/">
                            <a href='#'>
                                <img src='./images/logo-1.svg' width={"70"} height="100%" alt='logo' />
                            </a>
                        </Link>
                    </div>
                    <div className="book-page-step">
                        <Steps
                            current={1}
                            items={[
                                {
                                    title: 'Chi tiết thanh toán',
                                    description,
                                },
                                {
                                    title: 'Đã xác nhận đặt phòng!',
                                    description,
                                }
                            ]}
                        />
                    </div>
                    <div >
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        <Dropdown trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {data.name}
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </header>
            <div className="book-room-body">
                <div className="book-menu-left">
                    <Menu
                        onClick={onClick}
                        style={{
                            width: 260,
                        }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={item}
                    />
                </div>
                <div className="body-right-wrapper">
                    <div className="book-in4-right">
                        <img src={info.img} width={700} height={233} />
                        <div className="book-property-card">
                            <div className="book-card-left">
                                <div className="book-in4-hotel">
                                    <h4>{info.hotel_name}</h4>
                                    <Rate defaultValue={5} disabled />
                                    <button><PhoneOutlined />Gọi +84898555889</button>
                                </div>
                                <div className="-in4-bottom">
                                    <div>
                                        <h6>Nhận phòng</h6>
                                        <span>{checkIn}</span>
                                        <h6>14:00</h6>
                                    </div>
                                    <div>
                                        <span>{diffDays} đêm</span>
                                    </div>
                                    <div>
                                        <h6>Trả phòng</h6>
                                        <span>{checkOut}</span>
                                        <h6>14:00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="book-card-right">
                                <Menu
                                    items={items2}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="infor-customer">
                        <div className="infor--left">
                            <div className="customer-header">
                                <p>Thông tin về khách</p>
                            </div>
                            <div className="khachchinh">
                                <h6>Khách chính</h6>
                                <div className="tenkhachhang">{data.name}</div>
                            </div>
                            <div className="succhua">
                                <h6>Phòng giường {info.bed}</h6>
                                <div>View hướng {info.view}</div>
                            </div>
                        </div>
                        <div className="infor--right">
                            <div className="emailkhachhang">
                                <h6>email</h6>
                                <div>hihihehehaha@gmail.com</div>
                            </div>
                            <div className="sdtkhachhang">
                                <h6>Số điện thoại</h6>
                                <div>09767676767</div>
                            </div>
                        </div>
                    </div>
                    <div className="thongtin-thanhtoan">
                        <div className="thongtin-header">
                            <p>Thông tin thanh toán</p>
                        </div>
                        <div className="in4-tongtien">
                            <h5>Tổng số tiền</h5>
                            <div className="sophong-sotien">
                                <p>1 phòng x {diffDays} đêm</p>
                                <h5>{diffDays*info.price}</h5>
                            </div>
                        </div>
                        <div className="phuongthuc-thanhtoan">
                            <h6>Phương thức thanh toán</h6>
                            <p>Đặt phòng này không cần thẻ tín dụng</p>
                        </div>
                    </div>
                    <div className="xacnhan-thanhtoan-btn">
                        <div className="thanhtoan-btn">
                            <button onClick={handelbook}>Xác nhận đặt phòng!</button>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>);
}

export default BookPage;