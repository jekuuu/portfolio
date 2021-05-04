import React from 'react';

const Pagination = ({
  numberOfPage,
  setSelectedNumberOfPage,
  selectedNumberOfPage,
}) => {
  const handlePrevOnClick = () => {
    if (selectedNumberOfPage < 0) return;
    setSelectedNumberOfPage(selectedNumberOfPage - 1);
  };
  const handleNextOnClick = () => {
    if (selectedNumberOfPage === numberOfPage) return;
    setSelectedNumberOfPage(selectedNumberOfPage + 1);
  };

  return (
    <div className='flex flex-row items-end justify-end mt-3 mr-3'>
      <button
        className='px-3 py-2 bg-red-500 border'
        onClick={handlePrevOnClick}
      >
        <span aria-hidden='true' className='text-white font-semibold'>
          &laquo;
        </span>
      </button>

      <button
        className='px-3 py-2 bg-red-500 border'
        onClick={handleNextOnClick}
      >
        <span aria-hidden='true' className='text-white font-semibold'>
          &raquo;
        </span>
      </button>
    </div>
  );
};

export default Pagination;
