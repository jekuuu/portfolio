import React from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.css';

const BooksView = ({ movieData }) => {
  return (
    <div className='row'>
      {movieData.map((movie) => {
        return (
          <div className='card col-md-5 offset-md-1 mt-3 col-xs-10 offset-xs-2'>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className='card-body'>
              <h5 className='card-title'>
                <h5>
                  {movie.title} {new Date(movie.release_date).getFullYear()}
                </h5>
              </h5>
              <p className='card-text'>{movie.overview}</p>
              <Link to={`/movie/${movie.id}`}>View Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksView;
