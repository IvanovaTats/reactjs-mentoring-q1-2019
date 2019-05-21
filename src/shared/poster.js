import React from 'react';

import PropTypes from 'prop-types';

const Poster = ({ poster: { title, genres, release_date, poster_path } }) => {
  return (
    <div className="item-poster">
      <img
        src={poster_path}
        alt="No poster found"
        className="item-image"
      />
      <div className="item-name_date">
        <span>{title}</span>
        <span>{release_date}</span>
      </div>
      <div>
        <span>{genres}</span>
      </div>
    </div>
  );
};

Poster.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.array,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
}

export default Poster;
