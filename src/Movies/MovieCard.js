import React from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.css';

const MovieCard = ({ movieData, isMovie }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-5 mt-6 ml-2 mr-2'>
      {movieData.map((movie) => {
        return (
          <div
            className='bg-white rounded shadow:xl border-2 transform md:hover:scale-105'
            key={movie.id}
          >
            <Link to={isMovie ? `/movie/${movie.id}` : `/shows/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={isMovie ? movie.title : movie.name}
                className='md:h-full bg-cover w-full'
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
