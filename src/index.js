import React from 'react';
import ReactDOM from 'react-dom';
import NavLinks from './navlinks';
import Nav from './components/nav';
import Footer from './components/footer';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <div>
    <Router>
      <Nav />
      <NavLinks />
    </Router>
      <Footer />
  </div>,
  document.getElementById('root')
);



