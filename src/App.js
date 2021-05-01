import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/movie/:id' component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
