import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import './App.css';
import NavMenu from '../Menu/NavMenu';
import Home from '../../containers/Home/Home';
import JobPost from '../../containers/JobPost/JobPost';
import JobDetails from '../../containers/JobPost/JobDetails';
import rootReducer from '../../reducers';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavMenu />
            <Route exact path="/" component={Home} />
            <Route exact path="/employer/post-job" component={JobPost} />
            <Route exact path="/job-post/details/:id" component={JobDetails} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
