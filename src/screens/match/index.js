import React, { Component } from 'react';

import './index.scss';

class Match extends Component {
  state = { activeKey: '', activeVideo: '' };

  onClickOnMatch = (match) => {
    const { key, videos } = match;
    const isCurrentActiveKey = (prevState) => prevState.activeKey !== key;

    this.setState(prevState => ({
      activeKey: isCurrentActiveKey(prevState) ? key : '',
      activeVideo: isCurrentActiveKey(prevState) ? videos[0].src : prevState.activeVideo,
    }), () => {
      const element = document.getElementById(key);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    });
  };

  onClickVideoTitle = (e, activeKey) => {
    e.stopPropagation();
    this.setState(prevState => ({
      activeVideo: prevState.activeVideo !== activeKey ? activeKey : prevState.activeVideo,
    }));
  };

  renderVideoTitles = (video) => {
    const isActive = this.state.activeVideo === video.src;
    return (
      <div
        key={video.src}
        onClick={e => this.onClickVideoTitle(e, video.src)}
        className={`${isActive ? 'active' : ''} hideText`}
      >{video.title}</div>
    )
  };

  renderVideos = (video) => (
    this.state.activeVideo === video.src &&
      <iframe
        key={video.src}
        width='640' height='350'
        src={video.src}
        allowFullScreen
        title={video.title}
      />
  );

  renderMatches = (match) => {
    const { activeKey } = this.state;
    const isActive = activeKey === match.key;
    const videos = match.videos;

    return (
      <div
        id={match.key}
        key={match.key}
        className={`card ${isActive ? 'active' : ''}`}
        onClick={() => this.onClickOnMatch(match)}
      >
        <div className="container">
            <div className="title hideText">{match.title}</div>
            <div className="time hideText">{match.time}</div>
            <div className="league hideText">{match.league}</div>
            {
              isActive &&
                <div className="videos">
                  <div className="video-titles">
                    {videos.map(this.renderVideoTitles)}
                  </div>
                  <div className="video-src">
                    {videos.map(this.renderVideos)}
                  </div>
                </div>
            }
        </div>
      </div>
    )
  };

  render() {
    const { matches, getMatches, length } = this.props;

    return (
      <div className="matches">
        {matches.map(this.renderMatches)}
        <div
          onClick={getMatches}
          className="nextBtn"
        >{`Next (current ${length})`}</div>
      </div>
    );
  };
};


export default Match;
