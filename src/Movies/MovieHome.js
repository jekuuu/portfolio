/* eslint-disable */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';
import Pagination from '../Common/Pagination';

const MovieHome = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filter, setFilter] = useState('popular');
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [selectedNumberOfPage, setSelectedNumberOfPage] = useState(1);

  const getPopularMovies = async (filter) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${filter}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${selectedNumberOfPage}`
    );
    setPopularMovies(res.data.results);
    setNumberOfPage(res.data.total_pages);
  };

  useEffect(() => {
    getPopularMovies('popular');
    setSelectedNumberOfPage(1);
  }, []);

  useEffect(() => {
    getPopularMovies(filter);
  }, [filter]);

  useEffect(() => {
    getPopularMovies(filter);
  }, [selectedNumberOfPage]);

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between mt-3'>
        <h2 className='text-2xl font-semibold dark:text-white ml-3'>
          Popular Movies
        </h2>

        <div className='mr-3 px-3 py-2 bg-white border rounded'>
          <select
            className='focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
            onChange={handleSelectChange}
          >
            <option value='popular'>Popular</option>
            <option value='now_playing'>Now Playing</option>
            <option value='top_rated'>Top Rated</option>
            <option value='upcoming'>Upcoming</option>
          </select>
        </div>
      </div>
      <Pagination
        numberOfPage={numberOfPage}
        setSelectedNumberOfPage={setSelectedNumberOfPage}
        selectedNumberOfPage={selectedNumberOfPage}
      />

      <MovieCard movieData={popularMovies} isMovie />
    </div>
  );
};

export default MovieHome;
