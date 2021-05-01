import React, { memo } from 'react';

const SearchForm = ({ searchQuery, setSearchQuery, onSearchClick }) => {
  const handleTextOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOnSearchClick = (e) => {
    e.preventDefault();
    onSearchClick();
  };
  return (
    <form onSubmit={handleOnSearchClick}>
      <input
        type='text'
        onChange={handleTextOnChange}
        value={searchQuery}
        className='form-control'
        placeholder='Search for a book'
        name='txtSearch'
      />
      <button type='submit' className='btn btn-primary mt-2'>
        Search
      </button>
    </form>
  );
};

export default memo(SearchForm);
