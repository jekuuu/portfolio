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
      <nav className='flex justify-between bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-3'>
        <NavLink
          to='/'
          className='text-3xl text-white pl-3 hover:text-yellow-500 font-bold'
        >
          MediaDB
        </NavLink>

        <div className='hidden md:block'>
          <ul className='flex pr-6 '>
            <li>
              <NavLink
                to='/movies'
                className='text-white pr-6 text-xl hover:text-yellow-500'
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/shows'
                className='text-white text-xl hover:text-yellow-500'
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
        <ul className=' flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 items-center'>
          <li>
            <NavLink
              to='/movies'
              onClick={handleMenuOnClick}
              className='text-white  pr-6 text-xl hover:text-yellow-500'
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/shows'
              onClick={handleMenuOnClick}
              className='text-white text-xl hover:text-yellow-500'
            >
              TV Shows
            </NavLink>
          </li>
          <li></li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
