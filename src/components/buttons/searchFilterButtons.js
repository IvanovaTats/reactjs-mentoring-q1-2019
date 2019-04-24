import React from 'react';

const SearchFilter = () => {
  return (
    <div className="search-by-block">
      <span>SEARCH BY</span>
      <input id="titleButton" type="button" value="TITLE" />
      <input id="genreButton" type="button" value="GENRE" />
    </div>
  );
};

export default SearchFilter;
