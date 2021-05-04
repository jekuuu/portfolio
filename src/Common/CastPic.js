import React from 'react';

import './CastPic.css';
import { NavLink } from 'react-router-dom';

const CastPic = ({ castDetails }) => {
  if (castDetails.length < 1) return null;
  return (
    <div>
      <h5 className='dark:text-white text-xl my-3'>Cast</h5>
      <div className='grid grid-cols-3 md:grid-cols-6'>
        {castDetails
          .filter((cast) => cast.profile_path !== null)
          .slice(0, 6)
          .map((cast) => (
            <NavLink className='mr-2' key={cast.id} to={`/actor/${cast.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w342${cast.profile_path}`}
                className='rounded w-72'
                alt={cast.name}
              />
              <div className='dark:text-white'>{cast.name}</div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default CastPic;
