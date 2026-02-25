const FilterBar = ({ category, setCategory, sort, setSort, categories }) => {
  return (
    <div className="filter-container">

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Price Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="default">Sort By</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>

    </div>
  );
};

export default FilterBar;