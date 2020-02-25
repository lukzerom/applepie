import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <section class='hero is-medium is-light is-bold '>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title'>Apple pie</h1>
            <h2 class='subtitle'>
              All you need for manage your restaurant workflow - for free!
            </h2>
            <Link to='/register'>
              <button class='button is-link is-rounded'>Register</button>
            </Link>
            <Link to='/login'>
              <button class='button is-link is-rounded'>Login</button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
