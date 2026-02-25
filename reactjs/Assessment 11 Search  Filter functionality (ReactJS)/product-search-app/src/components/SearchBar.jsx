import { useEffect, useRef } from "react";

const SearchBar = ({ search, setSearch }) => {

  const inputRef = useRef();

  // Auto focus on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="search-container">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;