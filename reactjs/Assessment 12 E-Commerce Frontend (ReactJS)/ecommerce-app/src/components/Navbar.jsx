import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {

  const { cart } = useCart();

  return (
    <nav>
      <Link to="/">
        <h2>FlipShop</h2>
      </Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;