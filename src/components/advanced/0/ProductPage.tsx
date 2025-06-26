import CartSummary from "./CartSummary";
import Filter from "./Filter";
import { useProductContext } from "./ProductContext";
import ProductGrid from "./ProductGrid";

const ProductPage = () => {
  const { loading, user } = useProductContext();
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome {user.name}!</h1>
      <ProductGrid />
      <Filter />
      <CartSummary />
    </div>
  );
};

export default ProductPage;
