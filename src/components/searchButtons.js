import React from 'react';

const SearchButtons = ({onFilterChangeToTitle,onFilterChangeToGenre, onSubmit}) => {
  return (
    <div className="main-menu-buttons">
      <div className="search-by-block">
        <span>SEARCH BY</span>
        <input id="titleButton" type="button" value="TITLE" onClick={onFilterChangeToTitle} />
        <input id="genreButton" type="button" value="GENRE" onClick={onFilterChangeToGenre} />
      </div>
      <input id="submitButton" type="button" value="SEARCH" onClick={onSubmit} />
    </div>
  );
}


export default SearchButtons;
