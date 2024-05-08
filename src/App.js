import { Component } from "react";
import Navbar from "./Components/navigation";
import Banner from "./Components/banner";
import "./App.css"
import bag1 from "./Components/images/bag1.jpeg"
import bag2 from "./Components/images/bag2.jpeg"
import bag3 from "./Components/images/bag3.jpeg"
import bag4 from "./Components/images/bag4.jpeg"
import bag5 from "./Components/images/bag5.jpeg"
import bag6 from "./Components/images/bag6.jpeg"
import bag7 from "./Components/images/bag7.jpeg"
import bag8 from "./Components/images/bag8.jpeg"
import bag9 from "./Components/images/bag9.jpeg"
import bag10 from "./Components/images/bag10.jpeg"
import bag11 from "./Components/images/bag11.jpeg"
import bag12 from "./Components/images/bag12.jpeg"
import bag13 from "./Components/images/bag13.jpeg"
import bag14 from "./Components/images/bag14.jpeg"
import bag15 from "./Components/images/bag15.jpeg"
import bag16 from "./Components/images/bag16.jpeg"
import bag17 from "./Components/images/bag17.jpeg"
import bag18 from "./Components/images/bag18.jpeg"
import bag19 from "./Components/images/bag19.jpeg"
import bag20 from "./Components/images/bag20.jpeg"
import bag21 from "./Components/images/bag21.jpeg"
import bag22 from "./Components/images/bag22.jpeg"
import bag23 from "./Components/images/bag23.jpeg"
import bag24 from "./Components/images/bag24.jpeg"

import ProductItem from "./Components/deal-item";

const dealslist = [
  {
    id: 1,
    imageUrl: bag1,
    name: "Fastrack ladies bag",
    brand: "Fastrack",
    price: 899,
  },
  {
    id: 2,
    imageUrl: bag2,
    name: "Caprese ladies bag",
    brand: "Caprese",
    price: 999,
  },
  {
    id: 3,
    imageUrl: bag3,
    name: "Lavie ladies bag",
    brand: "Lavie",
    price: 999,
  },
  {
    id: 4,
    imageUrl: bag4,
    name: "Zouk ladies bag",
    brand: "Zouk",
    price: 999,
  },
  {
    id: 5,
    imageUrl: bag5,
    name: "Lino Perros ladies bag",
    brand: "Lino Perros",
    price: 999,
  },
  {
    id: 6,
    imageUrl: bag6,
    name: "Da Milano ladies bag",
    brand: "Da Milano",
    price: 1499,
  },
  {
    id: 7,
    imageUrl: bag7,
    name: "Burberry ladies bag",
    brand: "Burberry",
    price: 1299,
  },
  {
    id: 8,
    imageUrl: bag8,
    name: "Chumbak Boho ladies bag",
    brand: "Chumbak Boho",
    price: 999,
  },
];

const allProductlist = [
  {
    id: 1,
    imageUrl: bag9,
    name: "Fastrack ladies bag",
    brand: "Fastrack",
    price: 1999,
  },
  {
    id: 2,
    imageUrl: bag10,
    name: "Caprese ladies bag",
    brand: "Caprese",
    price: 1999,
  },
  {
    id: 3,
    imageUrl: bag11,
    name: "Lavie ladies bag",
    brand: "Lavie",
    price: 1999,
  },
  {
    id: 4,
    imageUrl: bag12,
    name: "Zouk ladies bag",
    brand: "Zouk",
    price: 2999,
  },
  {
    id: 5,
    imageUrl: bag13,
    name: "Lino Perros ladies bag",
    brand: "Lino Perros",
    price: 1099,
  },
  {
    id: 6,
    imageUrl: bag14,
    name: "Da Milano ladies bag",
    brand: "Da Milano",
    price: 2999,
  },
  {
    id: 7,
    imageUrl: bag15,
    name: "Burberry ladies bag",
    brand: "Burberry",
    price: 3299,
  },
  {
    id: 8,
    imageUrl: bag16,
    name: "Chumbak Boho ladies bag",
    brand: "Chumbak Boho",
    price: 1799,
  },
  {
    id: 9,
    imageUrl: bag17,
    name: "Fastrack ladies bag",
    brand: "Fastrack",
    price: 1899,
  },
  {
    id: 10,
    imageUrl: bag18,
    name: "Caprese ladies bag",
    brand: "Caprese",
    price: 2999,
  },
  {
    id: 11,
    imageUrl: bag19,
    name: "Lavie ladies bag",
    brand: "Lavie",
    price: 1599,
  },
  {
    id: 12,
    imageUrl: bag20,
    name: "Zouk ladies bag",
    brand: "Zouk",
    price: 1999,
  },
  {
    id: 13,
    imageUrl: bag21,
    name: "Lino Perros ladies bag",
    brand: "Lino Perros",
    price: 1799,
  },
  {
    id: 14,
    imageUrl: bag22,
    name: "Da Milano ladies bag",
    brand: "Da Milano",
    price: 2499,
  },
  {
    id: 15,
    imageUrl: bag23,
    name: "Burberry ladies bag",
    brand: "Burberry",
    price: 2299,
  },
  {
    id: 16,
    imageUrl: bag24,
    name: "Chanel ladies bag",
    brand: "Chanel",
    price: 3999,
  },

];


class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Navbar />
          <Banner />
        </div>
        <div className="product-selection">
         <h2 className="deal">Deals of the Day</h2>
          <ul className="product-row-list">
            {dealslist.map((eachobj) => (
              <ProductItem product={eachobj} key={eachobj.id} />
            ))}
          </ul>
        </div>


        <div className="product-selection">
          <h2 className="deal">All Products</h2>
          <ul className="product-row-list">
            {allProductlist.map((eachobj) => (
              <ProductItem product={eachobj} key={eachobj.id} />
            ))}

          </ul>
        </div>
      </div>
    );
  }
}

export default App;
