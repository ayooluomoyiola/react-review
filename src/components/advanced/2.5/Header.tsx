import { useAuthContext } from "./contexts/AuthContext";
import { useCartContext } from "./contexts/CartContext";
import { useThemeContext } from "./contexts/ThemeContext";

const Header = () => {
  const { user, logout } = useAuthContext();
  const { theme } = useThemeContext();
  const { cartItemCount } = useCartContext();

  return (
    <header className={`header ${theme}`}>
      <div>Welcome {user?.name}</div>
      <span>Cart ({cartItemCount})</span>
      <button onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;
