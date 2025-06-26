import type { Product } from "../../../types";
import { useProductContext } from "./ProductContext";

const ProductGrid = () => {
  const { filteredProducts, user, addToCart } = useProductContext();
  return (
    <>
      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product: Product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: "15px" }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "200px" }}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>
            <p>
              Stock:{" "}
              {product.stock > 0
                ? `${product.stock} available`
                : "Out of stock"}
            </p>
            <div>
              {"★".repeat(Math.floor(product.rating))} {product.rating} (
              {product.reviews} reviews)
            </div>
            {user.role === "admin" && (
              <div>
                <button onClick={() => console.log("Edit product", product.id)}>
                  Edit
                </button>
                <button
                  onClick={() => console.log("Delete product", product.id)}
                >
                  Delete
                </button>
              </div>
            )}
            <div style={{ marginTop: "10px" }}>
              <input
                type="number"
                min="1"
                max={product.stock}
                defaultValue="1"
                id={`qty-${product.id}`}
              />
              <button
                disabled={product.stock === 0}
                onClick={() => {
                  const qtyInput = document.getElementById(
                    `qty-${product.id}`
                  ) as HTMLInputElement | null;
                  const qty = qtyInput ? qtyInput.value : "1";
                  addToCart(product, parseInt(qty));
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
