import React from "react";
import { useState } from "react";
import {FaSearch} from 'react-icons/fa'

import './SearchBar.css'

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (input) {
      setQuery(input);
    }
    setInput("");
  };

  return (
    <header className="header" >
      <h1>MyAnimeList</h1>
      <div className="searchBar__searchBox">
        <form action="" onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="Enter name of anime"
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            className='searchBar__searchBox__input'
          />
          <button type="submit" className="searchBar__searchBox__button"> <FaSearch size={20} /> </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
