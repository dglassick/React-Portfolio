import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Main from './pages/main';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import NotFound from './pages/notfound';

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path={'/'} component={Main}></Route>
          <Route exact path={'/portfolio'} component={Portfolio}></Route>
          <Route exact path={'/contact'} component={Contact}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
