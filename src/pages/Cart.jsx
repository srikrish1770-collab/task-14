import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const removeFromCart = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>

            <p>
              <strong>Email:</strong> {item.email}
            </p>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;