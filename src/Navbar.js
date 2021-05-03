import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div class='container'>
        <NavLink to='/' className='navbar-brand'>
          MovieDB
        </NavLink>
        <div className='collapse navbar-collapse d-flex justify-content-end'>
          <ul className='navbar-nav'>
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
      </div>
    </nav>
  );
};

export default NavBar;
