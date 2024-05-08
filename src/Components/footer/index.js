import footer1 from "../images/appstore.jpeg"
import footer2 from "../images/playstore.png"
import logo from "../images/whatsapp.jpeg"
import "./index.css"

const Footer = () => (
    <div className="footer">
        <div className="row">
            <div className="footer-col-1">
                <h3>Download Our App</h3>
                <p>Download App for Android and Ios mobile Phone.</p>
                <div className="app-logo">
                 <img src={footer1} alt='appstore' className="footer1"
                 />
                 <img src={footer2} alt='playstore' className="footer2"
                 />
                </div>
            </div>
            <div className="footer-col-2">
                <img src={logo} alt='whatsapp' className="logo1"
                />
                <p>
                    More ways to shop: Find a retailer near you, Or call or whatsapp on 123456777 Or email: happybags12345@gmail.com.
                </p>
            </div>
            <div className="footer-col-3">
                <h3>Usefull links</h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Join Affilater</li>
                </ul>
            </div>
            <div className="footer-col-4">
                <h3>Follow Us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="copuright">
            Copyright @ 2024 Happybags Inc. All rights reserved.
        </p>
    </div>
);

export default Footer;