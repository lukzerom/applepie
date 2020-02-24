import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layout/Alerts';
import Home from './components/pages/Home';
import './css/design.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import About from './components/pages/About';

const App = () => {
  return (
    <div className='App'>
      <AuthState>
        <Router>
          <AlertState>
            <Navbar />
            <Alerts />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
            <Footer />
          </AlertState>
        </Router>
      </AuthState>
    </div>
  );
};

export default App;
