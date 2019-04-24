import React from 'react';

import ResultSort from '../buttons/resultsSortButtons';
import ResultsBody from '../itemsList';

class SearchResultForm extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        id: 447365,
        title: 'Guardians of the Galaxy Vol. 3',
        tagline: '',
        vote_average: 0,
        vote_count: 9,
        release_date: '2020-05-01',
        poster_path:
          'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
        overview: "The third film based on Marvel's Guardians of the Galaxy.",
        budget: 0,
        revenue: 0,
        genres: ['Action', 'Adventure', 'Science Fiction'],
        runtime: null
      }
    ];
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
            <div className="items-container">
              <ResultsBody items={this.items} />
            </div>
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
