import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/ball.png';
import './index.scss';

const Header = () => (
  <header>
    <Link to="/"><img src={logo} alt="logo" /></Link>
    <nav>
      <ul>
        <li>
          <NavLink className="hideText" to="/" exact activeClassName={'active'}>HOME</NavLink>
        </li>
        <li>
          <NavLink className="hideText" to="/about" exact activeClassName={'active'}>ABOUT</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
