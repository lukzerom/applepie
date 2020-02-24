import React, { Fragment } from 'react';
import Home from './components/pages/Home';
import './css/design.css';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className='App'>
      <Home />
      <Footer />
    </div>
  );
};

export default App;
