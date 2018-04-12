import React, { Component } from 'react';
import {HashRouter as Router } from 'react-router-dom' 
import routes from './routes'

import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Shopping World</h1>
        </header>
          <Router>
            {routes}
          </Router>
      </div>
    );
  }
}

export default App;
