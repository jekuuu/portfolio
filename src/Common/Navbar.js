import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import useDarkModeHook from '../Hooks/useDarkModeHook';
import ToggleButton from './ToggleButton';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [colorTheme, setTheme] = useDarkModeHook();

  const handleMenuOnClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <nav className='flex justify-between bg-blue-500 py-3 dark:bg-gray-900'>
        <NavLink
          to='/'
          className='text-2xl text-white pl-3 dark:hover:text-gray-600 hover:text-yellow-400'
        >
          <div className='flex flex-row'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mt-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            MediaDB
          </div>
        </NavLink>

        <div className='hidden md:block'>
          <ul className='flex pr-6 '>
            <li>
              <NavLink
                to='/movies'
                className='text-white pr-6 text-xl dark:hover:text-gray-600 hover:text-yellow-400'
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/shows'
                className='text-white text-xl dark:hover:text-gray-600 hover:text-yellow-400'
              >
                TV Shows
              </NavLink>
            </li>
            <li className='ml-6 text-white rounded-full fill-white mt-1'>
              <ToggleButton setTheme={setTheme} colorTheme={colorTheme} />
            </li>
          </ul>
        </div>
        <div className='items-center justify-end md:hidden '>
          <ToggleButton setTheme={setTheme} colorTheme={colorTheme} />
        </div>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-6 w-6 md:hidden cursor-pointer text-white mr-3 mt-2'
          onClick={handleMenuOnClick}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </nav>
      {toggleMenu && (
        <ul className='flex flex-col bg-blue-500 py-3 dark:bg-gray-900 items-left'>
          <li>
            <NavLink
              to='/movies'
              onClick={handleMenuOnClick}
              className='text-white  pr-6 text-xl dark:hover:text-gray-600 hover:text-yellow-400'
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/shows'
              onClick={handleMenuOnClick}
              className='text-white text-xl dark:hover:text-gray-600 hover:text-yellow-400'
            >
              TV Shows
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
