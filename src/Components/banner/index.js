import bag_banner from "../images/banner3.webp"
import "./index.css"

const Banner = () => (
    <div className="banner-container">
        <div className="text-container">
            <h1>
                THE SUMMER SALE
                <br />
                is now back !! FROM MAY 26th to 5th JUNE on 12 p.m to 9 p.m.
            </h1>
            <p>Get your favourite bags at an unbelievable price !
                <br />
                Summer sale will be available on every bags from MAY 26th to 5th JUNE on 12 p.m to 9 p.m .
            </p>
            <button type="button" className="btn">Explore now</button>
        </div>
        <img src={bag_banner} alt="banner_img" className="banner-logo" />
    </div>

);

export default Banner;