import { useNavigate } from "react-router-dom";
import { useProductContext } from "./ProductContext";

const ProductList = () => {
  const navigate = useNavigate();
  const { products, addToCart } = useProductContext();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            style={{ marginLeft: "20px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
      <button onClick={() => navigate("/cart")} style={{ marginLeft: "20px" }}>
        Go to Cart
      </button>
    </div>
  );
};

export default ProductList;
