import { createContext, useContext, useState, type ReactNode } from "react";
import { productsArray } from "./Products";

export type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductContextType = {
  cart: Product[];
  products: Product[];
  addToCart: (product: Product) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const products = productsArray;
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const value = { cart, addToCart, products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
