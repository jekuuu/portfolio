import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-between'>
      <NavLink to='/' className='navbar-brand'>
        MovieDB
      </NavLink>
      <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
        <ul className='navbar-nav mr-sm-2'>
          <li className='nav-item active'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/movies' className='nav-link'>
              Movies
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/shows' className='nav-link'>
              TV Shows
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
