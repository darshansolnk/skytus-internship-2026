import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="header">
      <div>Welcome {user?.email} ({user?.role})</div>
      <button style={{ width: "100px" }} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Header;