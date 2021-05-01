import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState([]);

  const getMovieDetails = async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setMovieDetails(res.data);
    console.log(res);
  };

  useEffect(() => {
    getMovieDetails(match.params.id);
  }, [match.params.id]);

  return (
    <div className='container'>
      <div className='row'>
        <div
          className='card col-md-12  mt-3 col-xs-10 offset-xs-2'
          style={{ height: '100%' }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div className='card-body'>
            <h5 className='card-title'>
              <h5>
                {movieDetails.title}{' '}
                {new Date(movieDetails.release_date).getFullYear()}
              </h5>
            </h5>
            <p className='card-text'>{movieDetails.overview}</p>
            <p className='card-text'>{movieDetails.revenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
