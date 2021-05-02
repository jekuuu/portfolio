import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../Movies/MovieCard';

const ShowsHome = () => {
  const [popularSeries, setPopularSeries] = useState([]);
  const [filter, setFilter] = useState('popular');

  const getPopularSeries = async (filter) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${filter}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    setPopularSeries(res.data.results);
  };

  useEffect(() => {
    getPopularSeries('popular');
  }, []);

  useEffect(() => {
    getPopularSeries(filter);
  }, [filter]);

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-md-6'>
          <h2 className='headline'>TV Shows</h2>
        </div>
        <div className='col-md-2 offset-md-4'>
          <select class='form-control' onChange={handleSelectChange}>
            <option value='popular'>Popular</option>
            <option value='now_playing'>Now Playing</option>
            <option value='top_rated'>Top Rated</option>
          </select>
        </div>
      </div>
      <MovieCard movieData={popularSeries} />
    </div>
  );
};

export default ShowsHome;
