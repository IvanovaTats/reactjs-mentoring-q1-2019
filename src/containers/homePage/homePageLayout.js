import React from 'react';

import HomePage from './homePage'

const HomePageLayout = ({ children }) => {
    return (
        <>
            <HomePage />
            {children}
        </>
    )
}

export default HomePageLayout;