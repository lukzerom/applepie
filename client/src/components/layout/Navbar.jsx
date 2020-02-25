import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  // const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  // const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    // clearContacts();
  };

  const guestLinks = (
    <Fragment>
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
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <Link to='/waitress' className='navbar-item'>
        Waitress panel
      </Link>
      <Link to='/bar' className='navbar-item'>
        Bar panel
      </Link>
      <Link to='/coffee' className='navbar-item'>
        Coffee panel
      </Link>
      <Link to='/kitchen' className='navbar-item'>
        Kitchen panel
      </Link>
      <Link to='/manager' className='navbar-item'>
        Manager
      </Link>
      <Link to='/settings' className='navbar-item'>
        Settings
      </Link>
      <span className='navbar-item' onClick={onLogout}>
        Logout
      </span>
    </Fragment>
  );

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
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
