import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import NavMenu from '../Menu/NavMenu';
import Home from '../../containers/Home/Home';
import Employer from '../../containers/Employer/Employer';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavMenu />
            <Route exact path="/" component={Home} />
            <Route exact path="/employer/post-job" component={Employer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
