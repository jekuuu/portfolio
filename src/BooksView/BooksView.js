import React, { memo } from 'react';
import './BooksView.css';

const BooksView = ({ booksData }) => {
  return (
    <div className='row'>
      {booksData.map((book) => {
        const { volumeInfo } = book;
        return (
          <div className='card col-md-5 offset-md-1 mt-3 col-xs-10 offset-xs-2'>
            <img
              src={volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail}
              className='card-img-top mt-3'
              alt={volumeInfo.title}
            />
            <div className='card-body'>
              <h5 className='card-title '>
                <h5>{volumeInfo.title}</h5>
                <p>
                  {volumeInfo.authors &&
                    volumeInfo.authors.map((author) => <>{author}&nbsp;</>)}
                </p>
                <p>
                  {volumeInfo.categories &&
                    volumeInfo.categories.map((category) => <>{category}</>)}
                </p>
                {/* <p>{volumeInfo.averageRating}</p> */}
              </h5>
              <p className='card-text'>{volumeInfo.description}</p>
              <a
                href={volumeInfo.previewLink}
                className='btn btn-success'
                target='_blank'
                rel='noreferrer'
              >
                Preview
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(BooksView);
