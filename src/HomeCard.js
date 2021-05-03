import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ movieData }) => {
  const data = movieData.filter(
    (movie) => movie.poster_path !== null || movie.poster_path
  );
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-5 mt-6 ml-2 mr-2'>
      {data.map((movie) => {
        return (
          <div className='bg-white rounded shadow:xl border-2 transform md:hover:scale-105'>
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
                className='md:h-full bg-cover w-full'
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomeCard;
