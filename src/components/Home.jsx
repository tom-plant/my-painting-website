// src/components/Home.jsx

import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Your Home page content here */}
        <h2>Welcome to My Portfolio</h2>
        <img src="/images/tallinn.png" alt="Tallinn" />
        <p>This is the Home page of my portfolio website.</p>
        {/* Add more content as needed */}
      </main>
    </div>
  );
};

export default Home;