import React from 'react';
// import axios from 'axios';

import './MovieCard.css';

const BooksView = ({ movieData }) => {
  const getPosterImage = async (poster) => {
    // const res = await axios.get(`https://image.tmdb.org/t/p/w500${poster}`, {
    //   headers: { 'Access-Control-Allow-Origin': '*' },
    // });
    // console.log(res);
  };

  return (
    <div className='row'>
      {movieData.map((movie) => {
        return (
          <div className='card col-md-5 offset-md-1 mt-3 col-xs-10 offset-xs-2'>
            <img src={getPosterImage(movie.poster_path)} alt={movie.title} />
            <div className='card-body'>
              <h5 className='card-title'>
                <h5>{movie.title}</h5>
              </h5>
              <p className='card-text'>{movie.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksView;
