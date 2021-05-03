import React from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.css';

const MovieCard = ({ movieData, isMovie }) => {
  return (
    <div className='row mt-3'>
      {movieData.map((movie) => {
        return (
          <div className='card home col-md-5 offset-md-1 mt-3 col-xs-12'>
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
