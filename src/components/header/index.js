import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/ball.png';
import './index.scss';

const Header = () => (
  <header>
    <Link to="/"><img src={logo} alt="logo" /></Link>
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
