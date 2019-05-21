import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './styles/index.scss';

import HomePageLayoutRoute from './containers/homePage/homePageLayoutRoute'

const HomePage = React.lazy(() => import('./containers/homePage/homePage'));
const NotFoundPage = React.lazy(() => import('./containers/errorPages/notFoundPage'));
const MoviePage = React.lazy(() => import('./containers/moviePage/moviePage'));
const SearchResult = React.lazy(() => import('./containers/homePage/searchResult'));

const routing = (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/"  >
                    <Redirect to='/home' />
                </Route>
                <HomePageLayoutRoute path='/home' render={() =>{}}/>
                <HomePageLayoutRoute path='/search' component={SearchResult} />
                <Route path='/movie' component={MoviePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Suspense>
    </BrowserRouter >
);

ReactDOM.render(
    routing,
    document.getElementById('root')
);
