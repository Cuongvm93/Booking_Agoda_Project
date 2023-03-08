import "./header.css"
import { Link } from "react-router-dom";
import Account from "../account/Account";
function Header() {
    let data=localStorage.getItem("tokelogin")
    console.log(JSON.parse(data))
    return (
        <>
            <header className='header-container'>
                <div className='left-header-main'>
                    <nav className='logo-and-link'>
                        <div className='logo'>
                            <Link to="/">
                                <a href='#'>
                                    <img src='./images/logo-1.svg' width={"70"} height="100%" alt='logo' />
                                </a>
                            </Link>
                        </div>
                        <div className='navbar-menu'>
                            <ul className='ulcss'>
                                <li>
                                    <a href='' className='licss'>Máy bay + K.sạn</a>
                                </li>
                                <li>
                                    <a href='' className='licss'>Chỗ ở</a>
                                </li>
                                <li>
                                    <a href='' className='licss'>Chuyến bay</a>
                                </li>
                                <li>
                                    <a href='' className='licss'>Phiếu giảm giá và ưu đai</a>
                                </li>
                                <li className="last-child">
                                    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 RBeKP"><path fillRule="evenodd" d="M12 2c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L12 22a10 10 0 0 1-9-5.637l-.08-.169A9.963 9.963 0 0 1 2 12C2 6.477 6.477 2 12 2zm-.5 12h-3v4h3v-4zm4 0h-3v4h3v-4zm-4-5c-1.624.274-2.84 1.632-2.985 3.272l-.012.19L8.5 13h3V9zm1 0v4h3v-.508l-.01-.193c-.129-1.593-1.265-2.917-2.796-3.261L12.5 9zM12 3.5a8.5 8.5 0 0 0-8.485 9.014L12 4.5l8.485 8.013A8.5 8.5 0 0 0 12 3.5z"></path></svg>
                                    <a href=""> Căn hộ</a>
                                </li>
                                <li> <strong> ... </strong></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='right-header-main'>
                    <button className="buton btn-pink">
                        Đăng ký cho thuê nhà
                    </button>
                    <div className='language-select'>
                        <img src='https://cdn6.agoda.net/images/mobile/flag-vn@2x.png' width={30} />
                    </div>
                    <div>
                        <span className="money">₫</span>
                    </div>
                    <div>
                        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="coLXuD"><path d="M3.133 3c.7 0 1.3.482 1.459 1.152l.026.136L4.862 6h15.536a1 1 0 0 1 1 1l-.005.093-.013.091-1.083 5.777a2.5 2.5 0 0 1-2.286 2.033l-.17.006H6.146l.103.712a1.5 1.5 0 0 0 1.346 1.282l.139.006H19.5a.5.5 0 0 1 .09.992L19.5 18h-2a2.5 2.5 0 1 1-4 0h-3a2.5 2.5 0 1 1-3.807-.228 2.496 2.496 0 0 1-1.404-1.753l-.03-.165L3.629 4.429a.5.5 0 0 0-.404-.42L3.133 4H1.5a.5.5 0 0 1-.09-.992L1.5 3h1.633zM8.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-9.496-4H17.84a1.5 1.5 0 0 0 1.441-1.084l.033-.14L20.398 7H5.005l.999 7z"></path></svg>
                    </div>
                    <div className="login-reg-container">
                      {
                        data?<Account name={JSON.parse(data).name}/>:
                        <>
                        <Link to="/login"> <button className="buton btn-login">
                        
                            Đăng nhập
                    </button></Link>
                    <Link to="/signup">
                        <button className="buton btn-register">
                            Tạo tài khoản
                        </button>
                    </Link>
                        </>
                      }
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;