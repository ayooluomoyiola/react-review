import { useProductContext } from "./ProductContext";

const Filter = () => {
  const { filters, setFilters } = useProductContext();
  return (
    <>
      {/* Filter Section */}
      <div style={{ marginBottom: "20px" }}>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) =>
              setFilters({ ...filters, inStock: e.target.checked })
            }
          />
          In Stock Only
        </label>
      </div>
    </>
  );
};

export default Filter;
