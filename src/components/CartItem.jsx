
function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <article className="cart-item">
      <img src={item.image} alt={item.title} width="100" />

      <div>
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)}</p>

        <div>
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            type="button"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>

        <button type="button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </article>
  );
}

export default CartItem;
