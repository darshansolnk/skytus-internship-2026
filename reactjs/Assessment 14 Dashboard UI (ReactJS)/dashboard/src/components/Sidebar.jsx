import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>AdminPanel</h2>

      <NavLink to="/dashboard/overview">Overview</NavLink>
      <NavLink to="/dashboard/products">Products</NavLink>
      <NavLink to="/dashboard/users">Users</NavLink>
    </div>
  );
};

export default Sidebar;