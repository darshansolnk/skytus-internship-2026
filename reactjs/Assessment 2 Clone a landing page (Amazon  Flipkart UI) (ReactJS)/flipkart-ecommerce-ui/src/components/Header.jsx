import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <h2 className="logo">ShopZone</h2>

      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </nav>

      <FaShoppingCart size={22} />
    </header>
  );
}

export default Header;
