import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BooksApp from './App';
import Search from './Search';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BooksApp} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
