import { useSearchContext } from "./contexts/SearchContext";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearchContext();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
