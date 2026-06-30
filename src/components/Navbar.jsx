import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#333" }}>
      <NavLink to="/" style={{ color: "white", margin: "10px" }}>
        Home
      </NavLink>

      <NavLink to="/products" style={{ color: "white", margin: "10px" }}>
        Products
      </NavLink>

      <NavLink to="/about" style={{ color: "white", margin: "10px" }}>
        About
      </NavLink>

      <NavLink to="/contact" style={{ color: "white", margin: "10px" }}>
        Contact
      </NavLink>

      <NavLink to="/cart" style={{ color: "white", margin: "10px" }}>
        Cart
      </NavLink>

      <NavLink to="/dashboard" style={{ color: "white", margin: "10px" }}>
        Dashboard
      </NavLink>
    </nav>
  );
}

export default Navbar;