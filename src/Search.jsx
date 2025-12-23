import React, { useState } from 'react';
import './Search.css'

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Buscar juego..."
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default Search;
