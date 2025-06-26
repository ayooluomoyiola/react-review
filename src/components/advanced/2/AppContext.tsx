import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "./ProductList";

type User = { id: string; name: string };
type Notification = { id: string; message: string; read: boolean };

type ContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  notifications: any[];
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>;
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cartItemCount: number;
  unreadNotifications: number;
  isLoggedIn: boolean;
  addToCart: (item: Product) => void;
  logout: () => void;
};

const AppContext = createContext<ContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>({ id: "1", name: "Ayo" });
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const cartItemCount = useMemo(() => {
    return cart.length;
  }, [cart]);

  const unreadNotifications = useMemo(() => {
    return notifications.filter((n) => !n.read).length;
  }, [notifications]);

  const isLoggedIn = useMemo(() => {
    return !user;
  }, [user]);

  const addToCart = useCallback((item: Product) => {
    setCart((prev) => [...prev, item]);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setCart([]);
    setNotifications([]);
  }, []);

  const contextValue = useMemo(
    // every time any state changes, it causes all the consumers of AppContext to re-render
    () => ({
      user,
      setUser,
      theme,
      setTheme,
      notifications,
      setNotifications,
      cart,
      setCart,
      searchQuery,
      setSearchQuery,
      loading,
      setLoading,
      // these guys change on every re-render of AppProvider, even if the consumer isn't using cart, notifs, user
      cartItemCount,
      unreadNotifications,
      isLoggedIn,
      addToCart,
      logout,
    }),
    [
      user,
      theme,
      notifications,
      cart,
      searchQuery,
      loading,
      cartItemCount,
      unreadNotifications,
      isLoggedIn,
      addToCart,
      logout,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
