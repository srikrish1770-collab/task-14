import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Dashboard</h1>

      <Link to="orders">Orders</Link>

      <br /><br />

      <Link to="wishlist">Wishlist</Link>

      <br /><br />

      <Link to="settings">Settings</Link>

      <hr />

      <Outlet />
    </div>
  );
}

export default Dashboard;