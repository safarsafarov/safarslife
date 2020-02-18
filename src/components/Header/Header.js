import React from 'react';
import { Link } from 'react-router-dom';

import Typer from './Typer';

import './Header.scss';

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="username">
          <Link to="/">
            <h4>Safar Safarov</h4>
          </Link>
          <p className="me">
            Full-stack Developer & <Typer />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
