import React, { Component } from 'react';

import { DEFAULT_PAGE_SIZE } from 'constants/firebase';
import './index.scss';

class Match extends Component {
  state = { activeKey: '', activeVideo: '', isLoadingNextMatch: false };

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

  getMatches = async () => {
    this.setState(() => ({ isLoadingNextMatch: true }));
    this.props.getMatches().then(() => {
      this.setState(() => ({ isLoadingNextMatch: false }));
    });
  }

  render() {
    const { matches, length } = this.props;
    const { isLoadingNextMatch } = this.state;

    return (
      <div className="matches">
        {matches.map(this.renderMatches)}
        {
          isLoadingNextMatch
            ? (<div className="nextBtnLoading"></div>)
            : (
              <div onClick={this.getMatches} className="nextBtn">
                {`Next (${length + 1} - ${length + DEFAULT_PAGE_SIZE})`}
              </div>
            )
        }
      </div>
    );
  };
};


export default Match;
