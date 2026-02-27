import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>

      {user.role === "admin" && (
        <>
          <Link to="/admin/users">Manage Users</Link>
          <Link to="/admin/products">Manage Products</Link>
        </>
      )}

      {user.role === "user" && (
        <>
          <Link to="/user/profile">Profile</Link>
          <Link to="/user/orders">Orders</Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;