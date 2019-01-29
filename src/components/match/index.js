import React, { Component, Fragment } from 'react';

import './index.scss';

class Match extends Component {
  state = { activeKey: '' };

  onClickOnMatch = (key) => {
    this.setState(prevState => ({
      activeKey: prevState.activeKey !== key ? key : ''
    }), () => {
      const element = document.getElementById(key);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    });
  };

  renderVideos = (video) => (
    <Fragment key={video.src}>
      <div>{video.title}</div>
      <iframe
        width='640' height='350'
        src={video.src}
        allowFullScreen
        title={video.title}
      ></iframe>
    </Fragment>
  );

  renderMatches = (match) => {
    const { activeKey } = this.state;
    const isActive = activeKey === match.key;

    return (
      <div
        id={match.key}
        key={match.key}
        className={`card ${isActive ? 'active' : ''}`}
        onClick={() => this.onClickOnMatch(match.key)}
      >
        <div className="container">
            <div className="title hideText">{match.title}</div>
            <div className="time hideText">{match.time}</div>
            <div className="league hideText">{match.league}</div>
            {isActive && match.videos.map(this.renderVideos)}
        </div>
      </div>
    )
  };

  render() {
    const { matches } = this.props;
    console.log({ matches });

    return matches.map(this.renderMatches);
  };
};


export default Match;
