import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ cartItems }) {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        ShopEase
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart" className="cart-link">
          Cart <span>{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;