import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import './css/design.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import About from './components/pages/About';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
