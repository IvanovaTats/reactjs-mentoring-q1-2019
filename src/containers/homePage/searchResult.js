import React from 'react';

import ResultSort from '../../components/sort';
import ResultsBody from '../../shared/postersList';
import { ItemsList } from '../../utils/items'

class SearchResultForm extends React.Component {
  constructor(props) {
    super(props);
    this.items = ItemsList;
  }

  render() {
    return (
      <div className="result-form">
        {this.items.length !== 0 ? (
          <div>
            <div className="result-form-buttons">
              <span>{this.items.length} movies found</span>
              <ResultSort />
            </div>
            <ResultsBody posters={this.items} />
          </div>
        ) : (
            <div className="result-form-not-found">
              <h2>No result found</h2>
            </div>
          )}
      </div>
    );
  }
}

export default SearchResultForm;
