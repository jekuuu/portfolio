import React, { lazy, Suspense, useEffect, useState } from 'react';
import axios from 'axios';

import SearchForm from './Search/SearchForm';
const BooksView = lazy(() => import('./BooksView/BooksView'));

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [booksData, setBooksData] = useState([]);

  const onSearchClick = async () => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&printType=books`
    );
    setBooksData(res.data.items);
  };

  useEffect(() => {}, []);

  return (
    <div className='container'>
      <h1 className='headline'>Find a book</h1>
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchClick={onSearchClick}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BooksView booksData={booksData} />
      </Suspense>
    </div>
  );
};

export default App;
