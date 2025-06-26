import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { type User, type Filters, type Product } from "../../../types";

type ProductContextType = {
  products: Product[];
  loading: boolean;
  user: User;
  cart: (Product & { quantity: number })[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  addToCart: (product: Product, quantity: number) => void;
  filteredProducts: Product[];
  removeFromCart: (product: Product) => void;
};

const ProductContextAPI = createContext<ProductContextType | undefined>(
  undefined
);

export const useProductContext = () => {
  const context = useContext(ProductContextAPI);
  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductAPIProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
  const user: User = { name: "John", role: "customer" };
  const [filters, setFilters] = useState<Filters>({
    category: "",
    inStock: false,
    priceRange: { min: 0, max: 10000 },
  });

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Laptop",
          price: 999,
          category: "electronics",
          stock: 5,
          image: "/laptop.jpg",
          rating: 4.5,
          reviews: 120,
        },
        {
          id: 2,
          name: "Book",
          price: 15,
          category: "books",
          stock: 6,
          image: "/book.jpg",
          rating: 4.2,
          reviews: 45,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const addToCart = (product: Product, quantity: number) => {
    setCart((prev) => {
      const prodIndex = prev.findIndex((item) => item.id === product.id);

      if (prodIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[prodIndex] = {
          ...updatedCart[prodIndex],
          quantity: updatedCart[prodIndex].quantity + quantity,
        };
        return updatedCart;
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (product: Product) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === product.id) {
            if (item.quantity > 0) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!filters.category || product.category === filters.category) &&
      (!filters.inStock || product.stock > 0) &&
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max
    );
  });

  const value = {
    products,
    loading,
    cart,
    user,
    filters,
    setFilters,
    addToCart,
    filteredProducts,
    removeFromCart,
  };

  return (
    <ProductContextAPI.Provider value={value}>
      {children}
    </ProductContextAPI.Provider>
  );
};
