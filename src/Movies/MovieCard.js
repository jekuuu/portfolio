import React from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.css';

const MovieCard = ({ movieData, isMovie }) => {
  return (
    <div className='row'>
      {movieData.map((movie) => {
        return (
          <div className='card col-md-5 offset-md-1 mt-3 col-xs-10'>
            <Link to={isMovie ? `/movie/${movie.id}` : `/shows/${movie.id}`}>
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

export default MovieCard;
