
import bag from "../images/bagsimg.png"
import "./index.css";
// import "img" Form ''

const Navbar = () => (
    <div className="navigation">
        <ul className="namelogo">
            <li><img src={bag} alt='bag_img' className="logo" /></li>

            <li><u className="underline"><h1 className="bagname">H@ppy Bags :)</h1></u></li>
        </ul>
        <ul className="nav-menu">
            <li>Home:</li>
            <li>Product:</li>
            <li className="cart-menu-con">
                Cart: <span>0</span>
            </li>
        </ul>
    </div>
)

export default Navbar;