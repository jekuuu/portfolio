import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CastPic from '../Common/CastPic';
import Videos from '../Common/Videos';
import Loader from '../Common/Loader';

const SeriesDetails = ({ match }) => {
  const [seriesDetails, setMovieDetails] = useState([]);
  const [castDetails, setCastdetails] = useState([]);
  const [videoDetails, setVideodetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovieDetails = async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const resCrew = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const resVideos = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setMovieDetails(res.data);
    setCastdetails(resCrew.data.cast);
    setVideodetails(resVideos.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieDetails(match.params.id);
  }, [match.params.id]);

  return (
    <div className='mt-5'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='bg-white dark:bg-gray-800 rounded shadow:xl border-2 transform dark:border-transparent mx-5 md:mx-10'>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className=''>
              <img
                src={`https://image.tmdb.org/t/p/w342${seriesDetails.poster_path}`}
                alt={seriesDetails.name}
                className='w-full md:w-96'
              />
            </div>
            <div className='col-span-2'>
              <h5 className='dark:text-white text-2xl'>{seriesDetails.name}</h5>
              <p className='dark:text-white'>{seriesDetails.overview}</p>
              <CastPic castDetails={castDetails} />
            </div>
          </div>

          <div></div>
          <div>
            <Videos videoDetails={videoDetails} />
          </div>
          {/* <Reviews reviews={reviews} /> */}
        </div>
      )}
    </div>
  );
};

export default SeriesDetails;
