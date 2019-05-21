import React from 'react';

const SearchField = () => {
  return (
    <div className="main-menu-input">
      <label htmlFor="movieSearchInput" className="movie-search-label">
        FIND YOUR MOVIE
      </label>
      <input
        id="movieSearchInput"
        className="movie-search-input"
      />
    </div>
  );
};
export default SearchField;
