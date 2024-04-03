import { Component } from "react";
import ProductItems from "../ProductItems";
import Navbar from "../Navbar";
import { IoSearch } from "react-icons/io5";
import "./index.css";

const productList = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Rare Rabbit Shirt",
    price: "1999",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1542776575-f1623249ce85?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Cult-fit T-Shirt",
    price: "999",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1595358418435-4765e059d4c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Raymond Suit",
    price: "5999",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lee Cooper Trouser",
    price: "1499",
  },
  {
    id: "5",
    image:
      "https://plus.unsplash.com/premium_photo-1664299408823-5172575662af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bewakoof Shirt",
    price: "1999",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Van Husun Suite",
    price: "7999",
  },
  {
    id: "7",
    image:
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Polo T-Shirt",
    price: "5999",
  },
  {
    id: "8",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Titan Watch",
    price: "1499",
  },
  {
    id: "9",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Teamsprit Shirt",
    price: "999",
  },
  {
    id: "10",
    image:
      "https://images.unsplash.com/photo-1536077681551-ca2b5dfb5ea8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Spunk T-Shirt",
    price: "999",
  },
  {
    id: "11",
    image:
      "https://images.unsplash.com/photo-1534881210762-dc317b7fb644?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Hilander Trouser",
    price: "1299",
  },
  {
    id: "12",
    image:
      "https://images.unsplash.com/photo-1541015492536-31d513c59861?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jump Suite",
    price: "2499",
  },
];

class Product extends Component {
  state = {
    searchInput: "",
    filteredProductList: productList
  };

  onEnterSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const {
      searchInput,
    } = this.state;
    const filteredResult = productList.filter((eachProduct) =>
      eachProduct.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    
    return (
      <>
        <Navbar />
        <div className="product-container">
          <img
            className="product-banner-image"
            src="https://plus.unsplash.com/premium_photo-1661505230271-0fb08bade65a?q=80&w=1857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner"
          />
          <div className="input-box">
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onEnterSearch}
            />
            <IoSearch />
          </div>
          <div className="products">
            <h1>All Products</h1>
            <ul className="product-list">
              {filteredResult.map((eachProduct) => (
                <ProductItems product={eachProduct} key={eachProduct.id} />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
