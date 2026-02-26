import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        SecureApp
      </Link>

      <div className="nav-links">
        {!user ? (
          <Link to="/login" className="nav-btn">Login</Link>
        ) : (
          <>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>

            <Link to="/profile" className="nav-link">
              Profile
            </Link>

            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;