import React, { useState } from 'react';
import axios from 'axios';

import HomeCard from './HomeCard';
import Loader from './Common/Loader';

const Home = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchQuery}`
    );
    setData(res.data.results);
    setIsLoading(false);
  };

  const handleTextOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    search();
  };

  return (
    <>
      <div className='flex flex-col items-center'>
        <h3 className='text-xl md:text-4xl mt-20 text-gray-700 dark:text-white'>
          Search for a Movie or TV Series
        </h3>
        {isLoading && <Loader />}
        <form onSubmit={handleOnSubmit} className='flex flex-col md:w-96'>
          <input
            type='text'
            value={searchQuery}
            className='mt-14 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white  rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full'
            onChange={handleTextOnChange}
          />
          <button
            type='submit'
            className='mt-14  rounded border-2 border-indigo-400 text-indigo-400 px-2 py-1 uppercase shadow  hover:shadow-inner hover:text-white hover:bg-indigo-400'
          >
            Search
          </button>
        </form>
      </div>
      <HomeCard movieData={data} mix />
    </>
  );
};

export default Home;
