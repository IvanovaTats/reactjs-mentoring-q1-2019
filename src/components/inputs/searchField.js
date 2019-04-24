import React from 'react';

const SearchField = () => {
  return (
    <>
      <label htmlFor="movieSearchInput" className="movie-search-label">
        FIND YOUR MOVIE
      </label>
      <input
        id="movieSearchInput"
        type="search"
        className="movie-search-input"
      />
    </>
  );
};
export default SearchField;
