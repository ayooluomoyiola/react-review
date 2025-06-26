import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { Product } from "../ProductList";


type CartContextType = {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  cartItemCount: number;
  addToCart: (item: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const cartItemCount = useMemo(() => cart.length, [cart]);

  const addToCart = useCallback((item: Product) => {
    setCart((prev) => [...prev, item]);
  }, []);

  const value = useMemo(
    () => ({
      cart,
      setCart,
      cartItemCount,
      addToCart,
    }),
    [cart, cartItemCount, addToCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
