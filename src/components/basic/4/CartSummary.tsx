import { useProductContext } from "./ProductContext";

const CartSummary = () => {
  const { cart } = useProductContext();

  const totalPrice = cart.reduce((sum, product) => {
    return sum + product.price;
  }, 0);
  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Items: {cart.length}</p>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default CartSummary;
