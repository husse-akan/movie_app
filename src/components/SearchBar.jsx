import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm); // Skickar sökningen till HomePage
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="searchInput"
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button id="submit" type="submit" name="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
