import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.scss';

const App = (props) => {
  const { result } = props;
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">{ result }</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
};


const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state.simpleReducer
 });

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 });

export default connect(mapStateToProps, mapDispatchToProps)(App);
