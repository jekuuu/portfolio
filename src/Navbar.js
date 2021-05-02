import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    // <nav classNameName='navbar navbar-expand-lg navbar-dark bg-dark justify-content-between'>

    //   <div classNameName='collapse navbar-collapse' id='navbarTogglerDemo02'>
    //     <ul className='navbar-nav mr-sm-2'>
    //       <li className='nav-item active'>
    //         <NavLink to='/' className='nav-link'>
    //           Home
    //         </NavLink>
    //       </li>
    //       <li className='nav-item'>
    //         <NavLink to='/movies' className='nav-link'>
    //           Movies
    //         </NavLink>
    //       </li>
    //       <li className='nav-item'>
    //         <NavLink to='/shows' className='nav-link'>
    //           TV Shows
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className='bg-gray-900'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-4'>
            <div>
              <a
                href='#'
                className='flex items-center py-5 px-2 text-gray-100 hover:text-gray-500'
              >
                <svg
                  className='h-6 w-6 mr-1 text-blue-400'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
                <NavLink to='/' classNameName='font-bold'>
                  MovieDB
                </NavLink>
              </a>
            </div>
          </div>

          <div className='hidden md:flex items-center space-x-1'>
            <NavLink
              to='/movies'
              className='py-5 px-3 text-gray-100 hover:text-gray-500'
            >
              Movies
            </NavLink>
            <NavLink
              to='/shows'
              className='py-5 px-3 text-gray-100 hover:text-gray-500'
            >
              TV Shows
            </NavLink>
          </div>

          <div className='md:hidden flex items-center'>
            <button className='mobile-menu-button'>
              <svg
                className='w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <div className='mobile-menu hidden md:hidden'>
        <a href='#' className='block py-2 px-4 text-sm hover:bg-gray-200'>
          Features
        </a>
        <a href='#' className='block py-2 px-4 text-sm hover:bg-gray-200'>
          Pricing
        </a>
      </div> */}
    </nav>
  );
};

export default NavBar;
