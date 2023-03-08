import "./footer.css"

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-box">
                            <h4>Trợ giúp</h4>
                            <ul>
                                <li><p>Trung tâm trợ giúp</p></li>
                                <li><p>Câu hỏi thường gặp</p></li>
                                <li><p>Chính sách Bảo mật</p></li>
                                <li><p>Chính sách về cookie</p></li>
                                <li><p>Điều khoản sử dụng</p></li>
                                <li><p>Quản lý thiết lập cookkie</p></li>
                            </ul>
                        </div>
                        <div className="footer-box">
                            <h4>Công ty</h4>
                            <ul>
                                <li><p>Về Chúng tôi</p></li>
                                <li><p>Tuyển dụng</p></li>
                                <li><p> Báo chí</p></li>
                                <li><p>Nhật Ký mạng</p></li>
                                <li><p>PointsMAX</p></li>
                            </ul>
                        </div>
                        <div className="footer-box">
                            <h4>Điểm du lịch</h4>
                            <ul>
                                <li><p>Quốc gia</p></li>
                                <li><p> Thành Phố</p></li>
                            </ul>
                        </div>
                        <div className="footer-box">
                            <h4> Đối tác của chúng tôi</h4>
                            <ul>
                                <li><p>Cổng thông tin đối tác YCS</p></li>
                                <li><p> Partner Hub</p></li>
                                <li><p>Quảng cáo trên Agoda</p></li>
                                <li><p>Đối tác liên kết</p></li>
                                <li><p>Đối tác kết nối</p></li>
                            </ul>
                        </div>
                        <div className="footer-box">
                            <h4>Tải ứng dụng</h4>
                            <ul>
                                <li><p> Ứng dụng iOS</p></li>
                                <li><p> Ứng dụng Android</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="coppyright">
                    <div className="coppyright-content">
                        <span>Mọi nội dung tại đây © 2005 – 2023 Công ty TNHH Tư nhân Agoda. Bảo Lưu Mọi Quyền.</span><br />
                        <span>Agoda.com là thành viên của Tập đoàn Booking Holdings, nhà cung cấp dịch vụ du lịch trực tuyến &amp; các dịch vụ có liên quan hàng đầu thế giới.</span>
                        <div>
                            <img src="./images/logo-1.svg"></img>
                        </div>
                        <small>hk-pc-2f-acm-web-user-d44f55fc8-hk2vq</small>
                    </div>
                </div>
            </footer>
        </>);
}

export default Footer;