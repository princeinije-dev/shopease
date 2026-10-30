
import { useState } from "react";

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function increaseQuantity() {
    setQuantity((current) => (current === "" ? 1 : current + 1));
  }

  function handleQuantityChange(event) {
    const value = event.target.value;

    if (value === "") {
      setQuantity("");
      return;
    }

    const number = Number(value);

    if (Number.isInteger(number) && number >= 1) {
      setQuantity(number);
    }
  }

  function handleAddToCart() {
    if (quantity === "" || quantity < 1) return;

    onAddToCart(product, quantity);
    setQuantity(1);
  }

  return (
    <article className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>

      <div className="quantity-controls">
        <button
          type="button"
          onClick={decreaseQuantity}
          aria-label="Decrease quantity"
        >
          −
        </button>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          aria-label={`Quantity for ${product.title}`}
        />

        <button
          type="button"
          onClick={increaseQuantity}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;
