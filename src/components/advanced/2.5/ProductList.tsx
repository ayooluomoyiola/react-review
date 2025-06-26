import { useCartContext } from "./contexts/CartContext";
import { useSearchContext } from "./contexts/SearchContext";

export type Product = { id: number; name: string };

const ProductList = () => {
  const { searchQuery } = useSearchContext();
  const { addToCart } = useCartContext();

  const products: Product[] = [
    { id: 1, name: "Egg" },
    { id: 2, name: "Rice" },
    { id: 3, name: "Spag" },
    { id: 4, name: "Pen" },
    { id: 5, name: "Milk" },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
