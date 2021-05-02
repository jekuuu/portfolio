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
    <div className='container'>
      <div className='row'>
        {isLoading ? (
          <Loader />
        ) : (
          <div
            className='card col-md-12  mt-3 col-xs-10 offset-xs-2'
            style={{ height: '100%', width: '100%' }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w342${seriesDetails.poster_path}`}
              alt={seriesDetails.name}
            />
            <div className='card-body'>
              <h5 className='card-title'>
                <h5>{seriesDetails.name}</h5>
              </h5>
              <p className='card-text'>{seriesDetails.overview}</p>
              <div className='row mt-3'>
                <h5>Cast</h5>
                <CastPic castDetails={castDetails} />
              </div>
              <Videos videoDetails={videoDetails} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeriesDetails;
