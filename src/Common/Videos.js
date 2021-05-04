import React from 'react';

const Videos = ({ videoDetails }) => {
  return (
    <div className=''>
      <h5 className='dark:text-white text-xl mt-7 ml-3'>Watch Trailers</h5>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        {videoDetails.slice(0, 6).map((video) => (
          <div className='mt-3 md:mr-3' key={video.id}>
            <iframe
              // width='w-full md:420'
              // height='345'
              className='w-full h-72 md:w-96'
              src={`https://www.youtube.com/embed/${video.key}?controls=0`}
              title={video.name}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
