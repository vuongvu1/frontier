import React, { Fragment } from 'react';

import './index.scss';

const Match = (props) => {
  const { matches } = props;
  console.log({ matches });
  return (
    <Fragment>
      {
        matches.map(match => (
          <div className="card" key={match.key}>
            <div className="container">
              <h4><b>{match.title}</b></h4>
              <p>{match.league}</p>
            </div>
          </div>
        )) 
      }
    </Fragment>
  );
};


export default Match;
