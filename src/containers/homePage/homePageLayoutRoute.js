import React from 'react';
import {  Route } from "react-router-dom";
import HomePageLayout from './homePageLayout';

const HomePageLayoutRoute = ({ component: Component, render, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <HomePageLayout>
                {Component ? <Component {...matchProps} /> : render()}
            </HomePageLayout>
        )} />
    )
};

export default HomePageLayoutRoute;
