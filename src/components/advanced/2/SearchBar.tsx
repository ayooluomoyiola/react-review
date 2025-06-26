import { useAppContext } from "./AppContext";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useAppContext();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
