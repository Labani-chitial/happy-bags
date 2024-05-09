import footer1 from "../images/both.png"
// import footer2 from "../images/socialmedia.png"
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
                </div>
            </div>
            <div className="footer-col-2">
                <h3>Contact Us on:</h3>
                <p>
                More ways to shop: Find a retailer near you, Or call or whatsapp on 123456777 Or email: happybags12345@gmail.com.
                </p>
                <img src={logo} alt='whatsapp' className="logo1"
                />

            </div>
            <div className="footer-col-3">
            <u>
                <h3>Usefull links:</h3>
                </u>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Join Affilater</li>
                </ul>
            </div>
            <div className="footer-col-4">
            <u>
                <h3>Follow Us on:</h3>
            </u>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                    </ul>
                    {/* <img src={footer2} alt='socialmedia' className="logo2"/> */}
            </div>
        </div>
        <hr />
        <p className="copyright">
            Copyright @ 2024 Happybags Inc. All rights reserved.
        </p>
    </div>
);

export default Footer;