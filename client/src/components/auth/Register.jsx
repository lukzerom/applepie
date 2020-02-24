import React, { Fragment, useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exist') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <Fragment>
      <div className='loginWrapper'>
        <div className='box'>
          <div className='title'>Account Register</div>
          <form onSubmit={onSubmit}>
            <div className='field'>
              <label className='label' htmlFor='name'>
                Name
              </label>
              <input
                className='input'
                type='text'
                placeholder='Restaurant name'
                name='name'
                value={name}
                onChange={onChange}
                required
              />
            </div>
            <div className='control'>
              <label htmlFor='email' className='label'>
                Email
              </label>
              <input
                className='input'
                type='email'
                name='email'
                value={email}
                onChange={onChange}
                placeholder='Email'
                required
              />
            </div>
            <div className='field'>
              <label htmlFor='password' className='label'>
                Password
              </label>
              <input
                className='input'
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                minLength='6'
              />
            </div>
            <div className='field'>
              <label htmlFor='password2' className='label'>
                Confrm password
              </label>
              <input
                className='input'
                type='password'
                name='password2'
                value={password2}
                onChange={onChange}
                minLength='6'
              />
            </div>
            <input
              type='submit'
              className='button is-success'
              value='Register'
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
