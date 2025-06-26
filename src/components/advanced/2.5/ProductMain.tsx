import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { NotificationProvider } from "./contexts/NotificationsContext";
import { SearchProvider } from "./contexts/SearchContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./Header";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";

const ProductMain = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <NotificationProvider>
          <SearchProvider>
            <ThemeProvider>
              <Header />
              <SearchBar />
              <ProductList />
            </ThemeProvider>
          </SearchProvider>
        </NotificationProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default ProductMain;
