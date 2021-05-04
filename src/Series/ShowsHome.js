/* eslint-disable */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../Movies/MovieCard';
import Pagination from '../Common/Pagination';

const ShowsHome = () => {
  const [popularSeries, setPopularSeries] = useState([]);
  const [filter, setFilter] = useState('popular');
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [selectedNumberOfPage, setSelectedNumberOfPage] = useState(1);

  const getPopularSeries = async (filter) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${filter}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${selectedNumberOfPage}`
    );
    const data = res.data.results.filter(
      (data) => data.poster_path && data.poster_path !== null
    );
    setPopularSeries(data);
    setNumberOfPage(res.data.total_pages);
  };

  useEffect(() => {
    getPopularSeries('popular');
    setSelectedNumberOfPage(1);
  }, []);

  useEffect(() => {
    getPopularSeries(filter);
  }, [filter]);

  const handleSelectChange = (e) => {
    setSelectedNumberOfPage(1);
    setFilter(e.target.value);
  };

  useEffect(() => {
    getPopularSeries(filter);
  }, [selectedNumberOfPage]);

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between mt-3'>
        <h2 className='text-2xl font-semibold dark:text-white ml-3'>
          Popular TV Shows
        </h2>

        <div className='mr-3 px-3 py-2 bg-white border rounded'>
          <select
            className='focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
            onChange={handleSelectChange}
          >
            <option value='popular'>Popular</option>
            <option value='now_playing'>Now Playing</option>
            <option value='top_rated'>Top Rated</option>
          </select>
        </div>
      </div>
      <Pagination
        numberOfPage={numberOfPage}
        setSelectedNumberOfPage={setSelectedNumberOfPage}
        selectedNumberOfPage={selectedNumberOfPage}
      />

      <MovieCard movieData={popularSeries} />
    </div>
  );
};

export default ShowsHome;
