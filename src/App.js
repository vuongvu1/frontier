import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { initializeFirebase } from 'services/firebase';
import {
  // getAllMatchesApi,
  getMatchesForPageApi,
} from 'apis/firebase';
import { getAllMatchesAction } from 'actions/match';
import Header from 'components/header';
import Match from 'components/match';
import About from 'components/about';

import { normalizeMatches } from 'utils/normalizeData';
import 'App.scss';

class App extends React.Component {

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
              <Route exact path="/" render={() => <Match matches={matches}/>} />
              <Route path="/about" component={About} />
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
