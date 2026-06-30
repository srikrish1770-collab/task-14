import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD",
      payload: product,
    });
  };

  return (
    <div className="card">
      <h3>{product.name}</h3>

      <p>
        <strong>Email:</strong> {product.email}
      </p>

      <p>
        <strong>City:</strong> {product.address?.city}
      </p>

      <button onClick={addToCart}>Add to Cart</button>

      <br />
      <br />

      <Link to={`/products/${product.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;