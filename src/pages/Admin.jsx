import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <p>Select an option below:</p>

      <div style={{ marginBottom: "20px" }}>
        <Link to="add">
          <button>Add Product</button>
        </Link>

        <Link to="edit/1" style={{ marginLeft: "10px" }}>
          <button>Edit Product</button>
        </Link>
      </div>

      {/* Nested Route Content */}
      <Outlet />
    </div>
  );
}

export default Admin;