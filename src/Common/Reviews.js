import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <div className='mt-3 dark:text-white' key={review.id}>
          {review.content} --- {review.author}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
