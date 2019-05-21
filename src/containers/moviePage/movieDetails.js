import React from 'react';

import PropTypes from 'prop-types';

const MovieDetails = ({ film: { title, release_date, poster_path, voteAverage, overview } }) => {
  return (
    <div className="movie-details">
      <div>
        <img className="movie-details_image" src={poster_path} alt="No cover found" />
      </div>
      <div className="movie-details_description">
        <div>
          <span>{title}</span>
          <span>{voteAverage}</span>
        </div>
        <div>{release_date}</div>
        <div>{overview}</div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  film: PropTypes.object,
}

export default MovieDetails;
