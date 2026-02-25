import { useCart } from "../context/CartContext";

const Cart = () => {

  const { cart, removeFromCart } = useCart();

  // Calculate Grand Total
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * 83,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <h3 style={{ marginTop: "20px" }}>Your cart is empty 🛒</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">

              <img src={item.image} alt={item.title} />

              <div className="cart-details">
                <h4>{item.title}</h4>
                <p>Price: ₹ {(item.price * 83).toFixed(0)}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ₹ {totalPrice.toFixed(0)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;