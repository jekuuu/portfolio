import React from 'react';

import './CastPic.css';

const CastPic = ({ castDetails }) => {
  return castDetails.slice(0, 6).map((cast) => (
    <div className='col-md-2 '>
      <img
        src={`https://image.tmdb.org/t/p/w342${cast.profile_path}`}
        className='cast'
        alt={cast.name}
      />
      <div>{cast.name}</div>
    </div>
  ));
};

export default CastPic;
