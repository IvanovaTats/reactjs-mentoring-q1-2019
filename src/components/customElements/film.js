import React from 'react';

const Film = (
  { poster_path, title, vote_average, release_date, overview },
  ..._
) => {
  return (
    <div>
      <img src={poster_path} alt="No cover found" />
      <div>
        <div>
          <span>{title}</span>
          <span>{vote_average}</span>
        </div>
        <div>{release_date}</div>
        <div>{overview}</div>
      </div>
    </div>
  );
};

export default Film;
