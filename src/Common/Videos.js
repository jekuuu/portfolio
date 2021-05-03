import React from 'react';

const Videos = ({ videoDetails }) => {
  return (
    <div className='row mt-3'>
      <h5>Watch Trailers</h5>
      {videoDetails.slice(0, 6).map((video) => (
        <div className='col-md-4'>
          <iframe
            width='420'
            height='345'
            src={`https://www.youtube.com/embed/${video.key}?controls=0`}
            title={video.name}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Videos;
