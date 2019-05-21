import React from 'react';

import { Redirect } from "react-router-dom";

import MovieDetails from './movieDetails';
import PostersList from '../../shared/postersList';
import { Item, ItemsList } from '../../utils/items';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.films = ItemsList;
    this.film = Item;
    this.state = {
      redirect: false
    }
  }

  setRedirect() {
    this.setState({
      redirect: true
    })
  }

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  };

  render() {
    return (
      <>
        {this.renderRedirect()}
        <div className="main-menu-form">
          <div className="movie-details_search" >
            <input id="submitButton" type="button" value="SEARCH" onClick={() => this.setRedirect()} />
          </div>
          <MovieDetails film={this.film} />
          <span>Films by {this.film.genres[0]} genre</span>
        </div>
        <PostersList posters={this.films} />
      </ >
    );
  }
}

export default MoviePage;
