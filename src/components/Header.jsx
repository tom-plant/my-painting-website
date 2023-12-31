// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="header-title">
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          ESTONIAN PAINTING PORTFOLIO
        </Link>
      </div>
      <div className="header-logo-container">
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" className="header-logo" />
        </Link>
      </div>
      <nav>
        <ul>
          {/* Conditionally render "Home" link based on current URL */}
          {location.pathname !== '/' && (
            <li>
              <Link to="/">home</Link>
            </li>
          )}
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/research">research</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
