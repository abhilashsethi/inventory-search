export default function SearchForm({ filters, setFilters, onSearch }) {
  return (
    <div className="card">
      <div className="form-row">
        <input
          placeholder="Search product name"
          value={filters.q}
          onChange={e => setFilters({ ...filters, q: e.target.value })}
        />

        <select
          value={filters.category}
          onChange={e => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All Categories</option>
          <option value="Metal">Metal</option>
          <option value="Plastic">Plastic</option>
          <option value="Electrical">Electrical</option>
          <option value="Rubber">Rubber</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={e => setFilters({ ...filters, minPrice: e.target.value })}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={e => setFilters({ ...filters, maxPrice: e.target.value })}
        />

        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
}
