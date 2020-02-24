import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <div className='content has-text-centered'>
          <p>
            <strong>ApplePie</strong> Created with <s>love</s> keyboard by{' '}
            <a href='http://lukzerom.ovh'>Łukasz Żeromski</a>.
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
