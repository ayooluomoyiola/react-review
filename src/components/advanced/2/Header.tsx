import { useAppContext } from "./AppContext";

const Header = () => {
  const { user, theme, cartItemCount, logout } = useAppContext();

  return (
    <header className={`header ${theme}`}>
      <div>Welcome {user?.name}</div>
      <span>Cart ({cartItemCount})</span>
      <button onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;
