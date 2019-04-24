import React from 'react';

const Item = ({ item }, ..._) => {
  return (
    <div>
      <img
        src={item.poster_path}
        alt="No poster found"
        className="item-image"
      />
      <div className="item-name_date">
        <span>{item.title}</span>
        <span>{item.release_date}</span>
      </div>
      <div>
        <span>{item.genres[0]}</span>
      </div>
    </div>
  );
};

export default Item;
