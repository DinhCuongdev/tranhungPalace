import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  useEffect(() => {
    // console.log("messager fb");
    // window.fbAsyncInit = (function () {
    //   window.FB.init({
    //     appId: "100304505254639",
    //     autoLogAppEvents: true,
    //     xfbml: true,
    //     version: "v2.11",
    //   });
    // })(function (d, s, id) {
    //   let js,
    //     fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {
    //     return;
    //   }
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // })(document, "script", "facebook-jssdk");
  }, []);

  const isAdminRoute = location.pathname.includes("/admin");
  return (
    <>
      {!isAdminRoute ? (
        <footer>
          {/* <div
            id="facebook-jssdk"
            class="fb-customerchat"
            page_id="100304505254639"
            theme_color="#459645"
            logged_in_greeting="Hi! How can we help you?"
            logged_out_greeting="GoodBye!... Hope to see you soon."
            minimized="false"
          ></div> */}
          <div className="container">
            <div className="row footer-top">
              <div className="col-xs-6 col-md-3 footer-item">
                <h4>Thông tin liên hệ</h4>
                <ul>
                  <li>
                    <i className="fa fa-map-marker" />
                    Toà nhà Hancrop 72 Trần Đăng Ninh, Quận Cầu Giấy,Hà Nội
                  </li>
                  <li>
                    <i className="fa fa-mobile" />
                    Hotline: 03783812155
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" />
                    Email: trongdongpalace@gmail.com
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3 footer-item">
                <h4>Thời gian mở cửa</h4>
                <ul>
                  <li>Thứ 2 - thứ 6: 8AM - 10PM</li>
                  <li>Thứ 7: 9AM - 8PM</li>
                  <li>Nghỉ Chủ Nhật và các ngày Lễ Tết</li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3 footer-item">
                <h4>Hỗ trợ khách hàng</h4>
                <ul>
                  <li>
                    <Link to="/contact">Liên hệ &amp; Góp ý</Link>
                  </li>
                  <li>
                    <a href="#">Hướng dẫn đặt tiệc online</a>
                  </li>
                  <li>
                    <a href="#">Câu hỏi thường gặp</a>
                  </li>
                  <li>
                    <a href="#">Chính sách bảo mật</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3 footer-item">
                <h4>Chính sách </h4>
                <ul>
                  <li>
                    <a href="#">Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="#">Chính sách hội viên</a>
                  </li>
                  <li>
                    <a href="#">Tổ chức và sự kiện</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row footer-bot">
              <a href="#" title="Kết nối qua Facebook">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="#" title="Kết nối qua Google+">
                <i className="fa fa-google-plus-official" />
              </a>
              <a href="#" title="Kết nối qua Pinterest">
                <i className="fa fa-pinterest" />
              </a>
              <a href="#" title="Kết nối qua Instagram">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
          <div className="container-fluid copyright">
            <div className="row">
              <p>
                Copyright {new Date().getFullYear()}{" "}
                <i className="fa fa-copyright" /> Designed by ...
              </p>
            </div>
          </div>
        </footer>
      ) : null}
    </>
  );
}

export default Footer;
