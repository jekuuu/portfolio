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
    <nav>
      <ul className='pagination justify-content-end mt-3'>
        <li className='page-item'>
          <button className='page-link' onClick={handlePrevOnClick}>
            <span aria-hidden='true'>&laquo;</span>
          </button>
        </li>
        {/* <li className='page-item'>
          <a className='page-link' href='#'>
            1
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            2
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            3
          </a>
        </li> */}
        <li className='page-item'>
          <button className='page-link' onClick={handleNextOnClick}>
            <span aria-hidden='true'>&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
