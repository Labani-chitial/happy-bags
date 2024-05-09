import "./index.css"
// import bag1 from "../../../../../media/bags/src/Components/deal-item/index.js"
// import bag1 from "./Components/images/bag1.jpeg"
//import bag1 from "../../Components/images/bag1.jpeg"

const ProductItem = (props) => {
    const {product, onAddClicked } = props;

    const addToCart = () => {
          onAddClicked();
          console.log("Add button Clicked");
    };

   return (

    <li className="product-item">
        <img src={product.imageUrl} alt={product.name} />
        <h4>{product.name}</h4>
        <h5>{product.brand}</h5>
        <p>{product.price}</p>
        <div className="add-cart-container">
        <button type="button" className="add-cart-btn" onClick={addToCart}>Add to Cart</button>
        </div>
    </li>
 )
};

export default ProductItem;
