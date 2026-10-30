import "../styles/Cart.css";
import CartItem from "../components/CartItem";

function Cart({ cartItems, onUpdateQuantity, onRemove }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section>
        <h2>Your Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Your Shopping Cart</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </section>
  );
}

export default Cart;
