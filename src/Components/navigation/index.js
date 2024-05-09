
import bag from "../images/bagsimg.png"
import "./index.css";
// import "img" Form ''

const Navbar = (props) => {
       
    const { count } = props;

   return(

    <div className="navigation">
        <ul className="namelogo">
            <li><img src={bag} alt='bag_img' className="logo" /></li>

            <li><h1 className="bagname">H@ppy Bags :)</h1></li>
        </ul>
        <ul className="nav-menu">
            <li>Home:</li>
            <li>Product:</li>
            <li className="cart-menu-con">
                Cart: <span>{count}</span>
            </li>
        </ul>
    </div>
    );
};

export default Navbar;