import { Link } from "react-router-dom";
import "./index.css";

const ProductItems = (props) => {
  const { product } = props;
  const {id, image, name, price } = product;
  return (
    <Link to={`/product/${id}`} className="product-link">
      <li className="product-item">
        <img className="product-item-image" src={image} alt={name} />
        <h4>{name}</h4>
        <p>{price}/-</p>
      </li>
    </Link>
  );
};

export default ProductItems;
