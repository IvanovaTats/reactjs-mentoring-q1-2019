import React from 'react';

class SearchButton extends React.PureComponent {
  render() {
    const { onSearch } = this.props;

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
}

export default SearchButton;
