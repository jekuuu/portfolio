import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';

const MovieHome = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filter, setFilter] = useState('popular');

  const getPopularMovies = async (filter) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${filter}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    setPopularMovies(res.data.results);
  };

  useEffect(() => {
    getPopularMovies('popular');
  }, []);

  useEffect(() => {
    getPopularMovies(filter);
  }, [filter]);

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-md-6'>
          <h2 className='headline'>Movies</h2>
        </div>
        <div className='col-md-2 offset-md-4'>
          <select class='form-control' onChange={handleSelectChange}>
            <option value='popular'>Popular</option>
            <option value='now_playing'>Now Playing</option>
            <option value='top_rated'>Top Rated</option>
            <option value='upcoming'>Upcoming</option>
          </select>
        </div>
      </div>
      <MovieCard movieData={popularMovies} isMovie />
    </div>
  );
};

export default MovieHome;
