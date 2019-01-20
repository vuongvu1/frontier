import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import Header from './components/header';
import Match from './components/match';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.scss';

const App = (props) => {
  const { result } = props;
  return (
    <div>
      <Router>
        <div>
          <Header result={result} />
          <main>
            <Route exact path="/" component={Match} />
            <Route path="/about" component={About} />
          </main>
        </div>
      </Router>
    </div>
  );
};

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
