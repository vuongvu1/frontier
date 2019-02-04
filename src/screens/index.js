import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { initializeFirebase } from 'services/firebase';
import {
  getMatchesForPageApi,
} from 'apis/firebase';
import { getAllMatchesAction } from 'actions/match';
import Header from 'components/header';
import Match from 'screens/match';
import Loading from 'components/loading';

import { normalizeMatches } from 'utils/normalizeData';
import './index.scss';

const About = lazy(() => import('screens/about'));

class App extends Component {

  getMatches = async () => {
    const matches = await getMatchesForPageApi();
    this.props.getAllMatchesProps(normalizeMatches(matches));
  }

  componentDidMount() {
    initializeFirebase();
    this.getMatches();
  }

  render() {
    const { matches } = this.props;
    return (
      <div>
        <Router>
          <div>
            <Header />
            <main>
              <div>
                <Route
                  exact path="/"
                  render={() => (
                    matches.length
                    ? <Match matches={matches} />
                    : <Loading />
                  )}
                />
                <Route
                  exact path="/about"
                  render={() => (
                    <Suspense fallback={<div>Loading...</div>}>
                      <About />
                    </Suspense>
                  )}
                />
              </div>
            </main>
          </div>
        </Router>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  ...state.match
 });

const mapDispatchToProps = dispatch => ({
  getAllMatchesProps: (matches) => dispatch(getAllMatchesAction(matches))
 });

export default connect(mapStateToProps, mapDispatchToProps)(App);