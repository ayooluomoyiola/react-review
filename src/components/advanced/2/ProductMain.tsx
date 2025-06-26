import { AppProvider } from "./AppContext";
import Header from "./Header";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";

const ProductMain = () => {
  return (
    <AppProvider>
      <Header />
      <SearchBar />
      <ProductList />
    </AppProvider>
  );
};

export default ProductMain;
