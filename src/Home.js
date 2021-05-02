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
      <h1 className='headline'>Search for a Movie or TV Series</h1>
      {isLoading && <Loader />}
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          value={searchQuery}
          className='form-control'
          onChange={handleTextOnChange}
        />
        <button
          type='submit'
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded'
        >
          Search
        </button>
      </form>
      <HomeCard movieData={data} mix />
    </>
  );
};

export default Home;
