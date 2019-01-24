import React, { Fragment, Component } from 'react';

import './index.scss';

class Match extends Component {
  state = {
    activeKey: '',
  };

  onClickOnMatch = (key) => {
    this.setState(prevState => ({
      activeKey: prevState.activeKey !== key ? key : ''
    }));

    const element = document.getElementById(key);
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  };

  render() {
    const { matches } = this.props;
    const { activeKey } = this.state;
    console.log({ matches, activeKey });
    return (
    <Fragment>
        {
        matches.map(match => (
            <div
              id={match.key}
              key={match.key}
              className={`card ${activeKey === match.key ? 'card-active' : ''}`}
              onClick={() => this.onClickOnMatch(match.key)}
            >
            <div className="container">
                <div className="title hide">{match.title}</div>
                <div className="time hide">{match.time}</div>
                <div className="league hide">{match.league}</div>
            </div>
            </div>
        ))
        }
    </Fragment>
    );
  };
};


export default Match;
