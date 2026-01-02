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
    <div>
      <input type="text" placeholder="Search some games :D"/>
      <button><img src="./src/assets/lupa.png"></img></button>
    </div>
  );
}

export default Search;
