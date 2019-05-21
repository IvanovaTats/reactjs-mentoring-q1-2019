import React from 'react';
import PropTypes from 'prop-types'

import Poster from './poster';

const PostersList = ({ posters }) => {

  
  const postersList = posters.map(poster => {
    return <Poster key={poster.id} poster={poster} />;
  });

  return <div className="items-container">{postersList}</div>
};

PostersList.propTypes = {
  posters: PropTypes.arrayOf(PropTypes.object),
}

export default PostersList;
