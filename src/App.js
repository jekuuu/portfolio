import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './Movies/MovieDetails';
import NavBar from './Navbar';
import MovieHome from './Movies/MovieHome';
import ShowsHome from './Series/ShowsHome';
import SeriesDetails from './Series/SeriesDetails';

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
      </Switch>
    </BrowserRouter>
  );
};

export default App;
