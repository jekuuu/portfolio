import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard/MovieCard';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    setPopularMovies(res.data.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div className='container'>
      <h1 className='headline'>Popular Movies</h1>
      <MovieCard movieData={popularMovies} />
    </div>
  );
};

export default App;
