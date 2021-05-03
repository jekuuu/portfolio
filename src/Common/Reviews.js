import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <div className='mt-3'>
          {review.content} --- {review.author}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
