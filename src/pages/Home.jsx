import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to React E-Commerce Store</h1>

      <p>
        Shop the latest products with a simple and responsive React application.
      </p>

      <h2>Our Features</h2>

      <ul>
        <li>High Quality Products</li>
        <li>Easy Shopping Experience</li>
        <li>Secure Checkout</li>
        <li>Fast Delivery</li>
      </ul>

      <br />

      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}

export default Home;