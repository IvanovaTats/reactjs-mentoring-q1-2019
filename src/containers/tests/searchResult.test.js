import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';


import SearchResult from '../homePage/searchResult';

test('render result page with items', () => {
    const items = [1];
    const container = render(<SearchResult items={items} />);
    expect(container).toMatchSnapshot();
});

// test('render result page without items', () => {
//     const container = render(<SearchResult items={[]} />);
    
//     expect(container)..toMatchInlineSnapshot('<h2>No result found</h2>');
// });