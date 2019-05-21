import React from 'react';
import { render, cleanup, fireEvent, getByText } from 'react-testing-library';
import 'jest-dom/extend-expect';

import HomePage from '../homePage/homePage';
import SearchResult from '../homePage/searchResult';

const setup = () => {
    const homePage = render(<HomePage />);
    const searchButton = homePage.queryByText('SEARCH');
    return {
        searchButton,
        ...homePage
    }
}

afterEach(cleanup);

test('render a home page', () => {
    const { homePage } = setup();
    expect(homePage).toMatchSnapshot();
});

test('click submit button', () => {
    const { searchButton } = setup();

    fireEvent.click(searchButton, { target: { hasError: true } });

    expect(searchButton).toHaveBeenCalled();
});
