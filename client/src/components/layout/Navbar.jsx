import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav
        className='navbar is-primary'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-start'>
          <div className='navbar-brand navbar-item'>
            <div>LOGO</div>
            <a
              role='button'
              class='navbar-burger'
              aria-label='menu'
              aria-expanded='false'
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
        </div>

        <div className='navbar-end'>
          <div className='navbar-menu'>
            <Link to='/' className='navbar-item'>
              Home
            </Link>
            <Link to='/about' className='navbar-item'>
              About project
            </Link>
            <Link to='/register' className='navbar-item'>
              Register
            </Link>
            <Link to='/login' className='navbar-item'>
              Login
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
