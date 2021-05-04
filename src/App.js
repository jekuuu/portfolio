import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import MovieDetails from './Movies/MovieDetails';
import MovieHome from './Movies/MovieHome';
import ShowsHome from './Series/ShowsHome';
import SeriesDetails from './Series/SeriesDetails';
import NavBar from './Common/Navbar';
import Actor from './Common/Actor';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/movies' exact component={MovieHome} />
        <Route path='/shows' exact component={ShowsHome} />
        <Route path='/movie/:id' component={MovieDetails} />
        <Route path='/shows/:id' component={SeriesDetails} />
        <Route path='/actor/:id' component={Actor} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
