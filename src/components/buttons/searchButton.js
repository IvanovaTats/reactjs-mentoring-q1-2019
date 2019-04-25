import React from 'react';

const SearchButton = (props) => {

  const { onSearch } = props;

  return (
    <>
      <input
        id="submitButton"
        type="button"
        value="SEARCH"
        onClick={onSearch}
      />
    </>
  );
}

export default SearchButton;
