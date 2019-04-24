import React from 'react';

import ResultItem from './customElements/item';

const ItemsList = ({ items, ...rest }) => {
  const itemsList = items.map(item => {
    return <ResultItem item={item} />;
  });
  return <div className="item-poster">{itemsList}</div>;
};

export default ItemsList;
