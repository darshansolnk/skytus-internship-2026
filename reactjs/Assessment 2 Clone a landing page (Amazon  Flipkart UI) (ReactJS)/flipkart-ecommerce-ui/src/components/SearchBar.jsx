import { useState } from "react";

function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search products..."
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
