/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';

const Actor = ({ match }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getActorDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/person/${match.params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setData(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getActorDetails();
  }, []);

  return (
    <div className='mt-5'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='bg-white dark:bg-gray-800 rounded shadow:xl border-2 transform dark:border-transparent mx-5 md:mx-10'>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className=''>
              <img
                src={`https://image.tmdb.org/t/p/w342${data.profile_path}`}
                alt={data.name}
                className='w-full md:w-96'
              />
            </div>
            <div className='col-span-2'>
              <h5 className='dark:text-white text-2xl'>{data.name}</h5>
              <p className='dark:text-white'>{data.biography}</p>
              {/* <CastPic castDetails={castDetails} /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Actor;
