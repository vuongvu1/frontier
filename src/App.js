import React from 'react';
import { connect } from 'react-redux';

import { initializeFirebase } from 'services/firebase';
import { simpleAction } from './actions/simpleAction';
import Header from './components/header';
import Match from './components/match';
import About from './components/about';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getAllMatches } from 'apis/firebase';
import './App.scss';

class App extends React.Component {

  getMatches = async () => {
    const matches = await getAllMatches();
    console.log({ matches });
  }

  componentDidMount() {
    initializeFirebase();
    this.getMatches();
  }

  render() {
    const { result } = this.props;
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
  }
};

const mapStateToProps = state => ({
  ...state.simpleReducer
 });

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 });

export default connect(mapStateToProps, mapDispatchToProps)(App);
