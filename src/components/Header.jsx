// src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-title">ESTONIAN PAINTING PORTFOLIO</div>
      <div className="header-logo-container">
        <img src="/images/logo.png" alt="Logo" className="header-logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/gallery">gallery</a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/research">research</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;