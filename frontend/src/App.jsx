import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './app/components/Header';
import MainPage from './app/pages/MainPage';
import ServicesPage from './app/pages/ServicesPage';
import SignUpPage from './app/pages/SignUpPage';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/profile">Profile</Route>
      </Switch>
    </Router>
  );
}

export default App;
