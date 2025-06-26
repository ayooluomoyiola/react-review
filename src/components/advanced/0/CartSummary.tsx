import { useProductContext } from "./ProductContext";

const CartSummary = () => {
  const { cart, removeFromCart } = useProductContext();
  return (
    <>
      {/* Cart Summary */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          background: "white",
          border: "1px solid #ccc",
          padding: "15px",
          color: "#222",
        }}
      >
        <h3>Cart ({cart.length} items)</h3>
        {cart.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>
              {item.price} - Quantity: {item.quantity}
            </p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
        <p>
          Total: $
          {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        </p>
      </div>
    </>
  );
};

export default CartSummary;
