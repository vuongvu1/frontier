import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/ball.png';
import './index.scss';

const Header = () => (
  <header>
    <img src={logo} alt="logo" />
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
