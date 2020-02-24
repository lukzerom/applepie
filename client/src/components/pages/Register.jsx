import React, { Fragment } from 'react';

const Register = () => {
  return (
    <Fragment>
      <div className='loginWrapper'>
        <div className='box'>
          <div className='title'>Account Register</div>
          <form>
            <div className='field'>
              <label className='label' htmlFor='name'>
                Name
              </label>
              <input
                className='input'
                type='text'
                placeholder='Restaurant name'
                name='name'
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
