import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ movieData }) => {
  const data = movieData.filter(
    (movie) => movie.poster_path !== null || movie.poster_path
  );
  return (
    <div className='row'>
      {data.map((movie) => {
        return (
          <div className='card col-md-5 offset-md-1 mt-3 col-xs-10'>
            <Link
              to={
                movie.media_type === 'tv'
                  ? `/shows/${movie.id}`
                  : movie.media_type === 'movie'
                  ? `/movie/${movie.id}`
                  : null
              }
            >
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomeCard;
