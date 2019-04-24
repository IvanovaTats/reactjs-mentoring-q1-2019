import React from 'react';

import SearchField from '../inputs/searchField';
import SearchButton from '../buttons/searchButton';
import SeacrhFilter from '../buttons/searchFilterButtons';
import SearchResult from './searchResult';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // seacrhFilter: 'Title',
      // searchFieldValue: '',
      displayResultForm: false
    };
  }

  handleSubmit() {
    this.setState({
      displayResultForm: true
    });
  }

  render() {
    return (
      <form className="main-menu-form">
        <div className="main-menu-input">
          <SearchField onChange={e => this.handleChange(e)} />
        </div>
        <div className="main-menu-buttons">
          <SeacrhFilter />
          <SearchButton onSearch={e => this.handleSubmit(e)} />
        </div>
        {this.state.displayResultForm ? <SearchResult /> : ''}
      </form>
    );
  }
}

export default MainMenu;
