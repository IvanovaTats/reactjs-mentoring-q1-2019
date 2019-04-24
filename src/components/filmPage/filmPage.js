import React from 'react';

import Film from '../customElements/film';
import SearchButton from '../buttons/searchButton';
import FilmsList from '../itemsList';

class FilmResultForm extends React.Component {
  constructor(props) {
    super(props);
    this.films = [
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
    this.film = {
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
    };
  }

  handleSubmit() {
    console.log('Route to main page');
  }

  render() {
    return (
      <>
        <div>
          <SearchButton onSearch={e => this.handleSubmit(e)} />
        </div>
        <div>
          <Film film={this.film} />
        </div>
        <div>
          <span>Films by {this.film.genres[0]} genre</span>
        </div>
        <div className="result-form">
          {this.films.length !== 0 ? (
            <div className="items-container">
              <FilmsList items={this.films} />
            </div>
          ) : (
            <div className="result-form-not-found">
              <h2>No result found</h2>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default FilmResultForm;
